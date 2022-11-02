import type { NextPage } from 'next'
import { useState, useCallback } from 'react'
import { useRouter } from 'next/router'
import { css } from '@emotion/react'
import { useAlertMessage } from '@/hooks/alert-message'
import Search from '@/components/shared/Search'
import Select from '@/components/atoms/Select'
import country from '@/data/country.json'

const mainPageStyle = css`
  margin-top: 150px;
`

const Home: NextPage = () => {
  const router = useRouter()
  const [keyword, setKeyword] = useState('')
  const { openAlertMessage } = useAlertMessage()

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

  const onChangeSelect = useCallback((value: string) => {
    console.log(value)
  }, [])

  return (
    <div
      className="main-page__wrapper"
      css={mainPageStyle}  
    >
      <Search
        useExtension={true}
        onChange={onChangeKeyword}
        handleSubmit={searchMovies}
      />
    </div>
  )
}

export default Home
