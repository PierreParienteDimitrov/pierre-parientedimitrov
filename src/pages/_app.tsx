import '../styles/global.css'
import 'nprogress/nprogress.css' //styles of nprogress

import { AppProps } from 'next/app'
import Router from 'next/router'
import Script from 'next/script'
import { SessionProvider } from 'next-auth/react'
import NProgress from 'nprogress' //nprogress module

import AppTemplate from '@/layouts/apptemplate/AppTemplate'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function renderSnippet() {
  const opts = {
    apiKey: process.env.NEXT_PUBLIC_SEGMENT_KEY,
    // note: the page option only covers SSR tracking.
    // Page.js is used to track other events using `window.analytics.page()`
    page: true,
  }

  if (process.env.NODE_ENV === 'development') {
    return opts
  }

  return opts
}

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) => (
  <SessionProvider session={session}>
    <AppTemplate>
      <Script
        id="segment-script"
        //@ts-ignore
        dangerouslySetInnerHTML={{ __html: renderSnippet() }}
      />
      <Component {...pageProps} />
    </AppTemplate>
  </SessionProvider>
)

export default MyApp
