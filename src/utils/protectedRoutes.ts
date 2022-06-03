import { pageInformation, Routes } from 'constants/pages'
import { GetServerSideProps } from 'next'
import { Session } from 'next-auth'
import { getSession } from 'next-auth/react'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session: Session | null = await getSession(context)

  const hasAccess = session?.user.has_access

  const query = pageInformation[Routes.ContainerTracking]!.path

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
