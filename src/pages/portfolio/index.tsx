import { pageInformation, Routes } from 'constants/pages'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { IUseCasesItems } from 'types/ICase'

import Tag from '@/components/Tag'
import UseCases from '@/components/UseCases'
import Container from '@/layouts/containers/Container'
import { caseStudies } from '@/utils/copy/caseStudiesContent'
import { tags } from '@/utils/copy/tags'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState<string[]>(
    Object.keys(tags).map((tag) => tags[tag])
  )
  const [projects, setProjects] = React.useState<IUseCasesItems[]>([])

  useEffect(() => {
    const filteredProjects = caseStudies.filter((project) =>
      project.tags.some((tag) => activeFilter.includes(tag))
    )

    setProjects(filteredProjects)
  }, [activeFilter])

  const handleFilterSelection = (e: React.SyntheticEvent) => {
    e.preventDefault()

    const selectedFilter = e.currentTarget.id

    const isFilterActive = activeFilter.includes(selectedFilter)

    if (!isFilterActive) {
      setActiveFilter((prevItems) => [...prevItems, selectedFilter])
    }

    if (isFilterActive) {
      setActiveFilter((prevItems) =>
        prevItems.filter((filterItem) => filterItem !== selectedFilter)
      )
    }
  }

  return (
    <>
      <Head>
        <title>{pageInformation[Routes.Portfolio]!.title}</title>
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
      <div className="py-16 pb-48">
        <Container>
          <div className="mb-24 flex flex-col space-y-8">
            <div className="flex flex-col space-y-2">
              <h3 className="font-bold text-gray-800">Portfolio</h3>
              <h6 className="font-semibold uppercase tracking-wide">
                showing {projects.length} out of {caseStudies.length} projects
              </h6>
            </div>
            <div className="mr-8 flex flex-wrap items-center">
              {Object.keys(tags).map((tag, index) => {
                return (
                  <div key={index} className="py-2 pr-4">
                    <Tag
                      tag={tags[tag]}
                      onclick={(e) => handleFilterSelection(e)}
                      id={tags[tag]}
                      activeFilter={activeFilter}
                    />
                  </div>
                )
              })}
            </div>
          </div>
          <div className="flex flex-col space-y-8 md:space-y-10">
            {/* Design Stories */}
            <UseCases
              useCasesItems={projects}
              title="All Projects"
              projectType="design"
              button="read the story"
            />
          </div>
        </Container>
      </div>
    </>
  )
}

export default Portfolio
