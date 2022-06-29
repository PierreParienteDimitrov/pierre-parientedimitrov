import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import Container from '@/layouts/containers/Container'

import { caseStudies } from '../../utils/caseStudiesContent'

interface IDescription {
  project: string
  year: string
  platform: string
  title: string
  description: string
}

const ProjectDescription: React.FC<IDescription> = ({
  project,
  year,
  platform,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col space-y-4">
      <h6 className="font-semibold uppercase tracking-wider text-secondary">
        {project} ({year}) • {platform}
      </h6>
      <div className="flex flex-col space-y-2">
        <h4 className="">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}

const CaseStudy: React.FC = () => {
  return (
    <Container>
      <div className="flex flex-col space-y-8">
        <h2 className="font-thin tracking-wide text-secondary">
          Design Stories
        </h2>
        <div className="flex w-full flex-wrap">
          {caseStudies.map((element, index) => {
            if (element.external) {
              return (
                <div
                  key={index}
                  className="flex w-full flex-col space-y-4 pr-8 pb-16 md:w-1/2"
                >
                  <a href={element.href} target="_blank" rel="noreferrer">
                    <div className="relative">
                      <Image
                        src={element.src}
                        alt={element.alt}
                        layout="responsive"
                        width={640}
                        height={383}
                        objectFit="cover"
                        priority
                      />
                      <div className="absolute inset-0 flex cursor-pointer items-center justify-center pr-4 pb-4 opacity-0 duration-300 hover:bg-black hover:opacity-90">
                        <div className="flex flex-col items-center justify-center space-y-4 text-white">
                          <h3>Read More!</h3>
                        </div>
                      </div>
                    </div>
                  </a>
                  <ProjectDescription
                    project={element.project}
                    year={element.year}
                    platform={element.platform}
                    title={element.title}
                    description={element.description}
                  />
                </div>
              )
            }

            return (
              <div
                key={index}
                className="flex w-full flex-col space-y-4 pr-8 pb-16 md:w-1/2"
              >
                <Link href={element.href} passHref>
                  <div className="relative">
                    <Image
                      src={element.src}
                      alt={element.alt}
                      layout="responsive"
                      width={640}
                      height={383}
                      objectFit="cover"
                      priority
                    />
                    <div className="absolute inset-0 flex cursor-pointer items-center justify-center pr-4 pb-4 opacity-0 duration-300 hover:bg-black hover:opacity-90">
                      <div className="flex flex-col items-center justify-center space-y-4 text-white">
                        <h3>Read More!</h3>
                      </div>
                    </div>
                  </div>
                </Link>
                <ProjectDescription
                  project={element.project}
                  year={element.year}
                  platform={element.platform}
                  title={element.title}
                  description={element.description}
                />
              </div>
            )
          })}
        </div>
      </div>
    </Container>
  )
}

export default CaseStudy
