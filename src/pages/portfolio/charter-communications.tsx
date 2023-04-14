import { pageInformation, Routes } from 'constants/pages'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

import { ICarousel } from '@/../types/ICarousel'
import Carousel from '@/components/Carousel'
import ProjectMetrics from '@/components/ProjectMetrics'
import Container from '@/layouts/containers/Container'
import ContainerText from '@/layouts/containers/ContainerText'
import { caseStudies } from '@/utils/copy/caseStudiesContent'
import { getServerSideProps } from '@/utils/protectedRoutes'
import { tailwindStyles } from '@/utils/tailwindStyles'

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
        <ContainerText>
          <div className="flex flex-col space-y-2">
            <h2 className="font-bold">Process</h2>
            <h5>
              My goal was to create a system that followed the same design logic
              whatever the platform. Even if the component UI for the different
              platforms is slightly different, I wanted the components to be
              built as similar as possible.
            </h5>
          </div>
        </ContainerText>
        {/* Business Brief */}
        <ContainerText>
          <div className="flex flex-col space-y-2">
            <h2 className="font-bold">Business Brief</h2>
            <div className="flex flex-col space-y-8">
              <h5>The objective of my contract with Spectrum TV was:</h5>
              <div>
                <ul className="flex list-disc flex-col space-y-2 pl-4 pt-4">
                  <li>
                    <h5>
                      Transition and update all components from Sketch to Figma;
                    </h5>
                  </li>
                  <li>
                    <h5>
                      Build the TVSDK design system (720px), Apple TV and
                      Android TV design system (1920px);
                    </h5>
                  </li>
                  <li>
                    <h5>
                      Build the main page templates for all of those libraries.
                    </h5>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </ContainerText>
        {/* Components */}
        <div className="flex w-full flex-col space-y-2">
          <ContainerText>
            <h2 className="pb-4 text-center font-bold">
              Component Library - Samples
            </h2>
          </ContainerText>
          <ContainerText>
            <div className="mb-16 shadow-md">
              <Image
                src="/spectrum-showcard-anatomy.png"
                alt="showcard"
                layout="responsive"
                width={2300}
                height={1323}
                objectFit="cover"
                priority
              />
            </div>
          </ContainerText>
          <ContainerText>
            <div className="mb-16 shadow-md">
              <Image
                src="/spectrum-nav.png"
                alt="spectrum nav"
                layout="responsive"
                width={1920}
                height={1080}
                objectFit="cover"
                priority
              />
            </div>
          </ContainerText>
        </div>
        {/* Mockups */}
        <div className="flex w-full flex-col space-y-8">
          <ContainerText>
            <h2 className="pb-4 text-center font-bold">
              High-fidelity Mockups
            </h2>
          </ContainerText>
        </div>
        <div className="flex w-full flex-col space-y-32">
          <div className="shadow-md">
            <Image
              src="/spectrum-settings.png"
              alt="homepage"
              layout="responsive"
              width={1280}
              height={720}
              objectFit="cover"
              priority
            />
          </div>
          <div className="h-[900px] overflow-auto shadow-md">
            <Image
              src="/spectrum-homepage.png"
              alt="homepage"
              layout="responsive"
              width={1920}
              height={7388}
              objectFit="cover"
              priority
            />
          </div>
          <div className="shadow-md">
            <Image
              src="/spectrum-movie.png"
              alt="homepage"
              layout="responsive"
              width={1920}
              height={1080}
              objectFit="cover"
              priority
            />
          </div>
          <div className="shadow-md">
            <Image
              src="/spectrum-related.png"
              alt="related"
              layout="responsive"
              width={1920}
              height={1080}
              objectFit="cover"
              priority
            />
          </div>
          <div className="shadow-md">
            <Image
              src="/spectrum-channel.png"
              alt="channel"
              layout="responsive"
              width={1280}
              height={720}
              objectFit="cover"
              priority
            />
          </div>
          <div className="shadow-md">
            <Image
              src="/spectrum-checkout.png"
              alt="homepage"
              layout="responsive"
              width={1280}
              height={720}
              objectFit="cover"
              priority
            />
          </div>
          <div className="shadow-md">
            <Image
              src="/spectrum-preferences.png"
              alt="homepage"
              layout="responsive"
              width={1280}
              height={720}
              objectFit="cover"
              priority
            />
          </div>
          <div className="shadow-md">
            <Image
              src="/spectrum-ondemand.png"
              alt="homepage"
              layout="responsive"
              width={1280}
              height={720}
              objectFit="cover"
              priority
            />
          </div>
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
