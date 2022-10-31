import { ReactElement } from 'react'
import { useState, useCallback } from 'react'
import { useRouter } from 'next/router'
import TopLayout from "@/components/layouts/Top"
import Footer from "@/components/layouts/Footer"
import { css } from '@emotion/react'

const containerStyle = css`
  padding: 40px auto 60px;
  flex: 1 1 auto;
`

const BaseLayout = ({ children }: { children: ReactElement }) => {
  const router = useRouter()
  const [keyword, setKeyword] = useState('')

  const onChangeKeyword = useCallback((value: string) => {
    setKeyword(value)
  }, [])

  const searchMovies = useCallback((e: React.SyntheticEvent) => {
    e.preventDefault()
    console.log(keyword)
    router.push({ pathname: '/search', query: { keyword } })
  }, [keyword, router])

  const goToMainPage = useCallback(() => {
    router.push('/')
  }, [router])

  return (
    <>
      <TopLayout
        isMainPage={false}
        goToMainPage={goToMainPage}
        onChange={onChangeKeyword}
        handleSubmit={searchMovies}
      />
      <div css={containerStyle}>
        { children }
      </div>
      <Footer />
    </>
  )
}

export default BaseLayout