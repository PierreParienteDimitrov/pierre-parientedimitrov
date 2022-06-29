import Image from 'next/image'
import React from 'react'
import { TbPoint } from 'react-icons/tb'

import { myApproach } from '@/utils/copy/myApproach'

const MyApproach = () => {
  return (
    <div className="py-16">
      <section className="flex flex-col space-y-8 px-8 md:flex-row md:flex-nowrap md:items-center md:space-x-8 md:space-y-0 md:overflow-x-scroll md:px-0">
        <div className="md:pl-24">
          <div className="w-full flex-col space-y-8 bg-white py-8 md:min-h-[288px] md:min-w-[480px]">
            <h4 className="font-black text-secondary">My Approach</h4>
            <p className="leading-8">
              I make it my primary purpose to work as a team and foster trust. I
              do this through open communication and being willing to
              demonstrate those values*.
            </p>

            <h6 className="italic">
              *Adapted from The Five Behaviors Of A Cohesive Team Framework
            </h6>
          </div>
        </div>

        {myApproach.map((item, index) => {
          return (
            <div
              className="flex-col space-y-4 rounded-xl border bg-gray-50 px-8 py-6 shadow-lg md:min-h-[288px] md:min-w-[480px]"
              key={index}
            >
              <h4 className="font-black capitalize text-primary">
                {item.title}
              </h4>
              <ul className="flex flex-col space-y-2">
                {item.bullets.map((bullet, index) => {
                  return (
                    <li key={index} className="flex items-baseline space-x-2">
                      <TbPoint className="relative top-0.5 text-primary" />
                      <div>{bullet}</div>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
        <div className="w-full flex-col space-y-8 bg-white py-8 pr-24 md:min-w-[480px]">
          <Image
            src="/team-cohesion.png"
            alt="Team cohesion"
            layout="responsive"
            width={732}
            height={609}
            objectFit="cover"
            priority
          />
        </div>
      </section>
    </div>
  )
}

export default MyApproach
