import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { RecoilRoot } from 'recoil'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import BaseLayout from '@/components/layouts/BaseLayout'

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()
  return (
    <>
      <Head>
        <title>Marco Toyproject - search-movie-app</title>
      </Head>
      <div className="app__wrapper">
        <QueryClientProvider client={queryClient}>
          <RecoilRoot>
            <BaseLayout>
              <Component {...pageProps} />
            </BaseLayout>
          </RecoilRoot>
        </QueryClientProvider>
      </div>
    </>    
  )
}

export default MyApp
