import { pageInformation, Routes } from 'constants/pages'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { AiOutlineArrowRight } from 'react-icons/ai'

import { ICarousel } from '@/../types/ICarousel'
import Carousel from '@/components/Carousel'
import ProjectMetrics from '@/components/ProjectMetrics'
import Container from '@/layouts/containers/Container'
import ContainerText from '@/layouts/containers/ContainerText'
import { caseStudies } from '@/utils/copy/caseStudiesContent'
import { charterImages } from '@/utils/copy/charterImages'
import { getServerSideProps } from '@/utils/protectedRoutes'
import { tailwindStyles } from '@/utils/tailwindStyles'

import fadeIn from '../../styles/fadeIn.module.css'

const BLUECARGO_PAYMENT: ICarousel[] = [
  {
    title: 'homepage',
    src: '/spectrum-homepage.png',
    alt: 'homepage',
  },
  {
    title: 'movie',
    src: '/spectrum-movie.png',
    alt: 'movie',
  },
  {
    title: 'spectrum-related',
    src: '/spectrum-related.png',
    alt: 'spectrum-related',
  },
  {
    title: 'spectrum-nav',
    src: '/spectrum-nav.png',
    alt: 'spectrum-nav',
  },
]

const Headline: React.FC<{ title: string; description: string[] }> = ({
  title,
  description,
}) => {
  return (
    <div className="flex  py-12 md:h-[600px]">
      <ContainerText>
        <div className="flex flex-col space-y-2">
          <h5 className="font-bold uppercase tracking-widest text-gray-600">
            {title}
          </h5>
          <ul className="flex flex-col space-y-12">
            {description.map((el, index) => (
              <li key={index} className="flex items-start">
                <div className="flex items-center justify-center">
                  {description.length > 1 && (
                    <AiOutlineArrowRight className="relative top-4 mr-8 h-[32px] w-[32px] text-secondary" />
                  )}
                </div>
                <h2 className="font-light text-gray-200">{el || ''}</h2>
              </li>
            ))}
          </ul>
        </div>
      </ContainerText>
    </div>
  )
}

const ProjectIntro: React.FC = () => {
  return (
    <div className="flex flex-col space-y-10 dark:text-white">
      {/* introduction */}
      <h1 className={`font-bold ${tailwindStyles.textGradient}`}>
        Spectrum Video Platforms Design System
      </h1>
      <div className="flex flex-col space-y-4 md:w-4/6">
        <h3>
          <span className="font-bold">Spectrum Video</span> is a
          subscription-based service with diverse video content, including
          movies, TV shows, sports, documentaries, and more, available for
          on-demand streaming.
        </h3>
        <h5>
          My task was to transition all design assets from Sketch to Figma and
          build the component libraries for all video platforms, including the
          TVSDK (720px) and Apple TV and Android TV (1920px).
        </h5>
      </div>
    </div>
  )
}

const Content: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center space-y-8 text-gray-800 dark:text-gray-100 md:pb-16">
        {/* Process */}
        <div className="flex flex-col justify-start">
          <Headline
            title="Objective"
            description={[
              'As a product designer at Spectrum TV, I focused on developing a comprehensive design system for all video platforms. My objective was to ensure consistency in design logic across platforms, while accommodating for slight variations in component UI within the Spectrum TV ecosystem.',
            ]}
          />
          <Headline
            title="Tasks"
            description={[
              'Transition and update all components from Sketch to Figma;',
              'Build the TVSDK design system (720px), Apple TV and Android TV design system (1920px);',
              'Build the main page templates for all of those libraries.',
            ]}
          />
        </div>

        {/* Components */}
        <div className="flex w-full flex-col space-y-8">
          <ContainerText>
            <h3 className="pt-8 pb-4 font-bold">Component Library - Samples</h3>
          </ContainerText>
          <div className="mb-16 shadow-md">
            <AnimationOnScroll animateIn={fadeIn['fade-in-image']}>
              <Image
                src="/spectrum-showcard-anatomy.png"
                alt="showcard"
                layout="responsive"
                width={2300}
                height={1323}
                objectFit="cover"
                priority
              />
            </AnimationOnScroll>
          </div>
          <div className="mb-16 shadow-md">
            <AnimationOnScroll animateIn={fadeIn['fade-in-image']}>
              <Image
                src="/spectrum-nav.png"
                alt="spectrum nav"
                layout="responsive"
                width={1920}
                height={1080}
                objectFit="cover"
                priority
              />
            </AnimationOnScroll>
          </div>
        </div>
        {/* Mockups */}
        <div className="flex w-full flex-col space-y-8 md:pt-48">
          <ContainerText>
            <h3 className="pb-4 font-bold">High-fidelity Mockups</h3>
          </ContainerText>
        </div>
        <div className="flex w-full flex-col space-y-16 md:space-y-32">
          <div className="shadow-md">
            <AnimationOnScroll animateIn={fadeIn['fade-in-image']}>
              <Image
                src="/spectrum-settings.png"
                alt="homepage"
                layout="responsive"
                width={1280}
                height={720}
                objectFit="cover"
                priority
              />
            </AnimationOnScroll>
          </div>
          <div className="h-[400px] overflow-auto shadow-md md:h-[900px]">
            <AnimationOnScroll animateIn={fadeIn['fade-in-image']}>
              <Image
                src="/spectrum-homepage.png"
                alt="homepage"
                layout="responsive"
                width={1920}
                height={7388}
                objectFit="cover"
                priority
              />
            </AnimationOnScroll>
          </div>
          {charterImages.map((img, index) => {
            return (
              <div className="shadow-md" key={index}>
                <AnimationOnScroll animateIn={fadeIn['fade-in-image']}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    layout="responsive"
                    width={img.width}
                    height={img.height}
                    objectFit="cover"
                    priority
                  />
                </AnimationOnScroll>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

const Charter: React.FC = () => {
  const project = caseStudies.filter((item) => item.key === 'charter')
  const projectMetrics = project[0]?.metrics

  return (
    <>
      <Head>
        <title>{pageInformation[Routes.CheckoutFlow]!.title}</title>
        <meta
          property="og:url"
          content="https://www.pierreparientedimitrov.com/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="website-preview" />
        <meta
          property="og:description"
          content="Pierre Pariente Dimitrov Portfolio = UX/UI designer & Software Engineer"
        />
        <meta property="og:image" content="/website-preview.png" />
      </Head>
      <Container>
        <div className="flex flex-col space-y-12 border-b border-secondary py-12">
          <ProjectIntro />
          <ProjectMetrics projectMetrics={projectMetrics} />
        </div>
        {/* carousel */}
        <div className="py-8">
          <Carousel carouselItems={BLUECARGO_PAYMENT} />
        </div>

        <div className="flex flex-col space-y-8 md:mt-16">
          <Content />
        </div>
      </Container>
    </>
  )
}

export default Charter
export { getServerSideProps }
