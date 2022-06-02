import React from 'react'
import { IProjectMetrics } from 'types/IProjectMetrics'

const ProjectMetrics: React.FC<IProjectMetrics> = (props) => {
  const { year, role, technology, method, category } = props
  return (
    <div
      className="p-8 shadow-md"
      style={{
        background:
          'linear-gradient(57.64deg, #83EFDC -12.86%, #8583EF 80.27%);',
      }}
    >
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
