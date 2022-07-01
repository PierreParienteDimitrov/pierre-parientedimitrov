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
