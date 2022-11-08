import axios from 'axios'
import { SearchMovieResponse, SearchParams } from '@/types/api'

const getBaseApi = () => {
  const request = axios.create({
    withCredentials: true
  })
  return request
}

const searchMovies = async (queries: SearchParams): Promise<SearchMovieResponse> => {
  const request = getBaseApi()
  const { data } = await request({ url: '/api/movie', params: queries })
  return data
}

export default searchMovies