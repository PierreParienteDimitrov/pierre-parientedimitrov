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
  color: string
  href: string
}

const ProjectDescription: React.FC<IDescription> = ({
  project,
  year,
  platform,
  title,
  description,
  color,
  href,
}) => {
  const border = color === 'primary' ? 'border-primary' : 'border-secondary'
  const backgroundHover =
    color === 'primary' ? 'hover:bg-primary' : 'hover:bg-secondary'

  return (
    <div className="flex flex-col items-start space-y-8">
      <div className="flex flex-col items-start space-y-4">
        <h6 className={`font-semibold uppercase tracking-wider text-${color}`}>
          {project} ({year}) • {platform}
        </h6>
        <div className="flex flex-col space-y-2">
          <h4 className="">{title}</h4>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
      <div
        className={`px-4 py-2 border ${border} text-${color} bg-white cursor-pointer transition delay-50 duration-300 ease-in-out ${backgroundHover} hover:text-white`}
      >
        <Link href={href} passHref>
          <h6 className="uppercase tracking-widest">Read the story</h6>
        </Link>
      </div>
    </div>
  )
}

interface IUseCasesItems {
  external: boolean
  src: string
  alt: string
  project: string
  year: string
  platform: string
  title: string
  description: string
  color: string
  href: string
}

interface ITitle {
  title: string
}

const UseCases: React.FC<IUseCasesItems[], ITitle> = ({
  useCasesItems,
  title,
}) => {
  return (
    <div className="flex flex-col space-y-8">
      <h2 className="font-thin tracking-wide text-primary">{title} </h2>
      <div className="flex w-full flex-wrap">
        {useCasesItems.map((element, index) => {
          return (
            <div
              key={index}
              className="flex w-full flex-col space-y-4 pb-16 md:w-1/2 md:pr-8"
            >
              <a
                href={element.href}
                target={element.external ? '_blank' : ''}
                rel="noreferrer"
              >
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
                color="primary"
                href={element.href}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

const CaseStudy: React.FC = () => {
  const latestDesignStories = caseStudies.filter(
    (el) => el.project === 'Tempso' || el.project === 'BlueCargo'
  )

  const latestEngineering = caseStudies.filter(
    (el) =>
      el.project === 'Portfolio Website' || el.project === 'Tempso Landing Page'
  )

  return (
    <Container>
      <div className="flex flex-col space-y-8 md:space-y-10">
        {/* Design Stories */}
        <UseCases
          UseCasesItems={latestDesignStories}
          title="latest design stories"
        />
        <UseCases
          UseCasesItems={latestEngineering}
          title="Latest Engineering Projects"
        />
      </div>
    </Container>
  )
}

export default CaseStudy
