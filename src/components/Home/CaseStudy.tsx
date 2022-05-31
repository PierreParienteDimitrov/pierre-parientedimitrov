import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { pageInformation, Routes } from '@/constants/pages'

const CaseStudy: React.FC = () => {
  console.log(pageInformation[Routes.Tempso]?.path)
  return (
    <div className="flex flex-col  md:mb-32">
      {/* first row */}
      <div className="flex flex-col md:flex-row">
        {/* tempso */}
        <div className="relative w-full md:w-1/2">
          <Link href={pageInformation[Routes.Tempso]!.path} passHref>
            <div>
              <Image
                src="/case-study-tempso.png"
                alt="Pierre Pariente Dimitrov"
                layout="responsive"
                width={640}
                height={383}
                objectFit="cover"
                priority
              />
              <div className="absolute inset-0 flex cursor-pointer items-center justify-center opacity-0 duration-300 hover:bg-black hover:opacity-90">
                <div className="flex flex-col items-center justify-center space-y-4 text-white">
                  <h3>Tempso</h3>
                  <h5>UX/UI Design - Mobile Application</h5>
                </div>
              </div>
            </div>
          </Link>
        </div>
        {/* bluecargo */}
        <div className="relative w-full md:w-1/2">
          <Link href={pageInformation[Routes.BlueCargo]!.path} passHref>
            <div>
              <Image
                src="/case-study-BlueCargo.png"
                alt="Pierre Pariente Dimitrov"
                layout="responsive"
                width={640}
                height={383}
                objectFit="cover"
                priority
              />
              <div className="absolute inset-0 flex cursor-pointer items-center justify-center opacity-0 duration-300 hover:bg-dark hover:opacity-90">
                <div className="flex flex-col items-center justify-center space-y-4 text-white">
                  <h3>BlueCargo</h3>
                  <h5>UX/UI Design - Web App</h5>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      {/* second row */}
      <div className="flex flex-col md:flex-row">
        {/* luxury travel */}
        <div className="relative w-full md:w-1/2">
          <Link href={pageInformation[Routes.LuxuryTravel]!.path} passHref>
            <div>
              <Image
                src="/case-study-luxury-travel.png"
                alt="Pierre Pariente Dimitrov"
                layout="responsive"
                width={640}
                height={383}
                objectFit="cover"
                priority
              />
              <div className="absolute inset-0 flex cursor-pointer items-center justify-center opacity-0 duration-300 hover:bg-dark hover:opacity-90">
                <div className="flex flex-col items-center justify-center space-y-4 text-white">
                  <h3>Luxury Travel Agency</h3>
                  <h5>UX/UI Design - Website</h5>
                </div>
              </div>
            </div>
          </Link>
        </div>
        {/* UI shots */}
        <div className="relative w-full md:w-1/2">
          <Link href={pageInformation[Routes.UIShots]!.path} passHref>
            <div>
              <Image
                src="/case-study-ui-shots.png"
                alt="Pierre Pariente Dimitrov"
                layout="responsive"
                width={640}
                height={383}
                objectFit="cover"
                priority
              />
              <div className="absolute inset-0 flex cursor-pointer items-center justify-center opacity-0 duration-300 hover:bg-dark hover:opacity-90">
                <div className="flex flex-col items-center justify-center space-y-4 text-white">
                  <h3>UI Shots</h3>
                  <h5>UX/UI Design - Practice</h5>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CaseStudy
