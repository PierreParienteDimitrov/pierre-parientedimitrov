import React from 'react'

interface Props {
  leftSide?: React.ReactNode
  rightSide?: React.ReactNode
  leftDesktopOrder?: number
  leftMobileOrder?: number
  rightDesktopOrder?: number
  rightMobileOrder?: number
}

const TwoColsScreen: React.FC<Props> = ({
  leftSide,
  rightSide,
  leftDesktopOrder,
  leftMobileOrder,
  rightMobileOrder,
  rightDesktopOrder,
}) => {
  return (
    <div className="relative flex  h-full w-full flex-col items-center space-y-8 md:flex md:flex-row md:space-y-0">
      <div
        className={`order-${leftMobileOrder} w-full md:order-${leftDesktopOrder} md:w-2/6`}
      >
        {leftSide}
      </div>
      <div
        className={`order-${rightMobileOrder} w-full md:order-${rightDesktopOrder} md:w-4/6 md:pl-32 md:pr-8`}
      >
        {rightSide}
      </div>
    </div>
  )
}

export default TwoColsScreen
