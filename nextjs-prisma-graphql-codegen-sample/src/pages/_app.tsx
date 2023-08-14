import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'

import Layout from '@/components/layout/layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}
