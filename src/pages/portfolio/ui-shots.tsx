import { pageInformation, Routes } from 'constants/pages'
import Head from 'next/head'
import React from 'react'

import UIShots from '@/components/UIShots'
import Container from '@/layouts/containers/Container'

const Uishots = () => {
  return (
    <>
      <Head>
        <title>{pageInformation[Routes.UIShots]!.title}</title>
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
        <div className="pt-16 text-center">
          <h3 className="font-bold">UI Shots</h3>
          <p>
            I built this series of UI shot while following the Daily UI Design
            Challenge.
          </p>
          <UIShots />
        </div>
      </Container>
    </>
  )
}

export default Uishots
