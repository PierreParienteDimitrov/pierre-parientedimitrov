import '../styles/global.css'

import { AppProps } from 'next/app'

import AppTemplate from '@/layouts/apptemplate/AppTemplate'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <AppTemplate>
    <Component {...pageProps} />
  </AppTemplate>
)

export default MyApp
