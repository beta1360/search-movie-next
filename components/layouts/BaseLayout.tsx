import type { ReactElement } from 'react'
import { useState, useCallback } from 'react'
import TopLayout from "@/components/layouts/Top"

const BaseLayout = ({ children }: { children: ReactElement }) => {
  const [keyword, setKeyword] = useState('')

  const onChangeKeyword = useCallback((value: string) => {
    setKeyword(value)
  }, [])

  const searchMovies = useCallback((e: React.SyntheticEvent) => {
    e.preventDefault()
    console.log(keyword)
  }, [keyword])

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