import Image from 'next/image'
import React from 'react'

import Container from '@/layouts/containers/Container'

const Hero2 = () => {
  return (
    <Container>
      <div className="flex w-full flex-col items-center justify-center space-y-2 md:flex-row md:py-32">
        <div className="flex flex-col space-y-10 md:w-4/6 md:pr-24">
          <h2 className="font-bold">
            Hi, I&apos;m Pierre - a product designer and software engineer, with
            affinities for purpose-driven products.
          </h2>
          <div className="flex flex-col space-y-4">
            <h3>
              Currently designing BlueCargo&apos;s Supply Chain software 🚢
            </h3>
            <h5 className="font-thin text-gray-700">
              Previously I freelanced for a variety of clients, and designed
              Tempso, a classical music streaming App for iOS and Android.
            </h5>
          </div>
        </div>
        <div className="relative md:w-2/6 md:px-16">
          <Image
            src="/pierrepariente.jpeg"
            alt="Pierre Pariente Dimitrov"
            layout="responsive"
            width={500}
            height={500}
            priority
            className="z-10 rounded-full shadow-lg"
          />
          <div className="absolute top-2 h-[300px] w-[300px] rounded-full bg-primary opacity-10"></div>
        </div>
      </div>
    </Container>
  )
}

export default Hero2
