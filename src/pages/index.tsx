import Image from 'next/image'
import Link from 'next/link'

import Button from '@/components/Button'
import Hero from '@/components/Hero/Hero'
import Container from '@/layouts/containers/Container'
import TwoCols from '@/layouts/grids/TwoCols'

const RightSide: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-start space-y-8 border-l-2 border-black px-4">
        <p>
          You have a project in mind? <br />
          Let&apos;s create!
        </p>
        <Button variant="outlined" size="medium" color="primary">
          <Link href="/contact" passHref>
            Contact Me
          </Link>
        </Button>
      </div>
    </>
  )
}

const Index: React.FC = () => {
  return (
    <Container>
      {/* intro */}
      <div className="flex h-full flex-col space-y-10 pt-10 pb-20 md:h-screen md:flex-row md:items-center">
        <TwoCols
          leftSide={<Hero />}
          leftMobileOrder="order-1"
          leftDesktopOrder="order-1"
          rightSide={<RightSide />}
          rightMobileOrder="order-2"
          rightDesktopOrder="order-2"
        />
        <video
          autoPlay
          muted
          loop
          style={{
            position: 'absolute',
            bottom: '0rem',
            zIndex: '-1',
            opacity: '0.07',
            width: '100vw',
            height: '100%',
          }}
        >
          <source src="/uxvideo.mp4" type="video/mp4" />
        </video>
      </div>

      {/* statement */}
      <div className="flex flex-col justify-items-start space-y-4 md:flex-row md:items-center">
        <div className="w-3/6 md:w-2/6">
          <Image
            src="/pierrepariente.jpeg"
            alt="Pierre Pariente Dimitrov"
            layout="responsive"
            width={972}
            height={972}
            objectFit="cover"
            priority
            className="rounded-full shadow-lg"
          />
        </div>
        <div className="w-full flex-col space-y-4 md:w-4/6 md:pl-36">
          <h4>
            I am a Digital Entrepreneur with a passion for creating meaningful
            digital experiences.
          </h4>
          <p>
            I started my career in 2015 as Strategic Analyst for an
            international bank, where I conducted Market Research Studies for a
            wide range of industries. This Research work introduced me to the
            world of UX Design. After countless hours of training, I learned the
            foundation of UI design and transitioned to become a Product
            Designer in 2017. In 2020, at the start of the pandemic, I completed
            a Full-Stack Web Development Bootcamp with UCLA.
          </p>
          <Button variant="outlined" size="medium" color="primary">
            <Link href="/about" passHref>
              Learn More
            </Link>
          </Button>
        </div>
      </div>

      {/* case studies */}
      <div className="mt-32">
        <h3>Case Studies</h3>
        <div className="flex flex-wrap space-y-10">
          {/* first row */}
          <div className="flex w-full flex-col space-y-10 md:flex-row md:space-x-10 md:space-y-0">
            {/* tempso */}
            <div className="flex h-full w-full items-center md:w-1/2">
              <div className="flex h-full w-full flex-col space-y-2 text-center">
                <Link href="/portfolio/tempso" passHref>
                  <Image
                    src="/case-study-tempso.png"
                    alt="Pierre Pariente Dimitrov"
                    layout="responsive"
                    width={640}
                    height={383}
                    objectFit="cover"
                    priority
                    className="cursor-pointer shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-125"
                  />
                </Link>
                <h5 className="font-semibold uppercase">
                  UX/UI Design - Mobile Application - Live
                </h5>
              </div>
            </div>
            {/* case 2 */}
            <div className="flex h-full w-full items-center md:w-1/2">
              <div className="flex h-full w-full flex-col space-y-2 text-center">
                {/* <Link href="/portfolio/tempso" passHref> */}
                <Image
                  src="/case-study-coming-soon.png"
                  alt="Pierre Pariente Dimitrov"
                  layout="responsive"
                  width={640}
                  height={383}
                  objectFit="cover"
                  priority
                  className="cursor-pointer shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-125"
                />
                {/* </Link> */}
                <h5 className="font-semibold uppercase">
                  UX/UI Design - Mobile Application - Live
                </h5>
              </div>
            </div>
          </div>
          {/* second row */}
          <div className="flex w-full flex-col space-y-10 md:flex-row md:space-x-4 md:space-y-0">
            {/* tempso */}
            <div className="flex h-full w-full items-center md:w-1/2">
              <div className="flex h-full w-full flex-col space-y-2 text-center">
                {/* <Link href="/portfolio/tempso" passHref> */}
                <Image
                  src="/case-study-coming-soon.png"
                  alt="Pierre Pariente Dimitrov"
                  layout="responsive"
                  width={640}
                  height={383}
                  objectFit="cover"
                  priority
                  className="cursor-pointer shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-125"
                />
                {/* </Link> */}
                <h5 className="font-semibold uppercase">
                  UX/UI Design - Mobile Application - Live
                </h5>
              </div>
            </div>
            {/* case 2 */}
            <div className="flex h-full w-full items-center md:w-1/2">
              <div className="flex h-full w-full flex-col space-y-2 text-center">
                {/* <Link href="/portfolio/tempso" passHref> */}
                <Image
                  src="/case-study-coming-soon.png"
                  alt="Pierre Pariente Dimitrov"
                  layout="responsive"
                  width={640}
                  height={383}
                  objectFit="cover"
                  priority
                  className="cursor-pointer shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-125"
                />
                {/* </Link> */}
                <h5 className="font-semibold uppercase">
                  UX/UI Design - Mobile Application - Live
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* testimonials */}
      <div className="mt-32">
        <div className="flex w-full justify-center text-center md:px-96">
          <h4>
            Testimonials Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Maxime, pariatur!
          </h4>
        </div>
      </div>
      {/* testimonials */}
      <div className="mt-32 w-full bg-slate-900">
        <div className="flex w-full flex-col justify-center space-y-4 text-center">
          <h2>We would work great together.</h2>
          <p>
            Read about my available services and let’s talk about your interface
            design goals.
          </p>
        </div>
      </div>
    </Container>
  )
}

export default Index
