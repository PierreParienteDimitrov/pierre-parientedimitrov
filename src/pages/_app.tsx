import '../styles/global.css'
import 'nprogress/nprogress.css' //styles of nprogress

import * as snippet from '@segment/snippet'
import { AppProps } from 'next/app'
import Router from 'next/router'
import Script from 'next/script'
import { SessionProvider } from 'next-auth/react'
import NProgress from 'nprogress' //nprogress module

import AppTemplate from '@/layouts/apptemplate/AppTemplate'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const DEFAULT_WRITE_KEY = process.env.NEXT_PUBLIC_DEFAULT_WRITE_KEY

function renderSnippet() {
  const opts = {
    apiKey: process.env.NEXT_PUBLIC_ANALYTICS_WRITE_KEY || DEFAULT_WRITE_KEY,
    // note: the page option only covers SSR tracking.
    // Page.js is used to track other events using `window.analytics.page()`
    page: true,
  }

  if (process.env.NODE_ENV === 'development') {
    return snippet.max(opts)
  }

  return snippet.min(opts)
}

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) => (
  <SessionProvider session={session}>
    <AppTemplate>
      <Script
        id="segment-script"
        dangerouslySetInnerHTML={{ __html: renderSnippet() }}
      />
      <Component {...pageProps} />
    </AppTemplate>
  </SessionProvider>
)

export default MyApp
