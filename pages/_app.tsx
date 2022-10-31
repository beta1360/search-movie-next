import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import BaseLayout from '@/components/layouts/BaseLayout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Marco Toyproject - search-movie-app</title>
      </Head>
      <div className="app__wrapper">
        <BaseLayout>
          <Component {...pageProps} />
        </BaseLayout>
      </div>
    </>    
  )
}

export default MyApp
