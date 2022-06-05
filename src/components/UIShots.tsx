import Image from 'next/image'
import React from 'react'

import { uiShots } from '@/utils/uiShots'

const UIShots: React.FC = () => {
  return (
    <div className="flex w-full flex-wrap">
      {uiShots.map((element, index) => {
        return (
          <div key={index} className="relative w-full md:w-1/2">
            <Image
              src={element.src}
              alt={element.alt}
              layout="responsive"
              width={463}
              height={383}
              objectFit="cover"
              priority
            />
          </div>
        )
      })}
    </div>
  )
}

export default UIShots
