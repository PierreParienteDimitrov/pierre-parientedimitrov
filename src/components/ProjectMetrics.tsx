import React from 'react'
import { IProjectMetrics } from 'types/IProjectMetrics'

import styles from '../styles/projectMetrics.module.css'

const ProjectMetrics: React.FC<IProjectMetrics> = (props) => {
  const { year, role, technology, method, category } = props
  return (
    <div className={styles.box}>
      <ul className="flex flex-col space-y-6 ">
        <li className="flex flex-col space-y-2">
          <div className="flex flex-col space-y-1 border-b border-gray-400">
            <h6 className="pb-1 font-bold uppercase text-primary">Year</h6>
          </div>
          <p>{year}</p>
        </li>
        <li className="flex flex-col space-y-2">
          <div className="flex flex-col space-y-1 border-b border-gray-400">
            <h6 className="pb-1 font-bold uppercase text-primary">Role</h6>
          </div>
          <p>{role}</p>
        </li>
        <li className="flex flex-col space-y-2">
          <div className="flex flex-col space-y-1 border-b border-gray-400">
            <h6 className="pb-1 font-bold uppercase text-primary">
              Technology
            </h6>
          </div>
          <p>{technology}r</p>
        </li>
        <li className="flex flex-col space-y-2">
          <div className="flex flex-col space-y-1 border-b border-gray-400">
            <h6 className="pb-1 font-bold uppercase text-primary">
              Research Method
            </h6>
          </div>
          <p>{method}</p>
        </li>
        <li className="flex flex-col space-y-2">
          <div className="flex flex-col space-y-1 border-b border-gray-400">
            <h6 className="pb-1 font-bold uppercase text-primary">Category</h6>
          </div>
          <p>{category}Live App</p>
        </li>
      </ul>
    </div>
  )
}

export default ProjectMetrics
