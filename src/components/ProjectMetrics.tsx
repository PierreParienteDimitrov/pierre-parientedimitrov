import React from 'react'
import { IProjectMetrics } from 'types/IProjectMetrics'

const ProjectMetrics: React.FC<IProjectMetrics> = (props) => {
  const { year, role, technology, method, category } = props
  return (
    <ul className="flex flex-col space-y-6">
      <li className="flex flex-col space-y-2">
        <div className="flex flex-col space-y-1">
          <h6 className="font-bold uppercase">Year</h6>
          <hr />
        </div>
        <h5>{year}</h5>
      </li>
      <li className="flex flex-col space-y-2">
        <div className="flex flex-col space-y-1">
          <h6 className="font-bold uppercase">Role</h6>
          <hr />
        </div>
        <h5>{role}</h5>
      </li>
      <li className="flex flex-col space-y-2">
        <div className="flex flex-col space-y-1">
          <h6 className="font-bold uppercase">Technology</h6>
          <hr />
        </div>
        <h5>{technology}r</h5>
      </li>
      <li className="flex flex-col space-y-2">
        <div className="flex flex-col space-y-1">
          <h6 className="font-bold uppercase">Research Method</h6>
          <hr />
        </div>
        <h5>{method}</h5>
      </li>
      <li className="flex flex-col space-y-2">
        <div className="flex flex-col space-y-1">
          <h6 className="font-bold uppercase">Category</h6>
          <hr />
        </div>
        <h5>{category}Live App</h5>
      </li>
    </ul>
  )
}

export default ProjectMetrics
