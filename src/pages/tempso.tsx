import React, { useState } from 'react'

import Container from '@/layouts/containers/Container'

interface ICarousel {
  index: number
  title: string
  url: string
  alt: string
}

const TEMPSO: ICarousel[] = [
  { index: 1, title: 'tempso1', url: 'url1', alt: 'alt1' },
  { index: 2, title: 'tempso2', url: 'url2', alt: 'alt2' },
  { index: 3, title: 'tempso3', url: 'url3', alt: 'alt3' },
]

const Tempso: React.FC = () => {
  const [carousel, setCarousel] = useState(TEMPSO[0])

  const handleCarouselClick = (e: React.MouseEvent<HTMLLIElement>) => {
    e.preventDefault()
    const currentIndex = e.currentTarget.value
    setCarousel(TEMPSO[currentIndex - 1])
  }

  React.useEffect(() => {
    const timer = setTimeout(() => {
      const currentIndex = carousel?.index
      if (currentIndex ? currentIndex < 3 : false) {
        setCarousel(TEMPSO[currentIndex ? currentIndex : 0])
      } else {
        setCarousel(TEMPSO[0])
      }
    }, 3000)
    return () => clearTimeout(timer)
  }, [carousel])

  return (
    <Container>
      {/* carousel */}
      <div className="h-screen w-full">
        <div className="relative flex h-5/6 items-center justify-center bg-gray-600">
          <h2>{carousel?.title}</h2>
          <div className="absolute bottom-4">
            <ul className="flex space-x-3">
              <li onClick={(e) => handleCarouselClick(e)} value={1}>
                1
              </li>
              <li onClick={(e) => handleCarouselClick(e)} value={2}>
                2
              </li>
              <li onClick={(e) => handleCarouselClick(e)} value={3}>
                3
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col space-y-1 text-center">
        <h2>TEMPSO</h2>
        <h6>DESIGNED BY PIERRE PARIENTE DIMITROV</h6>
      </div>
    </Container>
  )
}

export default Tempso
