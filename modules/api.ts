import axios from 'axios'
import { SearchParams } from '@/types/api'

const axiosInstance = axios.create({
  baseURL: process.env.NAVER_MOVIE_SEARCH_URL,
  headers: {
    'X-Naver-Client-Id': process.env.NAVER_CLIENT_ID,
    'X-Naver-Client-Secret': process.env.NAVER_CLIENT_SERCRET
  }
})

const searchMovies = (queries: SearchParams) => {
  const encodedQueries = Object.entries(queries)
    .filter(([, value]) => value)
    .map((key, value) => `${key}=${encodeURIComponent(value)}`).join('&')
  return axiosInstance.get(`?${encodedQueries}`)
}

export default searchMovies