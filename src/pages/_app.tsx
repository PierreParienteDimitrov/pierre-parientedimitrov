import '../styles/global.css'
import 'nprogress/nprogress.css' //styles of nprogress

import * as snippet from '@segment/snippet'
import { AppProps } from 'next/app'
import Router from 'next/router'
import Script from 'next/script'
import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from 'next-themes'
import NProgress from 'nprogress' //nprogress module

import AppTemplate from '@/layouts/apptemplate'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const DEFAULT_WRITE_KEY = process.env.NEXT_PUBLIC_DEFAULT_WRITE_KEY

// Segment code
function renderSnippet() {
  if (process.env.NODE_ENV === 'development') {
    const opts = {
      apiKey: DEFAULT_WRITE_KEY,
      // note: the page option only covers SSR tracking.
      // Page.js is used to track other events using `window.analytics.page()`
      page: true,
    }
    return snippet.max(opts)
  }

  const opts = {
    apiKey: process.env.NEXT_PUBLIC_SEGMENT_KEY,
    // note: the page option only covers SSR tracking.
    // Page.js is used to track other events using `window.analytics.page()`
    page: true,
  }
  return snippet.min(opts)
}

const MyApp = ({
  Component,
  //@ts-ignore
  pageProps: { session, ...pageProps },
}: AppProps) => (
  <SessionProvider session={session}>
    <ThemeProvider attribute="class">
      <AppTemplate>
        <Script
          id="segment-script"
          dangerouslySetInnerHTML={{ __html: renderSnippet() }}
        />
        <Component {...pageProps} />
      </AppTemplate>
    </ThemeProvider>
  </SessionProvider>
)

export default MyApp
