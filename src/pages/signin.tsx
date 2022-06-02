import { pageInformation, Routes } from 'constants/pages'
import { GetServerSideProps } from 'next'
import Link from 'next/link'
import { Session } from 'next-auth'
import { useSession } from 'next-auth/react'
import { getSession } from 'next-auth/react'
import React from 'react'

import SignInForm from '../components/SignInForm'

const Signin: React.FC = () => {
  const { data } = useSession()
  console.log(data)

  return (
    <div className="mt-10 flex h-[60vh] w-full items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <h3>Enter your email to access this page</h3>
        <SignInForm />
        <div className="flex flex-col items-center space-y-2">
          <h5>Or, if you did not already request access, you</h5>{' '}
          <span className="underline">
            <Link href={pageInformation[Routes.RequestAccess]!.path}>
              request access now!
            </Link>
          </span>
        </div>
      </div>
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
