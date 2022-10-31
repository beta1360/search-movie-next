import { ReactElement, useEffect, useMemo } from 'react'
import { useState, useCallback } from 'react'
import TopLayout from '@/components/layouts/Top'
import Footer from '@/components/layouts/Footer'
import AlertMessage, { AlertMessageTypes } from '@/components/shared/modals/Base/AlertMessage'
import { useRouter } from 'next/router'
import { css } from '@emotion/react'

const containerStyle = css`
  padding: 40px 10px 60px;
  flex: 1 1 auto;
`

let timer: any = null

type AlertMessageObj = {
  type: AlertMessageTypes
  message: string
}

const BaseLayout = ({ children }: { children: ReactElement }) => {
  const router = useRouter()
  const [keyword, setKeyword] = useState('')
  const [isShownAlertMessage, setIsShowAlertMessage] = useState(false)
  const [alertObj, setAlertObj] = useState<AlertMessageObj>({ type: 'info', message: '' })
  const isMainPage = useMemo(() => router.pathname === '/', [router.pathname])
  const defaultKeyword = useMemo(() => (router.query?.keyword || '') as string, [router.query.keyword])

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
  }, [keyword, router])

  const goToMainPage = useCallback(() => {
    router.push('/')
  }, [router])

  const setTimeoutAlertMessage = async () => {
    timer = setTimeout(() => {
      setIsShowAlertMessage(false)
    }, 3000)
  }

  const openAlertMessage = ({ type, message }: AlertMessageObj) => {
    setAlertObj({ type, message })
    setIsShowAlertMessage(true)
  }

  const closeAlertMessage = useCallback(() => {
    clearTimeout(timer)
    setIsShowAlertMessage(false)
  }, [])

  useEffect(() => {
    if (isShownAlertMessage) {
      setTimeoutAlertMessage()
    }
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
          type={alertObj.type}
          message={alertObj.message}
          close={closeAlertMessage}
        />
      }
    </>
  )
}

export default BaseLayout