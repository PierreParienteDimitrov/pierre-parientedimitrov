import React from 'react'
import { TbPoint } from 'react-icons/tb'

import { myApproach } from '@/utils/myApproach'

const MyApproach = () => {
  return (
    <div className="py-32">
      <section className="flex flex-col space-y-8 px-8 md:flex-row md:flex-nowrap md:space-x-8 md:space-y-0 md:overflow-auto md:px-0">
        <div className="md:pl-24">
          <div className="w-full flex-auto flex-col space-y-8 bg-white py-8 md:min-w-[480px]">
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
              className="flex-col space-y-4 rounded-xl border bg-gray-50 px-8 py-6 shadow-lg md:min-w-[480px]"
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
      </section>
    </div>
  )
}

export default MyApproach
