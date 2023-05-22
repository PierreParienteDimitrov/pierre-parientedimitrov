import { pageInformation, Routes } from 'constants/pages'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

import { ICarousel } from '@/../types/ICarousel'
import Carousel from '@/components/Carousel'
import ProjectMetrics from '@/components/ProjectMetrics'
import Container from '@/layouts/containers/Container'
import ContainerText from '@/layouts/containers/ContainerText'
import { caseStudies } from '@/utils/copy/caseStudiesContent'
import { tailwindStyles } from '@/utils/tailwindStyles'

const BLUECARGO_PAYMENT: ICarousel[] = [
  {
    title: 'homepage1',
    src: '/bc-homepage-slide-1.png',
    alt: 'homepage 1',
  },
  {
    title: 'payhomepage2',
    src: '/bc-homepage-slide-2.png',
    alt: 'homepage 2',
  },
]

const ProjectIntro: React.FC = () => {
  return (
    <div className="flex flex-col space-y-10 dark:text-white">
      {/* introduction */}
      <h1 className={`font-bold ${tailwindStyles.textGradient}`}>
        Homepage for a container tracking software
      </h1>
      <div className="flex flex-col space-y-4 md:w-4/6">
        <h3>
          <span className="font-bold">BlueCargo</span> develops a Supply Chain
          software for the Drayage Industry that allows industry professionals
          to get real-time in-port container data and dispute their per diem and
          demurrage invoices.
        </h3>
        <h5>
          My task was to design a new homepage for the container watchlist.
        </h5>
      </div>
    </div>
  )
}

const Content: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center space-y-8 text-gray-800 dark:text-gray-100 md:pb-16">
        {/* Process */}
        <ContainerText>
          <div className="flex flex-col space-y-2">
            <h2 className="font-bold">Process</h2>
            <h5>
              My goal was to create a user-centered design. In order to narrow
              down the homepage features and sections, I conducted customer
              interviews at the beginning and during the design process.
            </h5>
          </div>
        </ContainerText>
        {/* Business Brief */}
        <ContainerText>
          <div className="flex flex-col space-y-2">
            <h2 className="font-bold">Business Brief</h2>
            <div className="flex flex-col space-y-8">
              <h5>
                The objective of the homepage was to serve as a gate to the rest
                of the features. On the homepage, users cans:
              </h5>
              <div>
                <ul className="flex list-disc flex-col space-y-2 pl-4 pt-4">
                  <li>
                    <h5>Quickly make sense of their data;</h5>
                  </li>
                  <li>
                    <h5>Prioritize tasks based on the data;</h5>
                  </li>
                  <li>
                    <h5>
                      Quickly access the feature they need to accomplish the top
                      priority task.
                    </h5>
                  </li>
                </ul>
              </div>
              <div>
                <h5>
                  The homepage was designed to convey a sense of control to the
                  users. With the new homepage, users should feel that there is
                  no dark corner in their operation and they have visibility on
                  all aspects of their business.
                </h5>
              </div>
            </div>
          </div>
        </ContainerText>
        {/* User Journeys */}
        <div className="flex w-full flex-col space-y-2">
          <ContainerText>
            <div className="flex flex-col space-y-2">
              <h2 className="font-bold">Jobs-to-be-done</h2>
              <div className="flex flex-col space-y-2">
                <h5>
                  The jobs-to-be-done for the homepage were defined as followed
                  after multiple customer interviews:
                </h5>
                <div>
                  <ul className="flex list-disc flex-col space-y-2 pl-4 pt-4">
                    <li>
                      <h5>
                        As a user I want to know how many containers I have in
                        each status (on vessel, at terminal, gated out,
                        terminated)
                      </h5>
                    </li>
                    <li>
                      <h5>
                        As a user I want to know my outstanding D&D fees and the
                        breakdown of those fees by steamship line, terminal,
                        container number, or customer.
                      </h5>
                    </li>
                    <li>
                      <h5>
                        As a user I want to be able to prioritize my workflow by
                        choosing quickly what to do and then doing it:
                      </h5>
                      <ul className="flex flex-col space-y-2 pl-4 pt-4">
                        <li>
                          <h5>- Pay holds</h5>
                        </li>
                        <li>
                          <h5>- Pay per diem and demurrage fees</h5>
                        </li>
                        <li>
                          <h5>- Book pickup or empty return appointments</h5>
                        </li>
                        <li>
                          <h5>- Review D&D fees for financial reporting</h5>
                        </li>
                        <li>
                          <h5>
                            - Review vessel and gate schedules to plan the
                            operations
                          </h5>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </ContainerText>
        </div>
        {/* Components */}
        <div className="flex w-full flex-col space-y-2">
          <ContainerText>
            <h2 className="pb-4 text-center font-bold">
              Component Library - Samples
            </h2>
          </ContainerText>
          <ContainerText>
            <div className="mb-16 shadow-md">
              <Image
                src="/status-cards.png"
                alt="status card"
                layout="responsive"
                width={1945}
                height={559}
                objectFit="cover"
                priority
              />
            </div>
          </ContainerText>
          <ContainerText>
            <div className="mb-16 shadow-md">
              <Image
                src="/dd-cards.png"
                alt="dd cards"
                layout="responsive"
                width={1945}
                height={559}
                objectFit="cover"
                priority
              />
            </div>
          </ContainerText>
        </div>
        {/* Mockups */}
        <div className="flex w-full flex-col space-y-8">
          <ContainerText>
            <h2 className="pb-4 text-center font-bold">
              High-fidelity Mockups
            </h2>
          </ContainerText>
        </div>
        <div className="flex w-full flex-col space-y-32">
          <ContainerText>
            <div className="shadow-md">
              <Image
                src="/homepage.png"
                alt="homepage"
                layout="responsive"
                width={1440}
                height={816}
                objectFit="cover"
                priority
              />
            </div>
          </ContainerText>
        </div>
      </div>
    </>
  )
}

const ContainerHomepage: React.FC = () => {
  const project = caseStudies.filter((item) => item.key === 'bluecargo_home')
  const projectMetrics = project[0]?.metrics

  return (
    <>
      <Head>
        <title>{pageInformation[Routes.CheckoutFlow]!.title}</title>
        <meta
          property="og:url"
          content="https://www.pierreparientedimitrov.com/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="website-preview" />
        <meta
          property="og:description"
          content="Pierre Pariente Dimitrov Portfolio = UX/UI designer & Software Engineer"
        />
        <meta property="og:image" content="/website-preview.png" />
      </Head>
      <Container>
        <div className="flex flex-col space-y-12 border-b border-secondary py-12">
          <ProjectIntro />
          <ProjectMetrics projectMetrics={projectMetrics} />
        </div>
        {/* carousel */}
        <div className="py-8">
          <Carousel carouselItems={BLUECARGO_PAYMENT} />
        </div>

        <div className="flex flex-col space-y-8 md:mt-16">
          <Content />
        </div>
      </Container>
    </>
  )
}

export default ContainerHomepage
// export { getServerSideProps }
