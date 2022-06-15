import { pageInformation, Routes } from 'constants/pages'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import ContactForm from '@/components/ContactForm'
import Hero from '@/components/Hero/Hero'
import CaseStudy from '@/components/Home/CaseStudy'
import InfiniteCarousel from '@/components/Home/InfiniteCarousel'
import Container from '@/layouts/containers/Container'
import { aboutMe } from '@/utils/aboutMe'
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
      <div className="relative z-0 w-screen overflow-x-hidden bg-dark md:h-screen md:pt-20">
        <div className={`${styles.container}`}></div>

        {/* intro */}
        <Container>
          <div className="flex w-full flex-col -space-y-16">
            <div className="relative z-50 flex h-full flex-col space-y-16 py-16 md:flex-row md:items-start md:space-y-0">
              <div className="w-full lg:w-2/3">
                <Hero />
              </div>
              <div className="w-full lg:w-1/3">
                <ContactForm />
              </div>
            </div>
            <div className="self-start">
              <InfiniteCarousel />
            </div>
          </div>
        </Container>
      </div>
      {/* statement */}
      <div className="relative h-screen w-full py-32">
        <Container>
          <div className="z-10 flex flex-col items-center space-y-8">
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
              <div className="absolute top-0 z-0 h-[230px] w-[230px] rounded-full bg-primary opacity-10"></div>
            </div>
            <div className="w-full flex-col space-y-4 md:m-auto md:w-3/6">
              <h4>
                I am a Digital Entrepreneur with a passion for creating
                meaningful digital experiences.
              </h4>
              <p>{aboutMe}</p>
            </div>
            <Link href={`${pageInformation[Routes.Resume]!.path}`} passHref>
              <h5 className="cursor-pointer text-primary">Learn More</h5>
            </Link>
          </div>
        </Container>
      </div>
      {/* skills */}
      <div className="relative overflow-x-hidden bg-white py-24 text-dark">
        <div className={styles.skills}>
          <Container>
            <div className="w-full pb-8 text-center">
              <h4 className="font-bold">My Skills</h4>
            </div>
            <div
              className={`flex flex-col space-y-8 h-full md:flex-row md:space-x-16 md:space-y-0`}
            >
              {/* cards */}
              {skills.map((card, index) => {
                return (
                  <div
                    key={index}
                    className={`flex items-stretch flex-col rounded-2xl border text-center shadow-md md:w-1/3 ${styles.cards}`}
                  >
                    <div className="w-full py-6">
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
      </div>
      {/* case studies */}
      <div className="py-32">
        <div className="w-full pb-8 text-center">
          <h4 className="font-bold">My Projects</h4>
        </div>
        <CaseStudy />
      </div>
    </>
  )
}

export default Index
