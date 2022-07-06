import { pageInformation, Routes } from 'constants/pages'
import Head from 'next/head'
import React from 'react'

const ThankYou = () => {
  return (
    <>
      <Head>
        <title>{pageInformation[Routes.ThankYou]!.title}</title>
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

      <div className="m-auto mt-32 flex h-[60vh] w-2/4 flex-col items-center space-y-16 text-center">
        <h4 className="leading-relaxed">
          Thank you for your interest! <br /> I will come back to you shortly to
          grant you access.
        </h4>
      </div>
    </>
  )
}

export default ThankYou
