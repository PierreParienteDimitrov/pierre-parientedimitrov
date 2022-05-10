import React from 'react'

interface Props {
  title: string
  work: { title: string; imagePath: string }[]
}

const Section: React.FC<Props> = ({ title }) => {
  return (
    <div>
      <h3>{title}</h3>
    </div>
  )
}

export default Section
