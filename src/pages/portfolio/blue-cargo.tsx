import { GetServerSideProps } from 'next'
import { Session } from 'next-auth'
import { getSession, useSession } from 'next-auth/react'
import React from 'react'

const Bluecargo: React.FC = () => {
  const { data: session } = useSession()
  console.log(session)
  return <div>Hello</div>
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session: Session | null = await getSession(context)

  const hasAccess = session?.user.has_access

  if (!session) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false,
      },
    }
  }
  if (!hasAccess) {
    return {
      redirect: {
        destination: '/thank-you',
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

export default Bluecargo
