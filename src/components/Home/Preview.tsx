import { pageInformation, Routes } from 'constants/pages'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import Container from '@/layouts/containers/Container'
import TwoColsScreen from '@/layouts/grids/TwoColsScreen'
import styles from '@/styles/animations.module.css'
import { tags } from '@/utils/tags'
import { tailwindStyles } from '@/utils/tailwindStyles'

import Tag from '../Tag'

const Description1: React.FC = () => {
  return (
    <Container>
      <div className="flex w-full flex-col items-start space-y-4">
        <div className="flex flex-col space-y-2">
          <h6 className="font-black uppercase tracking-widest">Bluecargo</h6>
          <h4>Supply Chain Management Software</h4>
          <hr className="w-full" />
        </div>
        <div className="flex flex-wrap items-start">
          <div className="mr-2 mb-2">
            <Tag tag={tags.ur} />
          </div>
          <Tag tag={tags.ux} />
          <Tag tag={tags.ui} />
        </div>
        <Link
          href={`${pageInformation[Routes.ContainerTracking]!.path}`}
          passHref
        >
          <h5
            className={`${tailwindStyles.textGradient} uppercase cursor-pointer ${styles['hover-underline-animation']} pt-8`}
          >
            Learn More
          </h5>
        </Link>
      </div>
    </Container>
  )
}

const ProjectImage1: React.FC = () => {
  return (
    <div className="relative w-full shadow-lg">
      <a
        href={`${pageInformation[Routes.ContainerTracking]!.path}`}
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src="/container-management-wireframe.png"
          alt="container tracking"
          layout="responsive"
          width={1440}
          height={764}
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 flex cursor-pointer items-center justify-center opacity-0 duration-300 hover:bg-black hover:opacity-90">
          <div className="flex flex-col items-center justify-center space-y-4 text-white">
            <h5 className="font-semibold uppercase tracking-widest">
              Request Access
            </h5>
          </div>
        </div>
      </a>
    </div>
  )
}

const Description2: React.FC = () => {
  return (
    <Container>
      <div className="flex w-full flex-col items-start space-y-4">
        <div className="flex flex-col space-y-2">
          <h6 className="font-black uppercase tracking-widest">Tempso</h6>
          <h4>Classical Music Streaming App</h4>
          <hr className="w-full" />
        </div>
        <div className="flex flex-wrap items-start">
          <div className="mr-2 mb-2">
            <Tag tag={tags.ur} />
          </div>
          <Tag tag={tags.ux} />
          <Tag tag={tags.ui} />
        </div>
        <Link href={`${pageInformation[Routes.TempsoUX]!.path}`} passHref>
          <h5
            className={`${tailwindStyles.textGradient} uppercase cursor-pointer ${styles['hover-underline-animation']} pt-8`}
          >
            Learn More
          </h5>
        </Link>
      </div>
    </Container>
  )
}

const ProjectImage2: React.FC = () => {
  return (
    <div className="relative w-full shadow-lg">
      <a
        href={`${pageInformation[Routes.TempsoUX]!.path}`}
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src="/case-study-tempso.png"
          alt="Tempso Case Study"
          layout="responsive"
          width={1440}
          height={862}
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 flex cursor-pointer items-center justify-center opacity-0 duration-300 hover:bg-black hover:opacity-90">
          <div className="flex flex-col items-center justify-center space-y-4 text-white">
            <h5 className="font-semibold uppercase tracking-widest">
              Read Case Study
            </h5>
          </div>
        </div>
      </a>
    </div>
  )
}

const Preview = () => {
  return (
    <div className="flex flex-col">
      <div className="flex h-full items-center py-16 md:py-24">
        <TwoColsScreen
          leftSide={<Description1 />}
          rightSide={<ProjectImage1 />}
          leftDesktopOrder={1}
          leftMobileOrder={1}
          rightMobileOrder={2}
          rightDesktopOrder={2}
        />
      </div>
      <div className="flex h-full items-center py-16 md:py-24">
        <TwoColsScreen
          leftSide={<Description2 />}
          rightSide={<ProjectImage2 />}
          leftDesktopOrder={1}
          leftMobileOrder={1}
          rightMobileOrder={2}
          rightDesktopOrder={2}
        />
      </div>
      <Container>
        <div className="py-32 text-center">
          <Link href={`${pageInformation[Routes.Portfolio]!.path}`} passHref>
            <h3
              className={`${tailwindStyles.textGradient} cursor-pointer ${styles['hover-underline-animation']}`}
            >
              See More projects
            </h3>
          </Link>
        </div>
      </Container>
    </div>
  )
}

export default Preview
