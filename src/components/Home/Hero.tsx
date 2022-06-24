import Image from 'next/image'
import React from 'react'

import styles from '@/styles/hero.module.css'
import { tailwindStyles } from '@/utils/tailwindStyles'

const Hero = () => {
  return (
    <div className="relative z-0 h-screen w-screen overflow-hidden md:pb-32">
      <div className={styles.container}>
        <div className="h-full w-full px-4 md:pl-24">
          <div className="flex items-center py-16 md:h-[94vh]">
            <div className="z-10 w-full flex-col items-center justify-center space-y-2 md:w-4/6">
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
        </div>
      </div>
    </div>
  )
}

export default Hero
