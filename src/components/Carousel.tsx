import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import { ICarousel } from '@/../types/ICarousel'

const Carousel: React.FC<{ carouselItems: ICarousel[] }> = (props) => {
  const { carouselItems } = props

  const [carouselIndex, setCarouselIndex] = useState(0)

  const handleCarouselClick = (e: React.MouseEvent<HTMLLIElement>) => {
    e.preventDefault()
    const currentIndex = e.currentTarget.value
    setCarouselIndex(currentIndex)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (carouselIndex < carouselItems.length - 1) {
        setCarouselIndex(carouselIndex + 1)
      } else {
        setCarouselIndex(0)
      }
    }, 4000)

    return () => clearTimeout(timer)
  }, [carouselIndex])
  return (
    <div className="h-[500px] w-full">
      <div className="relative flex h-4/6 w-full items-center md:h-full">
        {carouselItems.map((item, index: number) => {
          return (
            <div
              key={item.title}
              className={`absolute flex h-full w-full items-center justify-center ${
                carouselIndex === index
                  ? 'transition duration-1000 ease-in opacity-100'
                  : 'transition duration-1000 ease-out opacity-0'
              }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                layout="fill"
                objectFit="cover"
                priority
              />
              {/* <h2 className="absolute bottom-4">{item?.title}</h2> */}
            </div>
          )
        })}

        <div className="absolute -bottom-8 flex w-full justify-center">
          <ul className="flex space-x-3">
            {carouselItems.map((item, index: number) => {
              return (
                <li
                  key={item.title}
                  onClick={(e) => handleCarouselClick(e)}
                  value={index}
                  className={`h-2 w-2 cursor-pointer rounded-full ${
                    index === carouselIndex ? 'bg-red-600' : 'bg-gray-300'
                  }`}
                ></li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Carousel
