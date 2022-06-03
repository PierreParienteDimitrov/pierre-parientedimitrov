import '../styles/global.css'
import 'nprogress/nprogress.css' //styles of nprogress

import { AppProps } from 'next/app'
import Router from 'next/router'
import { SessionProvider } from 'next-auth/react'
import NProgress from 'nprogress' //nprogress module

import AppTemplate from '@/layouts/apptemplate/AppTemplate'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

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
