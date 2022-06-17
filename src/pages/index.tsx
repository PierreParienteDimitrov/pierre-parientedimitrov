import { pageInformation, Routes } from 'constants/pages'
import Head from 'next/head'
import Image from 'next/image'

import CompanyLogos from '@/components/Home/CompanyLogos'
import Preview from '@/components/Home/Preview'
import Statement from '@/components/Home/Statement'
import Container from '@/layouts/containers/Container'
import { skills } from '@/utils/skills'

import styles from '../styles/home.module.css'

const Index: React.FC = () => {
  return (
    <>
      <Head>
        <title>{pageInformation[Routes.Home]!.title}</title>
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
      {/* Statement */}
      <Statement />
      {/* company logos */}
      <div className="w-full pb-32">
        <CompanyLogos />
      </div>
      {/* Statement */}
      <Preview />
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
    </>
  )
}

export default Index
