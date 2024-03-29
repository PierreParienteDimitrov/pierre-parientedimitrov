import React, { useEffect, useState } from 'react'

import { TypewriterItems } from '@/utils/copy/typewriterItems'

const word = 'ship great products!'

const textGradient =
  'bg-gradient-to-r from-primary via-secondary-400 to-tertiary-600 bg-clip-text font-extrabold text-transparent'

const Hero = () => {
  const [letterIndex, setLetterIndex] = useState(0)
  const [reverse, setReverse] = useState(false)
  const [key, setKey] = useState('title')
  const [typewriter, setTypewriter] = useState(true)

  useEffect(() => {
    if (!typewriter) {
      return
    }

    if (letterIndex === word.length) {
      setReverse(true)
    }

    if (letterIndex === 0 && reverse) {
      setKey('skill')
      setReverse(false)
    }

    if (letterIndex === word.length && key === 'skill') {
      setTypewriter(false)
    }

    const timer1 = setTimeout(
      () => {
        setLetterIndex((prev) => (reverse ? prev - 1 : prev + 1))
      },
      reverse ? 50 : 100
    )

    return () => clearTimeout(timer1)
  }, [letterIndex, reverse, typewriter])

  return (
    <div className="flex flex-col space-y-4 text-white">
      <h2 className="font-bold">Let&apos;s</h2>
      <ul className="flex flex-col">
        {TypewriterItems.map((element, index) => {
          return (
            <li key={index}>
              <h1
                className={`font-serif font-extrabold italic ${
                  index === TypewriterItems.length - 1 &&
                  //@ts-ignore
                  element[key] === 'ship great products!'
                    ? textGradient
                    : 'text-white'
                }`}
              >
                {/* @ts-ignore */}
                {element[key].substring(0, letterIndex)}
                {/* {blink && '|'} */}
              </h1>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Hero
