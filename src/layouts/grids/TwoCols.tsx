import React from 'react'

interface Props {
  leftSide?: React.ReactNode
  rightSide?: React.ReactNode
}

const TwoCols: React.FC<Props> = ({ leftSide, rightSide }) => {
  return (
    <>
      <div className="order-2 pr-36 md:order-1 md:w-4/6">{leftSide}</div>
      <div className="order-1 md:relative md:order-2 md:w-2/6">{rightSide}</div>
    </>
  )
}

export default TwoCols
