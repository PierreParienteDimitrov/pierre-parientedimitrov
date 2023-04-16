import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

const MetricsItem: React.FC<{ metrics: string }> = ({ metrics }) => {
  return (
    <li className="flex items-center space-x-2">
      <AiOutlineArrowRight className="text-secondary" />
      <p className="capitalize">{metrics}</p>
    </li>
  )
}

const ProjectMetrics: React.FC<{
  projectMetrics: string[] | undefined
}> = ({ projectMetrics }) => {
  return (
    <div className="dark:text-gray-100">
      <ul className="flex flex-col space-y-4 md:grid md:grid-rows-2 md:gap-4">
        {projectMetrics &&
          projectMetrics.map((el, index) => {
            return <MetricsItem key={index} metrics={el} />
          })}
      </ul>
    </div>
  )
}

export default ProjectMetrics
