import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Marco Toyproject - search-movie-app</title>
      </Head>
      <div className="app__wrapper">
        <Component {...pageProps} />
      </div>
    </>    
  )
}

export default MyApp
