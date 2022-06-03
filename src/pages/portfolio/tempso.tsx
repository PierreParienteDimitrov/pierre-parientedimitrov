import React from 'react'

import { ICarousel } from '@/../types/ICarousel'
import Carousel from '@/components/Carousel'
import Container from '@/layouts/containers/Container'

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

const LeftSide: React.FC = () => {
  return (
    <>
      <div className="flex flex-col space-y-12 md:pr-20">
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
            <p>
              Tempso is a Live Application.{' '}
              <a
                href="https://www.tempso.com/"
                target="_blank"
                className="cursor-pointer text-primary-100"
                rel="noreferrer"
              >
                Download it today!
              </a>
            </p>
          </div>
        </div>
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

      <div className="mb-16 flex flex-col space-y-8 md:mt-16">
        {/* content */}
        <div className="flex flex-col space-y-4 md:flex-row md:items-start md:space-x-10">
          <div className="md:w-4/6 md:pr-16">
            <LeftSide />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Tempso
