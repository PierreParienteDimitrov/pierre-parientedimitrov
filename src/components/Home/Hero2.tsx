import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import Container from '@/layouts/containers/Container'

import styles from '../../styles/blink.module.css'
import shineEffect from '../../styles/shineEffect.module.css'

const Hero2 = () => {
  return (
    <Container>
      <div className="flex w-full flex-col items-center justify-start space-y-2 overflow-hidden pb-24 dark:text-gray-100 md:order-1 md:flex-row md:pt-32 md:pb-48">
        <div className="order-2 flex flex-col space-y-10 md:w-4/6 md:pr-44">
          <h1 className="font-medium text-gray-400">
            Hi, I&apos;m Pierre - a{' '}
            <span className={`${shineEffect.textBlue} italic text-white`}>
              product designer
            </span>{' '}
            and
            <span className={`${shineEffect.textRed} italic text-white`}>
              {' '}
              software engineer
            </span>
            , with affinities for purpose-driven products.
          </h1>
        </div>
        <Link href="/resume" passHref>
          <div className="relative order-1 w-full px-16 pb-4 hover:cursor-pointer md:order-2 md:w-2/6 md:pr-32 md:pl-0">
            <Image
              src="/pierrepariente.jpeg"
              alt="Pierre Pariente Dimitrov"
              layout="responsive"
              width={500}
              height={500}
              priority
              className="z-10 rounded-full shadow-lg"
            />
            <div
              className={`${styles.blink} absolute bottom-16 left-0 h-[260px] w-[260px] rounded-full bg-primary-100 dark:bg-white md:bottom-10 md:left-4 md:h-[300px] md:w-[300px] lg:h-[450px] lg:w-[450px]`}
            ></div>
          </div>
        </Link>
      </div>
    </Container>
  )
}

export default Hero2
