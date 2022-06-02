import Image from 'next/image'
import Link from 'next/link'

import Hero from '@/components/Hero/Hero'
import CaseStudy from '@/components/Home/CaseStudy'
import Container from '@/layouts/containers/Container'

const Index: React.FC = () => {
  return (
    <>
      <div className="h-screen w-screen">
        {/* intro */}
        <Container>
          <div className="flex h-full flex-col space-y-10 pt-36 pb-20 md:h-screen md:flex-row md:items-center">
            <Hero />
            <video
              autoPlay
              muted
              loop
              style={{
                position: 'absolute',
                top: '1rem',
                zIndex: '-1',
                opacity: '0.07',
                width: '100vw',
                height: '100%',
              }}
            >
              <source src="/uxvideo.mp4" type="video/mp4" />
            </video>
          </div>
        </Container>
      </div>
      {/* case studies */}
      <div>
        <CaseStudy />
      </div>

      <div className="relative w-full py-32">
        <Container>
          {/* statement */}
          <div className="z-10 flex flex-col items-center space-y-16">
            <div className="relative w-3/6 md:w-1/6">
              <Image
                src="/pierrepariente.jpeg"
                alt="Pierre Pariente Dimitrov"
                layout="responsive"
                width={500}
                height={500}
                priority
                className="z-10 rounded-full shadow-lg"
              />
              <div className="absolute top-0 z-0 h-[230px] w-[230px] rounded-full bg-primary-100 opacity-10"></div>
            </div>
            <div className="w-full flex-col space-y-4 md:m-auto md:w-3/6">
              <h4>
                I am a Digital Entrepreneur with a passion for creating
                meaningful digital experiences.
              </h4>
              <p>
                I started my career in 2015 as Strategic Analyst for an
                international bank, where I conducted Market Research Studies
                for a wide range of industries. This Research work introduced me
                to the world of UX Design. After countless hours of training, I
                learned the foundation of UI design and transitioned to become a
                Product Designer in 2017. In 2020, at the start of the pandemic,
                I completed a Full-Stack Web Development Bootcamp with UCLA.
              </p>
            </div>
            <Link href="/about" passHref>
              <h5 className="cursor-pointer text-primary-100">Learn More</h5>
            </Link>
          </div>
        </Container>
        {/* <Image
          src="/abstract-bg.jpeg"
          alt="Pierre Pariente Dimitrov"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
          className="absolute inset-x-0 top-0 -z-10"
        /> */}
      </div>

      {/* <Container> */}
      {/* testimonials */}
      {/* <div className="mt-32">
          <div className="flex w-full justify-center text-center md:px-96">
            <h4>
              Testimonials Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Maxime, pariatur!
            </h4>
          </div>
        </div> */}
      {/* testimonials */}
      {/* <div className="mt-32 w-full bg-slate-900">
          <div className="flex w-full flex-col justify-center space-y-4 text-center">
            <h2>We would work great together.</h2>
            <p>
              Read about my available services and let’s talk about your
              interface design goals.
            </p>
          </div>
        </div> */}
      {/* </Container> */}
    </>
  )
}

export default Index
