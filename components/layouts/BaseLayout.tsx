import { ReactElement } from 'react'
import { useState, useCallback } from 'react'
import { useRouter } from 'next/router'
import TopLayout from "@/components/layouts/Top"
import Footer from "@/components/layouts/Footer"

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
      { children }
      <Footer />
    </>
  )
}

export default BaseLayout