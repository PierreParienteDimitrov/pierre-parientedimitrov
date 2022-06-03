import React from 'react'

interface Props {
  leftSide?: React.ReactNode
  rightSide?: React.ReactNode
  leftDesktopOrder?: string
  leftMobileOrder?: string
  rightDesktopOrder?: string
  rightMobileOrder?: string
}

const TwoCols: React.FC<Props> = ({ leftSide, rightSide }) => {
  return (
    <div className="relative flex h-full flex-col -space-y-8 md:flex md:flex-row">
      <div className={`order-2 mt-10 md:order-1 md:w-4/6 md:pr-28`}>
        {leftSide}
      </div>
      <div
        className={`order-1 md:order-2 md:w-2/6 md:sticky md:top-8 md:self-start`}
      >
        {rightSide}
      </div>
    </div>
  )
}

export default TwoCols
