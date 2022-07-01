import { pageInformation, Routes } from 'constants/pages'
import Head from 'next/head'

import CaseStudy from '@/components/Home/CaseStudy'
import Hero2 from '@/components/Home/Hero2'
import Methodology from '@/components/Home/Methodology'
import MyApproach from '@/components/Home/MyApproach'
import { uxMenuItems, uxTitle } from '@/utils/copy/uxMenuItems'

const SHOW = process.env.NODE_ENV === 'development'

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
      {/* Methodology */}
      {SHOW && (
        <Methodology
          methodologyItems={uxMenuItems}
          methodologyTitle={uxTitle}
          color="primary"
        />
      )}
      {/* My Approach */}
      <MyApproach />
    </>
  )
}

export default Index
