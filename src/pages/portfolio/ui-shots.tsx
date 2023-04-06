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
        <div className="mb-32 pt-16 text-center dark:text-gray-100">
          <h1 className="font-bold">UI Shots</h1>

          <UIShots />
        </div>
      </Container>
    </>
  )
}

export default Uishots
