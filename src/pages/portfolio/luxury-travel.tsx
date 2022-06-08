import React from 'react'
import Image from 'next/image'

import { getServerSideProps } from '@/utils/protectedRoutes'
import Container from '@/layouts/containers/Container'
import TwoCols from '@/layouts/grids/TwoCols'
import { ICarousel } from 'types/ICarousel'
import Carousel from '@/components/Carousel'
import ProjectMetrics from '@/components/ProjectMetrics'

const LUXURY: ICarousel[] = [
  {
    title: 'Luxury1',
    src: '/luxury-1.png',
    alt: 'Luxury1',
  },
  {
    title: 'Luxury2',
    src: '/luxury-2.png',
    alt: 'Luxury2',
  },
  {
    title: 'Luxury3',
    src: '/luxury-3.png',
    alt: 'Luxury3',
  },
]

const LeftSide: React.FC = () => {
  return (
    <>
      <div className="flex flex-col space-y-16 md:pb-16 md:pr-24">
        <div>
          {/* introduction */}
          <div className="flex flex-col space-y-4">
            <h4>
              <span className="font-bold">Sienna Charles</span> curates and
              designs luxury travel & lifestyle experiences for family offices &
              CEO’s.
            </h4>
            <p>
              I was hired to create new marketing assets that would showcase the
              agency new positioning: an exclusive club for an elite clientele,
              with a subscription-based business model.
            </p>
            <p>
              I created the mockups for a new landing page, updated the brand
              identity fonts and built user flows for marketing email
              automation.
            </p>
          </div>
        </div>
        {/* Brand */}
        <div className="flex flex-col space-y-2">
          <h4 className="font-bold">Brand Evolution</h4>
          <p>
            I worked alongside the founder and the marketing director to define
            new fonts for the brand. I proposed a two-font system. A Serif font
            to evoke luxury; and a sans serif font for utilities (buttons,
            forms, links, etc.).
          </p>
          <div className="py-8">
            <a
              href="/_next/image?url=%2Fdata-architecture.png&w=3840&q=75"
              target="_blank"
              className="h-full w-full cursor-pointer"
            >
              <Image
                src="/luxury-2.png"
                alt="Brand Evolution"
                layout="responsive"
                width={1920}
                height={768}
                objectFit="cover"
                priority
              />
            </a>
          </div>
        </div>
        {/* Landing Page */}
        <div className="flex flex-col space-y-2">
          <h4 className="font-bold">Landing Page</h4>
          <div className="flex flex-col space-y-4">
            <p>
              I used large, beautiful pictures of luxury travel destination as
              background to reenforce the brand universe and create some desire
              for the user. I also divided the company value proposition into
              four buckets that represented most of the company’s travel
              experiences:
            </p>
            <div className="w-full h-full flex flex-wrap">
              <div className="w-1/2 border-4 border-white">
                <Image
                  src="/yatch.png"
                  alt="Yatch"
                  layout="responsive"
                  width={374}
                  height={374}
                  objectFit="cover"
                  priority
                />
              </div>
              <div className="w-1/2 border-4 border-white">
                <Image
                  src="/wellness.png"
                  alt="Wellness"
                  layout="responsive"
                  width={374}
                  height={374}
                  objectFit="cover"
                  priority
                />
              </div>
              <div className="w-1/2 border-4 border-white">
                <Image
                  src="/city.png"
                  alt="City"
                  layout="responsive"
                  width={374}
                  height={374}
                  objectFit="cover"
                  priority
                />
              </div>
              <div className="w-1/2 border-4 border-white">
                <Image
                  src="/food-wine.png"
                  alt="Food & Wine"
                  layout="responsive"
                  width={374}
                  height={374}
                  objectFit="cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        {/* Marketing */}
        <div className="flex flex-col space-y-2">
          <h4 className="font-bold">Marketing User Journey</h4>
          <div className="flex flex-col space-y-4">
            <p>
              The company wanted to be more proactive with outreach and use the
              new website as an acquisition funnel. The company also wanted to
              screen every new application with a phone interview. The purpose
              of the email marketing campaign was to push new applicants to book
              a phone interview with the company owner. I also created email
              mockups to push new travel destination and experiences to existing
              members.
            </p>
          </div>
        </div>
        {/* Conclusion */}
        <div className="flex flex-col space-y-2">
          <h4 className="font-bold">Conclusion</h4>
          <div className="flex flex-col space-y-4">
            <p>
              My work with Sienna Charles helped the company rebuild its
              marketing and brand assets, including the website.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

const Luxurytravel = () => {
  return (
    <Container>
      {/* carousel */}
      <div className="py-8">
        <Carousel carouselItems={LUXURY} />
      </div>

      <div className="flex flex-col space-y-8 md:mt-16">
        <TwoCols
          leftSide={<LeftSide />}
          leftDesktopOrder="order-1"
          leftMobileOrder="order-2"
          rightSide={
            <ProjectMetrics
              year="2020"
              role="UX/UI Design, Marketing & Brand"
              technology="Figma"
              method="Founder Interview, Benchmark, Wireframing, High-fidelity prototypes"
              category="Website"
            />
          }
          rightDesktopOrder="order-2"
          rightMobileOrder="order-1"
        />
      </div>
    </Container>
  )
}

export default Luxurytravel
export { getServerSideProps }
