import { ReactElement, useEffect, useMemo } from 'react'
import { useState, useCallback } from 'react'
import TopLayout from '@/components/layouts/Top'
import Footer from '@/components/layouts/Footer'
import AlertMessage from '@/components/shared/modals/Base/AlertMessage'
import { useRouter } from 'next/router'
import { css } from '@emotion/react'

const containerStyle = css`
  padding: 40px 10px 60px;
  flex: 1 1 auto;
`

const BaseLayout = ({ children }: { children: ReactElement }) => {
  const router = useRouter()
  const [keyword, setKeyword] = useState('')
  const [isShownAlertMessage, setIsShowAlertMessage] = useState(true)
  const isMainPage = useMemo(() => router.pathname === '/', [router.pathname])
  const defaultKeyword = useMemo(() => (router.query?.keyword || '') as string, [router.query.keyword])

  const onChangeKeyword = useCallback((value: string) => {
    setKeyword(value)
  }, [])

  const searchMovies = useCallback((e: React.SyntheticEvent) => {
    e.preventDefault()
    router.push({ pathname: '/search', query: { keyword } })
  }, [keyword, router])

  const goToMainPage = useCallback(() => {
    router.push('/')
  }, [router])

  const setTimeoutAlertMessage = async () => {
    setTimeout(() => {
      setIsShowAlertMessage(false)
    }, 3000)
  }

  useEffect(() => {
    isShownAlertMessage && setTimeoutAlertMessage()
  }, [isShownAlertMessage])

  return (
    <>
      <TopLayout
        isMainPage={isMainPage}
        defaultKeyword={defaultKeyword}
        goToMainPage={goToMainPage}
        onChange={onChangeKeyword}
        handleSubmit={searchMovies}
      />
      <div css={containerStyle}>
        { children }
      </div>
      <Footer />

      { isShownAlertMessage &&
        <AlertMessage
          type="error"
          message="테스트"
        />
      }
    </>
  )
}

export default BaseLayout