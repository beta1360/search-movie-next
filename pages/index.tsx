import type { NextPage } from 'next'
import { useState, useCallback, useEffect } from 'react'
import { useRouter } from 'next/router'
import Search from '@/components/shared/Search'
import { css } from '@emotion/react'

const mainPageStyle = css`
  margin-top: 150px;
`

const Home: NextPage = () => {
  const router = useRouter()
  const [keyword, setKeyword] = useState('')

  const onChangeKeyword = useCallback((value: string) => {
    setKeyword(value)
  }, [])

  const searchMovies = useCallback((e: React.SyntheticEvent) => {
    e.preventDefault()
    router.push({ pathname: '/search', query: { keyword } })
  }, [keyword, router])

  return (
    <div
      className="main-page__wrapper"
      css={mainPageStyle}  
    >
      <Search
        onChange={onChangeKeyword}
        handleSubmit={searchMovies}
      />
    </div>
  )
}

export default Home
