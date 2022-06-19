import { pageInformation, Routes } from 'constants/pages'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import Container from '@/layouts/containers/Container'
import styles from '@/styles/animations.module.css'
import { aboutMe } from '@/utils/aboutMe'
import { tailwindStyles } from '@/utils/tailwindStyles'

const Statement: React.FC = () => {
  return (
    <Container>
      <div className="flex w-full items-center py-16 md:h-[94vh]">
        <div className="w-full flex-col items-center justify-center space-y-2 md:w-4/6">
          <div className="relative w-3/6 md:w-1/6">
            <Image
              src="/pierrepariente.jpeg"
              alt="Pierre Pariente Dimitrov"
              layout="responsive"
              width={500}
              height={500}
              priority
              className="z-10 rounded-full shadow-lg"
            />
            <div className="absolute top-0 z-0 h-[230px] w-[230px] rounded-full bg-primary opacity-10"></div>
          </div>
          <div>
            <h1 className={tailwindStyles.textGradient}>
              I build meaningful digital experiences with design-driven
              solutions.
            </h1>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center pb-32">
        <div className="flex-col space-y-8 md:w-4/6">
          <div className="flex flex-col space-y-2">
            <h4 className="font-bold">
              Hi, my name is Pierre Pariente Dimitrov.
            </h4>
            <h4 className="leading-loose">{aboutMe}</h4>
          </div>
          <Link href={`${pageInformation[Routes.Resume]!.path}`} passHref>
            <h5
              className={`${tailwindStyles.textGradient} uppercase cursor-pointer ${styles['hover-underline-animation']}`}
            >
              Learn More
            </h5>
          </Link>
        </div>
      </div>
    </Container>
  )
}

export default Statement
