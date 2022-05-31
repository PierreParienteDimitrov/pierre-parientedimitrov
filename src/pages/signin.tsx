import { useSession } from 'next-auth/react'
import React from 'react'

import SignInForm from '../components/SignInForm'

const Signin: React.FC = () => {
  const { data } = useSession()
  console.log(data)

  return (
    <div>
      This is the sigin page <SignInForm />
    </div>
  )
}

export default Signin
