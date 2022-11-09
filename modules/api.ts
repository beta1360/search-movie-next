import axios from 'axios'
import { SearchMovieResponse, SearchParams } from '@/types/api'

const getBaseApi = () => {
  const request = axios.create({
    withCredentials: true
  })
  return request
}

const searchMoviesApi = (queries: SearchParams): Promise<SearchMovieResponse> => {
  const request = getBaseApi()
  return request({ url: '/api/movie', params: queries })
}

export default searchMoviesApi