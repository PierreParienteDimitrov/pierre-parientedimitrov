import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import ContactForm from '@/components/ContactForm'
import Hero from '@/components/Hero/Hero'
import CaseStudy from '@/components/Home/CaseStudy'
import Container from '@/layouts/containers/Container'
import { skills } from '@/utils/skills'

import styles from '../styles/home.module.css'

const Index: React.FC = () => {
  return (
    <>
      <Head>
        <title>Pierre Pariente Dimitrov Portfolio</title>
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
      <div className="relative z-0 mb-16 w-screen bg-dark md:h-screen md:pt-20">
        <div className={`${styles.container}`}></div>

        {/* intro */}
        <Container>
          <div className="relative z-50 flex h-full flex-col space-y-16 py-16 md:h-screen md:flex-row md:items-start md:space-y-0">
            <div className="md:w-2/3">
              <Hero />
            </div>
            <div className="md:w-1/3">
              <ContactForm />
            </div>
          </div>
        </Container>
      </div>
      {/* case studies */}
      <div>
        <CaseStudy />
      </div>

      {/* skills */}
      <div className="pt-32">
        <Container>
          <div className="w-full pb-8 text-center">
            <h4 className="font-bold">My Skills</h4>
          </div>
          <div className="flex flex-col space-y-4 md:flex-row md:space-x-16 md:space-y-0">
            {/* cards */}
            {skills.map((card, index) => {
              return (
                <div
                  key={index}
                  className="flex w-1/3 flex-col items-center rounded-2xl border text-center shadow-md"
                >
                  <div className="h-48 w-full rounded-2xl border bg-white">
                    <Image
                      src={card.src}
                      alt="UX Research"
                      layout="responsive"
                      width={372}
                      height={192}
                      priority
                    />
                  </div>
                  <div className="flex flex-col items-center space-y-4 px-2 py-4">
                    <p className="font-black uppercase tracking-wider">
                      {card.title}
                    </p>
                    <ul className="flex flex-col items-center space-y-2 capitalize">
                      {card.bullets.map((bullet, index) => {
                        return <li key={index}>{bullet}</li>
                      })}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
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
              <div className="bg-primary-100 absolute top-0 z-0 h-[230px] w-[230px] rounded-full opacity-10"></div>
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
              <h5 className="text-primary-100 cursor-pointer">Learn More</h5>
            </Link>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Index
