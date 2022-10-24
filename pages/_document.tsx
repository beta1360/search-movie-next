import { Html, Head, Main, NextScript } from 'next/document'
import type { NextPage } from 'next'

const Document: NextPage = () => {
  return (
    <Html lang="ko">
      <Head>
        <meta name="marco-next-text" content="Hello React!" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document