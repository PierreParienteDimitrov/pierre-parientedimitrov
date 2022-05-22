import React from 'react'

interface Props {
  leftSide?: React.ReactNode
  rightSide?: React.ReactNode
  leftDesktopOrder: string
  leftMobileOrder: string
  rightDesktopOrder: string
  rightMobileOrder: string
}

const TwoCols: React.FC<Props> = ({
  leftSide,
  rightSide,
  leftDesktopOrder,
  leftMobileOrder,
  rightDesktopOrder,
  rightMobileOrder,
}) => {
  return (
    <>
      <div
        className={`${leftMobileOrder} md:${leftDesktopOrder} md:w-4/6 md:pr-36`}
      >
        {leftSide}
      </div>
      <div
        className={`${rightMobileOrder} md:relative md:${rightDesktopOrder} md:w-2/6`}
      >
        {rightSide}
      </div>
    </>
  )
}

export default TwoCols
