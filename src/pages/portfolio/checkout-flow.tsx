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
import { getServerSideProps } from '@/utils/protectedRoutes'
import { tailwindStyles } from '@/utils/tailwindStyles'

const BLUECARGO_PAYMENT: ICarousel[] = [
  {
    title: 'payment1',
    src: '/bc-payment-Slide1.png',
    alt: 'payment 1',
  },
  {
    title: 'payment2',
    src: '/bc-payment-Slide2.png',
    alt: 'payment 2',
  },
  {
    title: 'payment3',
    src: '/bc-payment-Slide3.png',
    alt: 'payment 3',
  },
  {
    title: 'payment4',
    src: '/bc-payment-Slide4.png',
    alt: 'payment 4',
  },
]

const ProjectIntro: React.FC = () => {
  return (
    <div className="flex flex-col space-y-10">
      {/* introduction */}
      <h1 className={`font-bold ${tailwindStyles.textGradient}`}>
        Checkout flow for a SAAS company
      </h1>
      <div className="flex flex-col space-y-4 md:w-4/6">
        <h3>
          <span className="font-bold">BlueCargo</span> develops a Supply Chain
          software for the Drayage Industry that allows industry professionals
          to get real-time container data at the ports of Los Angeles and Long
          Beach.
        </h3>
        <h5>
          My task was to redesign the checkout flow to reflect the company new
          <span className="font-bold italic">
            {' '}
            container volume-based{' '}
          </span>{' '}
          business model pricing.
        </h5>
        <h6 className="italic">
          *Price and plan names have been modified for confidentiality.
        </h6>
      </div>
    </div>
  )
}

