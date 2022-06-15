import React from 'react'

interface Itag {
  tag: string
}

const Tag: React.FC<Itag> = ({ tag }) => {
  return (
    <div className="rounded-full border border-primary bg-primary-700 px-4 py-1">
      <h6 className="font-black uppercase tracking-wider text-primary">
        {tag}
      </h6>
    </div>
  )
}

export default Tag
