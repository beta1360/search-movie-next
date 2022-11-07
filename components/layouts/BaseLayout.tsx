import { ReactElement, useEffect, useMemo } from 'react'
import { useState, useCallback } from 'react'
import { useRouter } from 'next/router'
import { css } from '@emotion/react'
import { useRecoilValue, useRecoilState } from 'recoil'
import TopLayout from '@/components/layouts/Top'
import Footer from '@/components/layouts/Footer'
import AlertMessage from '@/components/shared/modals/Base/AlertMessage'
import { alertMessageContextAtom } from '@/store/modal'
import { useAlertMessage } from '@/hooks/alert-message'
import { searchParamsAtom } from '@/store/search'

const containerStyle = css`
  padding: 40px 10px 60px;
  flex: 1 1 auto;
`

const BaseLayout = ({ children }: { children: ReactElement }) => {
  const router = useRouter()
  const [keyword, setKeyword] = useState('')
  const alertMessageContext = useRecoilValue(alertMessageContextAtom)
  const [searchParams, setSearchParams] = useRecoilState(searchParamsAtom)
  const { openAlertMessage, closeAlertMessage } = useAlertMessage()
  const isMainPage = useMemo(() => router.pathname === '/', [router.pathname])

  const onChangeKeyword = useCallback((value: string) => {
    setKeyword(value)
  }, [])

  const searchMovies = useCallback((e: React.SyntheticEvent) => {
    e.preventDefault()
    if (keyword.length === 0) {
      openAlertMessage({
        type: 'warning',
        message: '키워드를 입력해주세요.'
      })
      return
    }
    router.push({ pathname: '/search', query: { keyword } })
  }, [keyword, router, openAlertMessage])

  const goToMainPage = useCallback(() => {
    if (isMainPage) {
      router.reload()
    } else {
      router.push('/')
    }
  }, [isMainPage, router])

  const closeAlertMessageByButton = useCallback(() => {
    closeAlertMessage()
  }, [closeAlertMessage])

  return (
    <>
      <TopLayout
        isMainPage={isMainPage}
        defaultKeyword={searchParams.query}
        goToMainPage={goToMainPage}
        onChange={onChangeKeyword}
        handleSubmit={searchMovies}
      />
      <div css={containerStyle}>
        { children }
      </div>
      <Footer />

      { alertMessageContext.shown &&
        <AlertMessage
          type={alertMessageContext.data.type}
          message={alertMessageContext.data.message}
          close={closeAlertMessageByButton}
        />
      }
    </>
  )
}

export default BaseLayout