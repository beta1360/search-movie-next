import type { ReactElement } from 'react'
import { useState, useCallback } from 'react'
import TopLayout from "@/components/layouts/Top"
import { useRouter } from 'next/router'

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

  return (
    <>
      <TopLayout
        isMainPage={false}
        onChange={onChangeKeyword}
        handleSubmit={searchMovies}
      />
      { children }
    </>
  )
}

export default BaseLayout