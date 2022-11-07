import type { NextPage } from 'next'
import { useState, useCallback, useEffect, useMemo } from 'react'
import { useRouter } from 'next/router'
import { css } from '@emotion/react'
import { useAlertMessage } from '@/hooks/alert-message'
import Search from '@/components/shared/Search'
import { FormPropsType } from '@/types/form'
import countries from '@/data/country.json'
import genres from '@/data/genre.json'

const mainPageStyle = css`
  margin-top: 150px;
`

const defaultDate = {
  start: (new Date().getFullYear() - 2).toString() || '',
  end: (new Date().getFullYear()).toString() || ''
}
const defaultExpanded = false

const Home: NextPage = () => {
  const router = useRouter()
  const [keyword, setKeyword] = useState('')
  const [isExpanded, setIsExpanded] = useState(false)
  const [country, setCountry] = useState<string>(countries[0]?.id || '')
  const [genre, setGenre] = useState<number>(genres[0]?.id || 0)
  const [yearfrom, setYearfrom] = useState(defaultDate.start)
  const [yearto, setYearto] = useState(defaultDate.end)

  const { openAlertMessage } = useAlertMessage()

  const expandedParams = useMemo(() => ({
    ...(isExpanded && {
      country,
      genre,
      yearfrom,
      yearto
    })
  }), [country, genre, yearfrom, yearto, isExpanded])

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
    router.push({
      pathname: '/search',
      query: {
        keyword,
        ...expandedParams
      }
    })
  }, [keyword, router, openAlertMessage, expandedParams])

  const onChangeCountry = useCallback((value: string) => {
    setCountry(value)
  }, [])

  const onChangeGenre = useCallback((value: string) => {
    setGenre(+value)
  }, [])

  const onChangeStartDate = useCallback((value: string) => {
    setYearfrom(value)
  }, [])

  const onChangeEndDate = useCallback((value: string) => {
    setYearto(value)
  }, [])

  const expand = useCallback((value: boolean) => {
    setIsExpanded(value)
  }, [])

  const searchExtensionFormProps: Array<FormPropsType> = [
    {
      type: 'select',
      useLabel: true,
      label: '국가',
      isRequired: false,
      options: countries,
      onChange: onChangeCountry
    },
    {
      type: 'select',
      useLabel: true,
      label: '장르',
      isRequired: false,
      options: genres,
      onChange: onChangeGenre
    },
    {
      type: 'date',
      useLabel: true,
      label: '제작 연도',
      isRequired: false,
      onChangeStart: onChangeStartDate,
      onChangeEnd: onChangeEndDate,
      defaultStart: defaultDate.start,
      defaultEnd: defaultDate.end
    }
  ]
  
  return (
    <div
      className="main-page__wrapper"
      css={mainPageStyle}  
    >
      <Search
        useExtension={true}
        expand={expand}
        defaultExpanded={defaultExpanded}
        onChange={onChangeKeyword}
        handleSubmit={searchMovies}
        extensionProp={searchExtensionFormProps}
      />
    </div>
  )
}

export default Home
