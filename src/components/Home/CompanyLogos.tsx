import Image from 'next/image'
import React from 'react'

import Container from '@/layouts/containers/Container'
import { companyLogos } from '@/utils/companyLogos'

const CompanyLogos = () => {
  return (
    <Container>
      <div className="flex w-full flex-wrap items-center space-x-4">
        {companyLogos.map((logo, index) => {
          return (
            <div key={index} className="h-full w-[160px]">
              <Image
                src={logo.src}
                alt={logo.alt}
                layout="responsive"
                width={260}
                height={96}
                objectFit="cover"
                priority
              />
            </div>
          )
        })}
        <div>{/* <Image /> */}</div>
      </div>
    </Container>
  )
}

export default CompanyLogos
