import React from 'react'

interface Itag {
  tag: string
  onclick?: React.MouseEventHandler<HTMLDivElement>
  id?: string
  activeFilter?: string[]
}

const Tag: React.FC<Itag> = ({ tag, id, onclick, activeFilter }) => {
  const activeStyle = activeFilter?.includes(tag)

  return (
    <div
      className={`${
        !!onclick && 'cursor-pointer'
      } rounded-full border px-4 py-1 ${
        activeStyle ? 'border-primary' : 'border-gray-500'
      }`}
      id={id}
      onClick={onclick}
    >
      <h6
        className={`font-medium capitalize ${
          activeStyle ? 'text-primary' : 'text-gray-500'
        }`}
      >
        {tag}
      </h6>
    </div>
  )
}

export default Tag
