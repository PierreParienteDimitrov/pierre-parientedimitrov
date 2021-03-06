import Image from 'next/image'
import React from 'react'

import Container from '@/layouts/containers/Container'
import styles from '@/styles/home.module.css'
import { skills } from '@/utils/copy/skills'

const Skill = () => {
  return (
    <div className="relative overflow-x-hidden bg-white py-24 text-dark">
      <div className={styles.skills}>
        <Container>
          <div className="w-full pb-8 text-center">
            <h4 className="font-bold">My Skills</h4>
          </div>
          <div
            className={`flex flex-col space-y-8 h-full md:flex-row md:space-x-16 md:space-y-0`}
          >
            {/* cards */}
            {skills.map((card, index) => {
              return (
                <div
                  key={index}
                  className={`flex items-stretch flex-col rounded-2xl border text-center shadow-md md:w-1/3 ${styles.cards}`}
                >
                  <div className="w-full py-6">
                    <Image
                      src={card.src}
                      alt="UX Research"
                      layout="responsive"
                      width={372}
                      height={192}
                      priority
                    />
                  </div>
                  <div className="flex flex-col items-center space-y-4 px-2 py-4">
                    <p className="font-black uppercase tracking-wider">
                      {card.title}
                    </p>
                    <ul className="flex flex-col items-center space-y-2 capitalize">
                      {card.bullets.map((bullet, index) => {
                        return <li key={index}>{bullet}</li>
                      })}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Skill
