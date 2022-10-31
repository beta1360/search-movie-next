import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const SearchPage: NextPage = () => {
  const router = useRouter()
  const { keyword = '' } = router.query

  return (
    <div className="search-page__wrapper">
      { keyword }
    </div>
  )
}

export default SearchPage
