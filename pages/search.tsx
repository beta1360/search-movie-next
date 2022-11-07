import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { searchParamsAtom } from '@/store/search'

const SearchPage: NextPage = () => {
  const router = useRouter()
  const [searchParams, setSearchParams] = useRecoilState(searchParamsAtom)

  return (
    <div className="search-page__wrapper">
      { searchParams.query }
      { searchParams.country || '' }
    </div>
  )
}

export default SearchPage
