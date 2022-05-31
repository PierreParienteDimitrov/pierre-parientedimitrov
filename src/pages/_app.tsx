import '../styles/global.css'

import { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'

import AppTemplate from '@/layouts/apptemplate/AppTemplate'

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) => (
  <SessionProvider session={session}>
    <AppTemplate>
      <Component {...pageProps} />
    </AppTemplate>
  </SessionProvider>
)

export default MyApp
