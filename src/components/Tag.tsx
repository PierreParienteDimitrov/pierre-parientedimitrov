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
      className={`cursor-pointer rounded-full border px-4 py-1 ${
        activeStyle
          ? 'bg-primary-700 border-primary'
          : 'bg-gray-100 border-gray-400'
      }`}
      id={id}
      onClick={onclick}
    >
      <h6 className="font-black uppercase tracking-wider text-primary">
        {tag}
      </h6>
    </div>
  )
}

export default Tag
