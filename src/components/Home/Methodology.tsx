import React, { useState } from 'react'
import { IMethdologyTitle, IMethodology } from 'types/IMethodology'

import Container from '@/layouts/containers/Container'

const Methodology: React.FC<{
  methodologyItems: IMethodology[]
  methodologyTitle: IMethdologyTitle
  color: string
}> = ({ methodologyItems, methodologyTitle, color }) => {
  const { header, title, description } = methodologyTitle
  const [filter, setFilter] = useState(methodologyItems[0]?.filter)

  const handleFilterSelection = (e: React.SyntheticEvent) => {
    const selectedFilter = e.currentTarget.id
    setFilter(selectedFilter)
  }

  return (
    <div className=" flex flex-col space-y-2 py-48">
      <Container>
        <div className="flex flex-col space-y-16">
          <div className="flex flex-col space-y-4 md:w-4/6">
            <p className={`font-bold capitalize text-${color}`}>{header}</p>
            <h3 className="font-black">{title}</h3>
            <p className="font-normal text-gray-600">{description}</p>
          </div>
          <div className="flex space-x-16">
            {methodologyItems.map((item) => {
              return (
                <div key={item.filter} className="flex space-x-8">
                  <div
                    id={item.filter}
                    onClick={(e) => handleFilterSelection(e)}
                    className="cursor-pointer"
                  >
                    <img src={item.src} alt={item.alt} />
                    <h5
                      className={`pt-4 capitalize font-bold ${
                        filter === item.filter
                          ? 'text-primary'
                          : 'text-gray-600'
                      }`}
                    >
                      {item.title}
                    </h5>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Container>
      <div className="relative pl-4 md:pl-24">
        {methodologyItems.map((item) => {
          return (
            <div
              key={item.filter}
              className={`absolute top-0 ${
                filter === item.filter
                  ? 'transition duration-500 ease-in opacity-100'
                  : 'transition duration-500 ease-out opacity-0'
              }`}
            >
              <h5 className="pt-4 font-medium text-primary">
                {item.description}
              </h5>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Methodology
