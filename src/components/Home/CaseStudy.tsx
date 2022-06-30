import Image from 'next/image'
import React from 'react'
import { IDescription, IUseCasesItems } from 'types/ICase'

import Container from '@/layouts/containers/Container'

import { caseStudies } from '../../utils/caseStudiesContent'

const ProjectDescription: React.FC<IDescription> = ({
  project,
  year,
  platform,
  title,
  description,
  color,
  href,
  button,
  external,
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
        <a href={href} target={external ? '_blank' : ''} rel="noreferrer">
          <h6 className="uppercase tracking-widest">{button}</h6>
        </a>
      </div>
    </div>
  )
}

const UseCases: React.FC<{
  useCasesItems: IUseCasesItems[]
  title: string
  color: string
  button: string
}> = ({ useCasesItems, title, color, button }) => {
  const textColor = color === 'primary' ? 'text-primary' : 'text-secondary'
  return (
    <div className="flex flex-col space-y-8">
      <h2 className={`font-thin capitalize tracking-wide ${textColor}`}>
        {title}{' '}
      </h2>
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
                color={color}
                href={element.href}
                button={button}
                external={element.external}
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
          useCasesItems={latestDesignStories}
          title="latest design stories"
          color="primary"
          button="read the story"
        />
        <UseCases
          useCasesItems={latestEngineering}
          title="Latest Engineering Projects"
          color="secondary"
          button="see project"
        />
      </div>
    </Container>
  )
}

export default CaseStudy
