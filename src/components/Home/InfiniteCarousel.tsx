import React from 'react'

import { skillLogos } from '@/utils/copy/skillLogos'

import styles from '../../styles/infiniteCarousel.module.css'

const InfiniteCarousel: React.FC = () => {
  return (
    <div className="mt-32 flex items-center justify-center">
      <div className={styles.slider}>
        <div className={styles['slide-track']}>
          {skillLogos.map((skill, index) => {
            return (
              <div key={index} className={styles.slide}>
                <img src={skill.src} height="50" width="50" alt={skill.alt} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default InfiniteCarousel
