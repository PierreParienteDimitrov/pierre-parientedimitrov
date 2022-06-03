import React, { useEffect, useState } from 'react'

import { TypewriterItems } from '@/utils/content'

const word = 'web developper'

const Hero = () => {
  const [letterIndex, setLetterIndex] = useState(0)
  const [reverse, setReverse] = useState(false)
  const [key, setKey] = useState('title')
  const [typewriter, setTypewriter] = useState(true)
  //   const [blink, setBlink] = useState(true)

  //   // blink
  //   useEffect(() => {
  //     if (letterIndex < TypewriterItems[wordIndex]?.title.length) {
  //       const timer = setTimeout(() => {
  //         setBlink(!blink)
  //       }, 500)
  //       return () => clearTimeout(timer)
  //     }

  //     if (letterIndex === word.length) {
  //       setBlink(false)
  //     }

  //     return
  //   }, [blink])

  //   typewriter
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
      reverse ? 50 : 200
    )

    return () => clearTimeout(timer1)
  }, [letterIndex, reverse, typewriter])

  return (
    <div className="">
      <h4>
        Hi! My name is{' '}
        <span className="font-bold">Pierre Pariente Dimitrov</span>. <br />I am
        a Los Angeles based:
      </h4>
      <ul className="flex h-96 flex-col md:-space-y-4">
        {TypewriterItems.map((element) => {
          return (
            <li key={element.title}>
              <h2 className="font-serif font-extrabold italic text-primary-500">
                {element[key].substring(0, letterIndex)}
                {/* {blink && '|'} */}
              </h2>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Hero
