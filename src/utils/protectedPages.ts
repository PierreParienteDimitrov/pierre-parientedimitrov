import { GetServerSideProps } from 'next'
import { Session } from 'next-auth'
import { getSession } from 'next-auth/react'

import { pageInformation, Routes } from '@/constants/pages'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session: Session | null = await getSession(context)

  const hasAccess = session?.user.has_access

  const query = pageInformation[Routes.BlueCargo]!.path

  if (!session) {
    return {
      redirect: {
        destination: `${pageInformation[Routes.SignIn]!.path}?path=${query}`,
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
