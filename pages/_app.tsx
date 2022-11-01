import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { RecoilRoot } from 'recoil'
import BaseLayout from '@/components/layouts/BaseLayout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Marco Toyproject - search-movie-app</title>
      </Head>
      <div className="app__wrapper">
        <RecoilRoot>
          <BaseLayout>
            <Component {...pageProps} />
          </BaseLayout>
        </RecoilRoot>
      </div>
    </>    
  )
}

export default MyApp
