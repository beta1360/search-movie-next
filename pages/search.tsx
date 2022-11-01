import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useMemo } from 'react'

const SearchPage: NextPage = () => {
  const router = useRouter()
  const keyword = useMemo(() => (router.query?.keyword || '') as string, [router.query.keyword])

  return (
    <div className="search-page__wrapper">
      { keyword }
    </div>
  )
}

export default SearchPage
