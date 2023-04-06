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
import { tailwindStyles } from '@/utils/tailwindStyles'

const TEMPSO: ICarousel[] = [
  {
    title: 'tempso1',
    src: '/Slide1.png',
    alt: 'alt1',
  },
  {
    title: 'tempso2',
    src: '/Slide2.png',
    alt: 'alt1',
  },
  {
    title: 'tempso3',
    src: '/Slide3.png',
    alt: 'alt3',
  },
  {
    title: 'tempso4',
    src: '/Slide4.png',
    alt: 'alt4',
  },
  {
    title: 'tempso5',
    src: '/Slide5.png',
    alt: 'alt5',
  },
  {
    title: 'tempso6',
    src: '/Slide6.png',
    alt: 'alt6',
  },
  {
    title: 'tempso7',
    src: '/Slide7.png',
    alt: 'alt7',
  },
]

const ProjectIntro: React.FC = () => {
  return (
    <div className="flex flex-col space-y-10 dark:text-gray-100">
      {/* introduction */}
      <h1 className={`font-bold ${tailwindStyles.textGradient}`}>
        Classical Music Streaming App
      </h1>
      <div className="flex flex-col space-y-4 md:w-4/6">
        <h3>
          <span className="font-bold">Tempso</span> is a live Classical Music
          Streaming Mobile App, fully integrated with Spotify and Apple Music.
        </h3>
        <h5>
          My task was to design a mobile application where users could
          <span className="font-bold italic"> discover </span> and{' '}
          <span className="font-bold italic"> browse </span>
          the classical music catalogue,{' '}
          <span className="font-bold italic"> compare </span> recordings and
          save liked recordings and playlists to their library.{' '}
        </h5>
      </div>
    </div>
  )
}

