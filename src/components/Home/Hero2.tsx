import Image from 'next/image'
import React from 'react'

import Container from '@/layouts/containers/Container'

const Hero2 = () => {
  return (
    <Container>
      <div className="flex w-full flex-col items-start justify-start space-y-2 overflow-hidden pb-16 md:order-1 md:flex-row md:py-32">
        <div className="order-2 flex flex-col space-y-10 md:w-4/6 md:pr-44">
          <h2 className="font-medium">
            Hi, I&apos;m Pierre - a{' '}
            <span className="text-primary">product designer</span> and
            <span className="text-secondary"> software engineer</span>, with
            affinities for purpose-driven products.
          </h2>
          <div className="flex flex-col space-y-4">
            <h3>
              Currently designing BlueCargo&apos;s Supply Chain software 🚢 and
              building Charter Communications Design System.
            </h3>
            <h5 className="font-normal text-gray-600">
              Previously I freelanced for a variety of clients, and designed
              <span>
                {' '}
                <a
                  href="https://www.tempso.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer text-primary underline underline-offset-4"
                >
                  Tempso
                </a>
              </span>
              , a classical music streaming App for iOS and Android.
            </h5>
          </div>
        </div>
        <div className="relative order-1 w-full px-16 pb-4 md:order-2 md:w-2/6 md:pr-32 md:pl-0">
          <Image
            src="/pierrepariente.jpeg"
            alt="Pierre Pariente Dimitrov"
            layout="responsive"
            width={500}
            height={500}
            priority
            className="z-10 rounded-full shadow-lg"
          />
          <div className="absolute bottom-16 left-0 h-[260px] w-[260px] rounded-full bg-primary opacity-10 md:bottom-10 md:left-4 md:h-[300px] md:w-[300px]"></div>
        </div>
      </div>
    </Container>
  )
}

export default Hero2
