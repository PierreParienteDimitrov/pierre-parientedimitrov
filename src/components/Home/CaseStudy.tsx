import React from 'react'

import Container from '@/layouts/containers/Container'
import { caseStudies } from '@/utils/copy/caseStudiesContent'

import UseCases from '../UseCases'

const CaseStudy: React.FC = () => {
  const latestDesignStories = caseStudies.filter((el) => el.latest)

  const latestEngineering = caseStudies.filter(
    (el) =>
      el.client === 'Portfolio Website' || el.client === 'Tempso Landing Page'
  )

  return (
    <Container>
      <div className="mb-16 mt-2 flex flex-col space-y-4 dark:text-gray-100">
        <h3>
          Currently designing BlueCargo&apos;s Supply Chain software 🚢 and
          building Charter Communications Design System.
        </h3>
        <h5 className="font-normal text-gray-600 dark:text-gray-500">
          Previously I freelanced for a variety of clients, and designed
          <span>
            {' '}
            <a
              href="https://www.tempso.com/"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer text-primary underline underline-offset-4"
            >
              Tempso
            </a>
          </span>
          , a classical music streaming App for iOS and Android.
        </h5>
      </div>
      <div className="flex flex-col space-y-8 md:space-y-10">
        {/* Design Stories */}
        <UseCases
          useCasesItems={latestDesignStories}
          title="latest design stories"
          button="read the story"
          projectType="design"
        />
        <UseCases
          useCasesItems={latestEngineering}
          title="Latest Engineering Projects"
          button="see project"
          projectType="software"
        />
      </div>
    </Container>
  )
}

export default CaseStudy
