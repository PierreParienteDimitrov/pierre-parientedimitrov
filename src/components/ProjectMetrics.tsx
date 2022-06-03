import React from 'react'
import { IProjectMetrics } from 'types/IProjectMetrics'

const ProjectMetrics: React.FC<IProjectMetrics> = (props) => {
  const { year, role, technology, method, category } = props
  return (
    <div className="border border-tertiary bg-white p-8 shadow-md">
      <ul className="flex flex-col space-y-6 ">
        <li className="flex flex-col space-y-2">
          <div className="flex flex-col space-y-1 border-b border-black">
            <h6 className="pb-1 font-bold uppercase">Year</h6>
          </div>
          <p>{year}</p>
        </li>
        <li className="flex flex-col space-y-2">
          <div className="flex flex-col space-y-1 border-b border-black">
            <h6 className="pb-1 font-bold uppercase">Role</h6>
          </div>
          <p>{role}</p>
        </li>
        <li className="flex flex-col space-y-2">
          <div className="flex flex-col space-y-1 border-b border-black">
            <h6 className="pb-1 font-bold uppercase">Technology</h6>
          </div>
          <p>{technology}r</p>
        </li>
        <li className="flex flex-col space-y-2">
          <div className="flex flex-col space-y-1 border-b border-black">
            <h6 className="pb-1 font-bold uppercase">Research Method</h6>
          </div>
          <p>{method}</p>
        </li>
        <li className="flex flex-col space-y-2">
          <div className="flex flex-col space-y-1 border-b border-black">
            <h6 className="pb-1 font-bold uppercase">Category</h6>
          </div>
          <p>{category}Live App</p>
        </li>
      </ul>
    </div>
  )
}

export default ProjectMetrics
