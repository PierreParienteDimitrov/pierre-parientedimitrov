import { pageInformation, Routes } from 'constants/pages'
import { GetServerSideProps } from 'next'
import { Session } from 'next-auth'
import { getSession } from 'next-auth/react'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session: Session | null = await getSession(context)
  const params = context.resolvedUrl

  console.log(session)

  if (!session) {
    return {
      redirect: {
        destination: `${
          pageInformation[Routes.SignIn]!.path
        }?project=${params}`,
        permanent: false,
      },
    }
  }

  if (session) {
    interface UserSession {
      user?:
        | {
            email: string
            name: string
            hasAccess: boolean
          }
        | undefined
    }

    const userSession: UserSession = session.session as object
    const hasAccess: boolean = userSession?.user?.hasAccess as boolean

    if (!hasAccess) {
      return {
        redirect: {
          destination: '/thank-you',
          permanent: false,
        },
      }
    }
  }

  return {
    props: {
      ...session,
    },
  }
}
