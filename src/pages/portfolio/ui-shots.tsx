import React from 'react'

import UIShots from '@/components/UIShots'
import Container from '@/layouts/containers/Container'

const Uishots = () => {
  return (
    <Container>
      <div className="pt-16 text-center">
        <h3 className="font-bold">UI Shots</h3>
        <p>
          I built this series of UI shot while following the Daily UI Design
          Challenge.
        </p>
        <UIShots />
      </div>
    </Container>
  )
}

export default Uishots
