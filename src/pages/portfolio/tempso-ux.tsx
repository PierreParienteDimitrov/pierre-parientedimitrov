import { pageInformation, Routes } from 'constants/pages'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { ICarousel } from '@/../types/ICarousel'
import Carousel from '@/components/Carousel'
import ProjectMetrics from '@/components/ProjectMetrics'
import Container from '@/layouts/containers/Container'
import TwoCols from '@/layouts/grids/TwoCols'

const TEMPSO: ICarousel[] = [
  {
    title: 'Wireframe3',
    src: '/Wireframe3.png',
    alt: 'Wireframe3',
  },
  {
    title: 'Wireframe1',
    src: '/Wireframe1.png',
    alt: 'Wireframe1',
  },
  {
    title: 'Wireframe2',
    src: '/Wireframe2.png',
    alt: 'Wireframe2',
  },
]

const LeftSide: React.FC = () => {
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
      <div className="flex flex-col space-y-16 md:pb-16 md:pr-24">
        <div>
          {/* introduction */}
          <div className="flex flex-col space-y-4">
            <h4>
              <span className="font-bold">Tempso</span> is a live Classical
              Music Streaming Mobile App, fully integrated with Spotify and
              Apple Music.
            </h4>
            <p>
              My task was to design a mobile application where users could
              <span className="font-bold italic"> discover </span> and{' '}
              <span className="font-bold italic"> browse </span>
              the classical music catalogue,{' '}
              <span className="font-bold italic"> compare </span> recordings and
              save liked recordings and playlists to their library.{' '}
            </p>
          </div>
        </div>
        {/* Process */}
        <div className="flex flex-col space-y-2">
          <h4 className="font-bold">Process</h4>
          <p>
            As the sole UX/UI designer and researcher, my goal was to create a
            user-centered design for Tempso by spending extra time with
            researching and iterating designs based on usability testings. Thus,
            the process was divided into the following steps:
          </p>
        </div>
        {/* Research */}
        <div className="flex flex-col space-y-2">
          <h4 className="font-bold">Research</h4>
          <div className="flex flex-col space-y-10">
            <p>
              I spent a full month conducting user research with musicians,
              classical music amateurs and music streaming users through
              interviews to understand user’s experience with classical music
              streaming. I also reviewed secondary research and user comments
              about existing solutions for classical music streaming on forums
              and blogs.
            </p>
            <p>
              My hypothesis was that a majority of users would listen to
              classical music only if they were already very familiar with the
              genre, but I was surprised to find in my research that over half
              of potential users did not have a strong relationship to classical
              music and were curious to discover it. The largest complaint found
              in research was that users, both classical music specialists and
              non-specialists, didn’t know how to find classical music
              recordings or where to start.
            </p>
          </div>
        </div>
        {/* Pain Points */}
        <div className="flex flex-col space-y-2">
          <h4 className="font-bold">Pain Points</h4>
          <div className="flex flex-col space-y-8">
            <div className="flex flex-col space-y-2">
              <p className="font-bold">🎯 Accuracy</p>
              <p>
                Classical music specialists who didn’t stream classical music
                said their reasoning was that they could never get a clear
                picture of what recording they were listening too. “Why is the
                composer tagged as a performer? Why can’t I find the complete
                list of performers for this recording?” were common comments
                addressed to mainstream music streaming platforms. I decided to
                change this by building a complete classical music data
                architecture which would guide the design process.
              </p>
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
                <p className="font-bold">♾️ Exhaustivity</p>
                <p>
                  Classical music specialists felt like they could never browse
                  the complete discography of a performer, nor the complete list
                  of compositions from a composer. They could also never compare
                  easily different recordings of the same composition and select
                  their preferred version.
                </p>
              </div>
              <div className="flex flex-col space-y-2">
                <p className="font-bold">🧭 Discovery</p>
                <p>
                  Non-specialists classical music listeners felt like it was
                  extremely difficult to know where to start their journey on
                  mainstream music streaming apps. They felt like they were left
                  with limited choices with compilations such as “Relax with
                  Mozart” or intimidating classical music albums where they did
                  not understand the track titles. They wanted to discover and
                  explore classical music but “did not know where to start”.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Define */}
        <div className="flex flex-col space-y-2">
          <h4 className="font-bold">Define</h4>
          <div className="flex flex-col space-y-10">
            <p>
              I began the defining stage by creating multiple personas based on
              users interviewed during the research stage.
            </p>
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
            <p>
              My biggest takeaway from research was that users wanted different
              type of experience for a classical music streaming app.
            </p>
            <p>
              Musicians and experimented classical music listeners wanted the
              ability to deep dive into the catalogue, explore performer’s
              discographies, composer’s catalogues, compare recordings, explore
              genres. This category of users wanted to be allowed to explore the
              catalogue through different data points, but did not need
              suggestions and recommendations on what to listen to.
            </p>
            <p>
              First-time listeners wanted to know where to start and what to
              listen to. They are not independent listeners and need help to
              turn on the music.
            </p>
            <p>
              To answer bot of those needs, I decided to list desired actions
              for both personas and build user journey:
            </p>
          </div>
        </div>
        {/* User Journey */}
        <div className="flex flex-col space-y-2">
          <h4 className="font-bold">User Journey</h4>
          <div className="flex flex-col space-y-10">
            <div className="flex flex-col space-y-4">
              <p className="font-bold">User Journey #1: Compare Recordings</p>
              <p>
                In order to answer Cecilia&apos;s needs, I created a first flow
                chart that detailed all the required steps that a user must take
                to compare recordings of the same composition.
              </p>
              <p>
                This flow chart showed that users would have to undertake a lot
                of different steps in order to be able to compare recordings.
                User Research showed, however, that this feature was appreciated
                equally by all Personas. In addition, it seemed like a
                differentiator for Tempso.
              </p>
              <p>
                This is why I decided to have a &quot;Compare&quot; tab, in the
                bottom navigation. This tab is refreshed with the current
                composition that the user is listening to. This helps any user
                compare recordings easily and &quot;hammers&quot; Tempso&apos;s
                value proposition; but also demonstrates the uniqueness of
                classical music.
              </p>
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
              <p className="font-bold">User Journey #2: Explore Recordings</p>
              <p>
                In order to answer Nathalie&apos;s needs, I created a user
                journey that allowed users like her to explore new recordings.
              </p>
              <p>
                This is why I created the concept of automated radios which are
                refreshed every day with new recordings. Those radios select
                recordings through a set of filters like a timeframe (daily
                discovery), a genre, a composer or performer.
              </p>
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
              <p className="font-bold">User Journey #3: Discover Recordings</p>
              <p>
                In order to answer Benjamin&apos;s needs, I created a user
                journey that allowed users like him to discover music.
              </p>
              <p>
                Those users needed more guidance than automated radios. This is
                why I created the concept of manually-curated playlists. Those
                thematic playlist showcase a selection of famous classical music
                recordings that are a good start for a new listener.
              </p>
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
          <h4 className="font-bold">Wireframes</h4>
          <div className="flex flex-col space-y-10">
            <div className="flex flex-col space-y-4">
              <p>
                The User Research, Data Architecture and User Journeys helped me
                start the Wireframes with the user in mind.
              </p>
              <p>
                I created low-fidelity mockups of the Browse page, the compare
                page, and a playlist / radio / album page. While doing this
                work, I layed out the main design concepts that guided the rest
                of the design work:
              </p>
              <p>
                Create two Recording Component: one for all playlists, albums,
                radios; and another one specifically for the Compare page, which
                would focus the user on the performers only. Since the compare
                page would display as a title the composer name, era, and
                composition title, it felt unecessary to repeat this information
                for each recordings.
              </p>
              <p>
                Build consitency with the same layout for all the Album,
                Playlist, Radio, Curated Playlist pages.
              </p>
              <p>
                Build carousel that would suggest to users playlists and radios
                in order to facilitate their discovery and exploration.
              </p>
              <div>
                <Image
                  src="/Wireframe1.png"
                  alt="Wireframe1"
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
        <Link href={pageInformation[Routes.Tempso]!.path} passHref>
          <h4 className="text-primary-100 cursor-pointer pb-16 font-bold underline">
            Discover Tempso UI here!
          </h4>
        </Link>
      </div>
    </>
  )
}

const Tempso: React.FC = () => {
  return (
    <Container>
      {/* carousel */}
      <div className="py-8">
        <Carousel carouselItems={TEMPSO} />
      </div>

      <div className="flex flex-col space-y-8 md:mt-16">
        <TwoCols
          leftSide={<LeftSide />}
          leftDesktopOrder="order-1"
          leftMobileOrder="order-2"
          rightSide={
            <ProjectMetrics
              year="2020"
              role="UX Researcher & Designer"
              technology="Miro Mindmapping, Octopus sitemap, Figma"
              method="User Interviews, Wireframing, Usability Study"
              category="Mobile Application"
            />
          }
          rightDesktopOrder="order-2"
          rightMobileOrder="order-1"
        />
      </div>
    </Container>
  )
}

export default Tempso
