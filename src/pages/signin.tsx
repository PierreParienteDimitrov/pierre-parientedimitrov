import { pageInformation, Routes } from 'constants/pages'
import { GetServerSideProps } from 'next'
import { Session } from 'next-auth'
import { getSession } from 'next-auth/react'
import React from 'react'

import SignInForm from '../components/SignInForm'

const Signin: React.FC = () => {
  return (
    <div className="pt-32">
      <SignInForm />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session: Session | null = await getSession(context)

  if (session) {
    return {
      redirect: {
        destination: `${pageInformation[Routes.Home]!.path}`,
        permanent: false,
      },
    }
  }

  return {
    props: {
      session,
    },
  }
}

export default Signin
