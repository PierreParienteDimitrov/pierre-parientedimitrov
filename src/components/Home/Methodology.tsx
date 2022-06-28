import React from 'react'

import { uxMenuItems } from '@/utils/uxMenuItems'

const Methodology = () => {
  return (
    <div>
      {uxMenuItems.map((item) => {
        return (
          <div key={item.filter}>
            <img src={item.src} alt={item.alt} />
          </div>
        )
      })}
    </div>
  )
}

export default Methodology
