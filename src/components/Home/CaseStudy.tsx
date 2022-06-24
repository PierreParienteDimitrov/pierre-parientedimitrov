import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import Container from '@/layouts/containers/Container'

import { caseStudies } from '../../utils/caseStudiesContent'

const CaseStudy: React.FC = () => {
  return (
    <div className="flex flex-col justify-center space-y-16">
      <Container>
        <h4 className="text-center font-bold text-secondary">
          Discover my projects
        </h4>
      </Container>
      <div className="flex w-full flex-wrap">
        {caseStudies.map((element, index) => {
          if (element.external) {
            return (
              <div key={index} className="relative w-full border-4 md:w-1/2">
                <a href={element.href} target="_blank" rel="noreferrer">
                  <div>
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
                </a>
              </div>
            )
          }

          return (
            <div key={index} className="relative w-full border-4 md:w-1/2">
              <Link href={element.href} passHref>
                <div>
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
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CaseStudy
