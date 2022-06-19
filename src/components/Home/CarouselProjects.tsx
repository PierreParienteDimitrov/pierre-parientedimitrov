import React, { useRef } from 'react'
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa'

import Container from '@/layouts/containers/Container'
import { tailwindStyles } from '@/utils/tailwindStyles'

import { caseStudies } from '../../utils/caseStudiesContent'
import Preview from './Preview'

const CarouselProjects = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  const handleClick = (direction: string) => {
    let scrollCompleted = 0

    console.log(window.innerWidth)

    const slideConst = setInterval(function () {
      if (direction === 'left') {
        sectionRef.current!.scrollLeft -= window.innerWidth / caseStudies.length
      } else {
        sectionRef.current!.scrollLeft += window.innerWidth / caseStudies.length
      }

      scrollCompleted += 10

      if (scrollCompleted >= caseStudies.length * 10) {
        window.clearInterval(slideConst)
      }
    }, 50)
  }
  return (
    <div className="bg-gray-200 py-16">
      <Container>
        <div className="flex items-center space-x-8 pb-4">
          <h2 className={`font bold ${tailwindStyles.textGradient}`}>
            My Projects
          </h2>
          <div className="relative top-[4px] flex space-x-4">
            <div onClick={() => handleClick('left')}>
              <FaChevronCircleLeft className="cursor-pointer text-2xl text-tertiary" />
            </div>
            <div onClick={() => handleClick('right')}>
              <FaChevronCircleRight className="cursor-pointer text-2xl text-tertiary" />
            </div>
          </div>
        </div>
        <hr className="h-1 bg-gray-400" />
      </Container>
      <section className="overflow-scroll" ref={sectionRef}>
        <div className="flex items-center whitespace-nowrap">
          {caseStudies.map((item, index) => {
            return (
              <div key={index} className="">
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
