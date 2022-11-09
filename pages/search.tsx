import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { searchParamsAtom } from '@/store/search'
import { useSearchMovies } from '@/hooks/search-movies'
import { useEffect } from 'react'

const SearchPage: NextPage = () => {
  const router = useRouter()
  const [searchParams, setSearchParams] = useRecoilState(searchParamsAtom)
  const { status, data } = useSearchMovies()

  useEffect(() => {
    console.log(status, data)
  }, [status, data])

  return (
    <div className="search-page__wrapper">
      { searchParams.query }
      { searchParams.country || '' }
    </div>
  )
}

export default SearchPage
