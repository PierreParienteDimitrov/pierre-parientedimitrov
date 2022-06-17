import React, { useRef } from 'react'
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa'

import Container from '@/layouts/containers/Container'

import { caseStudies } from '../../utils/caseStudiesContent'
import Preview from './Preview'

const CarouselProjects = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  const handleClick = (direction: string) => {
    let scrollCompleted = 0

    const slideConst = setInterval(function () {
      if (direction === 'left') {
        sectionRef.current!.scrollLeft -= 128
      } else {
        sectionRef.current!.scrollLeft += 128
      }

      scrollCompleted += 10

      if (scrollCompleted >= 100) {
        window.clearInterval(slideConst)
      }
    }, 50)
  }
  return (
    <div className="pt-32">
      <Container>
        <div className="flex items-center space-x-8 pb-4">
          <h2 className="font-bold">My Projects</h2>
          <div className="relative top-[4px] flex space-x-4">
            <div onClick={() => handleClick('left')}>
              <FaChevronCircleLeft className="text-xl text-secondary" />
            </div>
            <div onClick={() => handleClick('right')}>
              <FaChevronCircleRight className="text-xl text-secondary" />
            </div>
          </div>
        </div>
        <hr className="" />
      </Container>
      <section className="w-full overflow-scroll" ref={sectionRef}>
        <div className="flex h-full w-[1440px] items-center whitespace-nowrap">
          {caseStudies.map((item, index) => {
            return (
              <div key={index} className="min-w-[1280px]">
                <Preview {...item} />
              </div>
            )
          })}
        </div>
      </section>
      <br />
    </div>
  )
}

export default CarouselProjects
