import { SearchParams } from '@/types/api'
import { useRecoilValue, useRecoilState } from 'recoil'
import { searchParamsAtom } from '@/store/search'
import { isLoadingAtom } from '@/store'
import { useQuery } from '@tanstack/react-query'
import searchMoviesApi from '@/modules/api'
import { useAlertMessage } from '@/hooks/alert-message'
import { AxiosError, AxiosResponse } from 'axios'

export const useSearchMovies = () => {
  const searchParams = useRecoilValue(searchParamsAtom)
  const [isLoading,] = useRecoilState(isLoadingAtom)
  const { openAlertMessage } = useAlertMessage()

  return useQuery(
    ['SearchMovives'],
    () => searchMoviesApi(searchParams),
    {
      retry: 0,
      onSuccess: (res: AxiosResponse) => {
        const { data } = res
        console.log(data)
      },
      onError: (e) => {
        const { response } = e as unknown as AxiosError
        openAlertMessage({
          type: 'error',
          message: `(${response?.status}), ${response?.statusText}` || '에러'
        })
      }
    }
  )
}
