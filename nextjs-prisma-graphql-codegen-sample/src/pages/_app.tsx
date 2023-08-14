import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { CacheProvider, type EmotionCache, ThemeProvider } from '@emotion/react'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'

import Layout from '@/components/layout/layout'
import createEmotionCache from '@/createEmotionCache'
import theme from '@/theme'

const clientSideEmotionCache = createEmotionCache()
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

export default function App(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  //export default function App({ Component, pageProps }: AppProps) {

  return (
    <CacheProvider value={emotionCache}>
      <SessionProvider session={pageProps.session}>
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </SessionProvider>
    </CacheProvider>
  )
}
