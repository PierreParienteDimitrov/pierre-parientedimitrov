import { pageInformation, Routes } from 'constants/pages'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import styles from '@/styles/home.module.css'
import { aboutMe } from '@/utils/copy/aboutMe'
import { tailwindStyles } from '@/utils/tailwindStyles'

const Statement: React.FC = () => {
  return (
    <div className="relative mb-32 flex items-center md:h-screen">
      <div className="px-4 md:pl-24">
        <div className="flex items-center pb-32">
          <div className="flex-col space-y-8">
            <div className="flex flex-col space-y-2 md:w-1/2">
              <h4 className="font-bold">
                Hi, my name is Pierre Pariente Dimitrov.
              </h4>
              <p className="w-full leading-loose md:w-5/6">{aboutMe}</p>
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
      </div>
      <div className="absolute top-80 mt-16 h-full w-full md:right-[-780px] md:-top-10">
        <Image
          src="/home_illustration.png"
          alt="Home illustration"
          layout="responsive"
          width={1785}
          height={893.6}
          objectFit="cover"
          priority
          className="md:opacity-80"
        />
      </div>
    </div>
  )
}

export default Statement
