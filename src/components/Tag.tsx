import React from 'react'

import styles from '@/styles/portfolio.module.css'

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
        activeStyle ? styles.selected : styles.unselected
      }`}
      id={id}
      onClick={onclick}
    >
      <h6
        className={`font-black uppercase tracking-wider ${
          activeStyle ? 'text-primary' : 'text-gray-500'
        }`}
      >
        {tag}
      </h6>
    </div>
  )
}

export default Tag
