import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { caseStudies } from './caseStudiesContent'

const CaseStudy: React.FC = () => {
  return (
    <div className="flex w-full flex-wrap">
      {caseStudies.map((element) => {
        return (
          <div
            key={element.project}
            className="relative w-full border-4 md:w-1/2"
          >
            <Link href={element.href} passHref>
              <div>
                <Image
                  src={element.src}
                  alt={element.alt}
                  layout="responsive"
                  width={640}
                  height={383}
                  objectFit="cover"
                  priority
                />
                <div className="absolute inset-0 flex cursor-pointer items-center justify-center opacity-0 duration-300 hover:bg-black hover:opacity-90">
                  <div className="flex flex-col items-center justify-center space-y-4 text-white">
                    <h3>{element.project}</h3>
                    <h5>{element.description}</h5>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default CaseStudy
