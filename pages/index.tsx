import type { NextPage } from 'next'
import { useState, useCallback } from 'react'
import { useRouter } from 'next/router'
import { css } from '@emotion/react'
import { useAlertMessage } from '@/hooks/alert-message'
import Search from '@/components/shared/Search'
import { FormPropsType } from '@/types/form'
import country from '@/data/country.json'
import genre from '@/data/genre.json'

const mainPageStyle = css`
  margin-top: 150px;
`

const searchExtensionFormProps: Array<FormPropsType> = [
  { type: 'select', useLabel: true, label: '국가', isRequired: false, options: country },
  { type: 'select', useLabel: true, label: '장르', isRequired: false, options: genre },
  { type: 'date', useLabel: true, label: '제작 연도', isRequired: false }
]

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

  return (
    <div
      className="main-page__wrapper"
      css={mainPageStyle}  
    >
      <Search
        useExtension={true}
        onChange={onChangeKeyword}
        handleSubmit={searchMovies}
        extensionProp={searchExtensionFormProps}
      />
    </div>
  )
}

export default Home
