import React from 'react'

import Container from '@/layouts/containers/Container'
import { getServerSideProps } from '@/utils/protectedRoutes'

const Charter: React.FC = () => {
  return (
    <div className="h-screen">
      <Container>
        <h1>Coming Soon!</h1>
      </Container>
    </div>
  )
}

export default Charter
export { getServerSideProps }