const Content: React.FC = () => {
  return (
    <>
      <Head>
        <title>{pageInformation[Routes.TempsoUX]!.title}</title>
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
      <div className="flex flex-col items-center space-y-16 dark:text-gray-100 md:pb-16">
        {/* Process */}
        <div className="flex flex-col space-y-2">
          <h2 className="font-bold">Process</h2>
          <h5>
            As the sole UX/UI designer and researcher, my goal was to create a
            user-centered design for Tempso by spending extra time with
            researching and iterating designs based on usability testings. Thus,
            the process was divided into the following steps:
          </h5>
        </div>
        {/* Research */}
        <div className="flex flex-col space-y-2">
          <h2 className="font-bold">Research</h2>
          <div className="flex flex-col space-y-10">
            <h5>
              I spent a full month conducting user research with musicians,
              classical music amateurs and music streaming users through
              interviews to understand user’s experience with classical music
              streaming. I also reviewed secondary research and user comments
              about existing solutions for classical music streaming on forums
              and blogs.
            </h5>
            <h5>
              My hypothesis was that a majority of users would listen to
              classical music only if they were already very familiar with the
              genre, but I was surprised to find in my research that over half
              of potential users did not have a strong relationship to classical
              music and were curious to discover it. The largest complaint found
              in research was that users, both classical music specialists and
              non-specialists, didn’t know how to find classical music
              recordings or where to start.
            </h5>
          </div>
        </div>
        {/* Pain Points */}
        <div className="flex flex-col space-y-2">
          <h2 className="font-bold">Pain Points</h2>
          <div className="flex flex-col space-y-8">
            <div className="flex flex-col space-y-2">
              <h5 className="font-bold">🎯 Accuracy</h5>
              <h5>
                Classical music specialists who didn’t stream classical music
                said their reasoning was that they could never get a clear
                picture of what recording they were listening too. “Why is the
                composer tagged as a performer? Why can’t I find the complete
                list of performers for this recording?” were common comments
                addressed to mainstream music streaming platforms. I decided to
                change this by building a complete classical music data
                architecture which would guide the design process.
              </h5>
              <h5 className="py-8 italic">
                Click on the image to open it in full-width
              </h5>
              <div className="pb-8">
                <a
                  href="/_next/image?url=%2Fdata-architecture.png&w=3840&q=75"
                  target="_blank"
                  className="h-full w-full cursor-pointer"
                >
                  <Image
                    src="/data-architecture.png"
                    alt="Persona 1"
                    layout="responsive"
                    width={4647}
                    height={748}
                    objectFit="cover"
                    priority
                  />
                </a>
              </div>
            </div>
            <div className="flex flex-col space-y-10">
              <div className="flex flex-col space-y-2">
                <h5 className="font-bold">♾️ Exhaustivity</h5>
                <h5>
                  Classical music specialists felt like they could never browse
                  the complete discography of a performer, nor the complete list
                  of compositions from a composer. They could also never compare
                  easily different recordings of the same composition and select
                  their preferred version.
                </h5>
              </div>
              <div className="flex flex-col space-y-2">
                <h5 className="font-bold">🧭 Discovery</h5>
                <h5>
                  Non-specialists classical music listeners felt like it was
                  extremely difficult to know where to start their journey on
                  mainstream music streaming apps. They felt like they were left
                  with limited choices with compilations such as “Relax with
                  Mozart” or intimidating classical music albums where they did
                  not understand the track titles. They wanted to discover and
                  explore classical music but “did not know where to start”.
                </h5>
              </div>
            </div>
          </div>
        </div>
        {/* Define */}
        <div className="flex flex-col space-y-2">
          <h2 className="font-bold">Define</h2>
          <div className="flex flex-col space-y-10">
            <h5>
              I began the defining stage by creating multiple personas based on
              users interviewed during the research stage.
            </h5>
            <div className="flex flex-col space-y-4">
              <div>
                <Image
                  src="/Cecilia.png"
                  alt="Persona 1"
                  layout="responsive"
                  width={1920}
                  height={1080}
                  objectFit="cover"
                  priority
                />
              </div>
              <div>
                <Image
                  src="/Nathalie.png"
                  alt="Persona 2"
                  layout="responsive"
                  width={1920}
                  height={1080}
                  objectFit="cover"
                  priority
                />
              </div>
              <div>
                <Image
                  src="/Benjamin.png"
                  alt="Persona 3"
                  layout="responsive"
                  width={1920}
                  height={1080}
                  objectFit="cover"
                  priority
                />
              </div>
            </div>
            <h5>
              My biggest takeaway from research was that users wanted different
              type of experience for a classical music streaming app.
            </h5>
            <h5>
              Musicians and experimented classical music listeners wanted the
              ability to deep dive into the catalogue, explore performer’s
              discographies, composer’s catalogues, compare recordings, explore
              genres. This category of users wanted to be allowed to explore the
              catalogue through different data points, but did not need
              suggestions and recommendations on what to listen to.
            </h5>
            <h5>
              First-time listeners wanted to know where to start and what to
              listen to. They are not independent listeners and need help to
              turn on the music.
            </h5>
            <h5>
              To answer bot of those needs, I decided to list desired actions
              for both personas and build user journey:
            </h5>
          </div>
        </div>
        {/* User Journey */}
        <div className="flex flex-col space-y-2">
          <h2 className="font-bold">User Journey</h2>
          <div className="flex flex-col space-y-10">
            <div className="flex flex-col space-y-4">
              <h5 className="font-bold">User Journey #1: Compare Recordings</h5>
              <h5>
                In order to answer Cecilia&apos;s needs, I created a first flow
                chart that detailed all the required steps that a user must take
                to compare recordings of the same composition.
              </h5>
              <h5>
                This flow chart showed that users would have to undertake a lot
                of different steps in order to be able to compare recordings.
                User Research showed, however, that this feature was appreciated
                equally by all Personas. In addition, it seemed like a
                differentiator for Tempso.
              </h5>
              <h5>
                This is why I decided to have a &quot;Compare&quot; tab, in the
                bottom navigation. This tab is refreshed with the current
                composition that the user is listening to. This helps any user
                compare recordings easily and &quot;hammers&quot; Tempso&apos;s
                value proposition; but also demonstrates the uniqueness of
                classical music.
              </h5>
              <div>
                <Image
                  src="/flow-chart-compare.png"
                  alt="Flow Chart Discover"
                  layout="responsive"
                  width={1920}
                  height={768}
                  objectFit="cover"
                  priority
                />
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <h5 className="font-bold">User Journey #2: Explore Recordings</h5>
              <h5>
                In order to answer Nathalie&apos;s needs, I created a user
                journey that allowed users like her to explore new recordings.
              </h5>
              <h5>
                This is why I created the concept of automated radios which are
                refreshed every day with new recordings. Those radios select
                recordings through a set of filters like a timeframe (daily
                discovery), a genre, a composer or performer.
              </h5>
              <div>
                <Image
                  src="/flow-chart-explore.png"
                  alt="Flow Chart Explore"
                  layout="responsive"
                  width={1920}
                  height={768}
                  objectFit="cover"
                  priority
                />
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <h5 className="font-bold">
                User Journey #3: Discover Recordings
              </h5>
              <h5>
                In order to answer Benjamin&apos;s needs, I created a user
                journey that allowed users like him to discover music.
              </h5>
              <h5>
                Those users needed more guidance than automated radios. This is
                why I created the concept of manually-curated playlists. Those
                thematic playlist showcase a selection of famous classical music
                recordings that are a good start for a new listener.
              </h5>
              <div>
                <Image
                  src="/flow-chart-discover.png"
                  alt="Flow Chart Discover"
                  layout="responsive"
                  width={1920}
                  height={768}
                  objectFit="cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        {/* Wireframes */}
        <div className="flex flex-col space-y-2">
          <h2 className="font-bold">Wireframes</h2>
          <div className="flex flex-col space-y-10">
            <div className="flex flex-col space-y-4">
              <h5>
                The User Research, Data Architecture and User Journeys helped me
                start the Wireframes with the user in mind.
              </h5>
              <h5>
                I created low-fidelity mockups of the Browse page, the compare
                page, and a playlist / radio / album page. While doing this
                work, I layed out the main design concepts that guided the rest
                of the design work:
              </h5>
              <h5>
                Create two Recording Component: one for all playlists, albums,
                radios; and another one specifically for the Compare page, which
                would focus the user on the performers only. Since the compare
                page would display as a title the composer name, era, and
                composition title, it felt unecessary to repeat this information
                for each recordings.
              </h5>
              <h5>
                Build consitency with the same layout for all the Album,
                Playlist, Radio, Curated Playlist pages.
              </h5>
              <h5>
                Build carousel that would suggest to users playlists and radios
                in order to facilitate their discovery and exploration.
              </h5>
              <div>
                <a
                  href="/_next/image?url=%2Ftempso_wireframes.png&w=3840&q=75"
                  target="_blank"
                  className="h-full w-full cursor-pointer"
                >
                  <Image
                    src="/tempso_wireframes.png"
                    alt="Wireframe1"
                    layout="responsive"
                    width={2757}
                    height={4096}
                    objectFit="cover"
                    priority
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <h2 className="cursor-pointer pb-16 font-bold text-primary underline">
          Tempso is live application.
          <a href="https://www.tempso.com/"> Discover it here!</a>
        </h2>
      </div>
    </>
  )
}

const Tempso: React.FC = () => {
  const project = caseStudies.filter((item) => item.key === 'tempso')
  const projectMetrics = project[0]?.metrics

  return (
    <Container>
      <div className="flex flex-col space-y-12 border-b border-secondary py-12">
        <ProjectIntro />
        <ProjectMetrics projectMetrics={projectMetrics} />
      </div>
      {/* carousel */}
      <div className="py-8">
        <Carousel carouselItems={TEMPSO} />
      </div>

      <div className="flex flex-col space-y-8 md:mt-16">
        <ContainerText>
          <Content />
        </ContainerText>
      </div>
    </Container>
  )
}

export default Tempso
