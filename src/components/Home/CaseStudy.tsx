import React from 'react'

import Container from '@/layouts/containers/Container'

import { caseStudies } from '../../utils/caseStudiesContent'
import UseCases from '../UseCases'

const CaseStudy: React.FC = () => {
  const latestDesignStories = caseStudies.filter(
    (el) => el.project === 'Tempso' || el.project === 'BlueCargo'
  )

  const latestEngineering = caseStudies.filter(
    (el) =>
      el.project === 'Portfolio Website' || el.project === 'Tempso Landing Page'
  )

  return (
    <Container>
      <div className="flex flex-col space-y-8 md:space-y-10">
        {/* Design Stories */}
        <UseCases
          useCasesItems={latestDesignStories}
          title="latest design stories"
          color="primary"
          button="read the story"
        />
        <UseCases
          useCasesItems={latestEngineering}
          title="Latest Engineering Projects"
          color="secondary"
          button="see project"
        />
      </div>
    </Container>
  )
}

export default CaseStudy
