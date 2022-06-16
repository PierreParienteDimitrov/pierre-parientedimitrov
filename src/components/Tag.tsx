import React from 'react'

interface Itag {
  tag: string
  onclick?: React.MouseEventHandler<HTMLDivElement>
  id?: string
}

const Tag: React.FC<Itag> = ({ tag, id, onclick }) => {
  return (
    <div
      className="cursor-pointer rounded-full border border-primary bg-primary-700 px-4 py-1"
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
