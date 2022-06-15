import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import Tag from '@/components/Tag'
import Container from '@/layouts/containers/Container'
import { caseStudies } from '@/utils/caseStudiesContent'

const Portfolio = () => {
  return (
    <div className="py-16">
      <Container>
        <div className="pb-16">
          <h3>Portfolio</h3>
        </div>
        <div className="flex flex-col space-y-32 md:space-y-16">
          {caseStudies.map((element, index) => {
            if (element.external) {
              return (
                <div
                  key={index}
                  className="flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-8"
                >
                  <div className="relative w-full shadow-md md:w-1/2">
                    <a href={element.href} target="_blank" rel="noreferrer">
                      <Image
                        src={element.src}
                        alt={element.alt}
                        // layout="fill"
                        width={640}
                        height={383}
                        objectFit="cover"
                        priority
                      />
                      <div className="absolute inset-0 flex cursor-pointer items-center justify-center opacity-0 duration-300 hover:bg-black hover:opacity-90">
                        <div className="flex flex-col items-center justify-center space-y-4 text-white">
                          <h5 className="font-semibold uppercase tracking-widest">
                            {element.project}
                          </h5>
                          <h3>{element.description}</h3>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="flex w-full flex-col space-y-4 md:w-1/2">
                    <div className="flex flex-col space-y-2">
                      <h4>{element.project}</h4>
                      <hr className="w-full" />
                    </div>
                    <div className="flex space-x-4">
                      {element.tags.map((tag, index) => {
                        return (
                          <div key={index}>
                            <Tag tag={tag} />
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              )
            }

            return (
              <div
                key={index}
                className="flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-8"
              >
                <Link href={element.href} passHref>
                  <div className="relative w-full shadow-md md:w-1/2">
                    <Image
                      src={element.src}
                      alt={element.alt}
                      layout="responsive"
                      width={640}
                      height={383}
                      objectFit="cover"
                      priority
                    />
                    <div className="absolute inset-0 flex cursor-pointer items-center justify-center opacity-0 duration-300 hover:bg-black hover:opacity-90">
                      <div className="flex flex-col items-center justify-center space-y-4 text-white">
                        <h5 className="font-semibold uppercase tracking-widest">
                          {element.project}
                        </h5>
                        <h3>{element.description}</h3>
                      </div>
                    </div>
                  </div>
                </Link>

                <div className="flex w-1/2 flex-col space-y-4">
                  <div className="flex flex-col space-y-2">
                    <h4>{element.project}</h4>
                    <hr className="w-full" />
                  </div>
                  <div className="flex space-x-4">
                    {element.tags.map((tag, index) => {
                      return (
                        <div key={index}>
                          <Tag tag={tag} />
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </div>
  )
}

export default Portfolio
