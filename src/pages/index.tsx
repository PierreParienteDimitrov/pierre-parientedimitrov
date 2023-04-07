import { pageInformation, Routes } from 'constants/pages'
import Head from 'next/head'

import CaseStudy from '@/components/Home/CaseStudy'
import Hero2 from '@/components/Home/Hero2'
import MyApproach from '@/components/Home/MyApproach'

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
      {/* Hero */}
      <Hero2 />
      {/* Statement */}
      {/* <Statement /> */}
      {/* Case Study */}
      <CaseStudy />
      <MyApproach />
    </>
  )
}

export default Index