const Content: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center space-y-8 text-gray-800 md:pb-16">
        {/* Process */}
        <ContainerText>
          <div className="flex flex-col space-y-2">
            <h2 className="font-bold">Process</h2>
            <h5>
              My goal was to create a user-centered design that followed the
              requirements and timeline of the business team. For this project,
              the User Research had been conducted by the company founders and
              their advisors. Thus, the process was divided into the following
              steps:
            </h5>
          </div>
        </ContainerText>
        {/* Business Brief */}
        <ContainerText>
          <div className="flex flex-col space-y-2">
            <h2 className="font-bold">Business Brief</h2>
            <div className="flex flex-col space-y-8">
              <h5>
                The company was transitioning from selling packs - a set of
                features - to selling packs and volume of container tracked
                every year.
              </h5>
              <div>
                <h5>
                  The previous business model was divided into three packs:
                </h5>
                <ul className="flex list-disc flex-col space-y-2 pl-4 pt-4">
                  <li>
                    <h5>Starter</h5>
                  </li>
                  <li>
                    <h5>Team</h5>
                  </li>
                  <li>
                    <h5>Enterprise</h5>
                  </li>
                </ul>
              </div>
              <div>
                <h5>
                  Each pack came with an additional set of feature and
                  additional level of customer support. With the introduction of
                  this new business model, the objective was to:
                </h5>
                <ul className="flex list-disc flex-col space-y-2 pl-4 pt-4">
                  <li>
                    <h5>
                      Divide each pack into sub-packs with different container
                      volume and different pricing
                    </h5>
                  </li>
                  <li>
                    <h5>
                      Implement yearly subscription, meaning that customers
                      could not downgrade by themselves, but only with customer
                      support
                    </h5>
                  </li>
                  <li>
                    <h5>
                      Display upsell pack for starter and team subscriptions
                    </h5>
                  </li>
                </ul>
              </div>
              <h5>
                The business team wanted to introduce the changes less than a
                month after sharing the brief with the product team.
              </h5>
            </div>
          </div>
        </ContainerText>
        {/* User Journeys */}
        <div className="flex w-full flex-col space-y-2">
          <ContainerText>
            <div className="flex flex-col space-y-2">
              <h2 className="font-bold">User Journeys</h2>
              <div className="flex flex-col space-y-2">
                <h5>
                  In order to kickstart the work, I created flow charts
                  representing an overview of the user journey:
                </h5>
                <div>
                  <ul className="flex list-disc flex-col space-y-2 pl-4 pt-4">
                    <li>
                      <h5>User chooses a pack</h5>
                    </li>
                    <li>
                      <h5>User chooses a yearly volume of container tracked</h5>
                    </li>
                    <li>
                      <h5>User chooses a payment method and pays</h5>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </ContainerText>
          <ContainerText>
            <div className="pb-8">
              <a
                href="/_next/image?url=%2Fpayment-flowchart-steps.png&w=3840&q=75"
                target="_blank"
                className="h-full w-full cursor-pointer"
              >
                <Image
                  src="/payment-flowchart-steps.png"
                  alt="Flowchart steps"
                  layout="responsive"
                  width={1401}
                  height={473}
                  objectFit="cover"
                  priority
                />
              </a>
            </div>
          </ContainerText>
          <ContainerText>
            <div className="flex flex-col space-y-8">
              <h5>
                I created additional flow charts to capture all possible
                variations of this user journey based on the primary
                user-intent:
              </h5>
              <div>
                <ul className="flex list-disc flex-col space-y-2 pl-4 pt-4">
                  <li>
                    <h5>
                      Take a subscription (for the first time) after free trial
                    </h5>
                  </li>
                  <li>
                    <h5>Upgrade or downgrade plan</h5>
                  </li>
                  <li>
                    <h5>Upgrade or downgrade container volume</h5>
                  </li>
                </ul>
              </div>
            </div>
          </ContainerText>
          <ContainerText>
            <div className="pb-8">
              <a
                href="/_next/image?url=%2Fpayment-flowchart-free-trial.png&w=3840&q=75"
                target="_blank"
                className="h-full w-full cursor-pointer"
              >
                <Image
                  src="/payment-flowchart-free-trial.png"
                  alt="Flowchart steps"
                  layout="responsive"
                  width={1086}
                  height={1443}
                  objectFit="cover"
                  priority
                />
              </a>
            </div>
          </ContainerText>

          <ContainerText>
            <div className="pb-8">
              <a
                href="/_next/image?url=%2Fpayment-flowchart-team-plan.png&w=3840&q=75"
                target="_blank"
                className="h-full w-full cursor-pointer"
              >
                <Image
                  src="/payment-flowchart-team-plan.png"
                  alt="Flowchart steps"
                  layout="responsive"
                  width={1451}
                  height={1662}
                  objectFit="cover"
                  priority
                />
              </a>
            </div>
          </ContainerText>
          <ContainerText>
            <div className="flex flex-col space-y-2">
              <h5>
                This flow charts allowed to highlight all the “states” of the
                different components that needed to be created and gave me a map
                of the work to do.
              </h5>
            </div>
          </ContainerText>
        </div>
        {/* Wireframing */}
        <div className="flex w-full flex-col space-y-2 pb-24">
          <ContainerText>
            <div className="flex flex-col space-y-2">
              <h2 className="font-bold">Wireframing</h2>
              <div className="flex flex-col space-y-4">
                <h5 className="">
                  I created wireframes of each steps in order to position the
                  components in relationship to each other:
                </h5>
                <div className="">
                  <ul className="flex list-disc flex-col space-y-2 pl-4 pt-4">
                    <li>
                      <h5>
                        The first screen would help user choose the relevant
                        pack for their business, i.e the relevant set of
                        features
                      </h5>
                    </li>
                    <li>
                      <h5>
                        The second screen would help user choose the right
                        volume of yearly container transactions tracked
                      </h5>
                    </li>
                    <li>
                      <h5>
                        The third screen would allow user to choose a payment
                        method and place their order
                      </h5>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </ContainerText>
          <ContainerText>
            <div className="flex flex-col space-y-12 pt-8">
              <div className="shadow-md">
                <Image
                  src="/payment-wireframe-cards.png"
                  alt="payment-wireframe-cards"
                  layout="responsive"
                  width={1440}
                  height={764}
                  objectFit="cover"
                  priority
                />
              </div>
              <div className="shadow-md">
                <Image
                  src="/payment-wireframe-volume.png"
                  alt="payment-wireframe-volume"
                  layout="responsive"
                  width={1440}
                  height={764}
                  objectFit="cover"
                  priority
                />
              </div>
              <div className="shadow-md">
                <Image
                  src="/payment-wireframe-payment.png"
                  alt="payment-wireframe-payment"
                  layout="responsive"
                  width={1440}
                  height={764}
                  objectFit="cover"
                  priority
                />
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
                src="/payment-component-plan.png"
                alt="payment-component-plan"
                layout="responsive"
                width={1422}
                height={488}
                objectFit="cover"
                priority
              />
            </div>
          </ContainerText>
          <ContainerText>
            <div className="mb-16 shadow-md">
              <Image
                src="/payment-component-volume.png"
                alt="payment-component-volume"
                layout="responsive"
                width={1590}
                height={1910}
                objectFit="cover"
                priority
              />
            </div>
          </ContainerText>
          <ContainerText>
            <div className="mb-16 shadow-md">
              <Image
                src="/payment-component-checkout.png"
                alt="payment-component-plan"
                layout="responsive"
                width={1590}
                height={1910}
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
                src="/payment-mockup-plan.png"
                alt="payment-mockup-plan"
                layout="responsive"
                width={1440}
                height={764}
                objectFit="cover"
                priority
              />
            </div>
          </ContainerText>
          <ContainerText>
            <div className="shadow-md">
              <Image
                src="/payment-mockup-volume.png"
                alt="Wireframe1"
                layout="responsive"
                width={1440}
                height={764}
                objectFit="cover"
                priority
              />
            </div>
          </ContainerText>
          <ContainerText>
            <div className="shadow-md">
              <Image
                src="/payment-mockup-checkout.png"
                alt="payment-mockup-checkout"
                layout="responsive"
                width={1440}
                height={764}
                objectFit="cover"
                priority
              />
            </div>
          </ContainerText>
        </div>
        {/* Conclusion */}
        <ContainerText>
          <div className="flex w-full flex-col space-y-2 pb-32 pt-24 ">
            <h2 className="font-bold">Conclusion</h2>
            <h5>
              The introduction of the new pricing model and checkout experience
              allowed the business team to upscale all existing clients,
              increasing the revenue of the company by 25% in only a few month.
            </h5>
          </div>
        </ContainerText>
      </div>
    </>
  )
}

const CheckoutFlow: React.FC = () => {
  const project = caseStudies.filter((item) => item.key === 'bluecargo_payment')
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

export default CheckoutFlow
export { getServerSideProps }
