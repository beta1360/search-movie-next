import axios from 'axios'
import { SearchParams } from '@/types/api'

const getBaseApi = () => {
  const request = axios.create({
    baseURL: process.env.NAVER_MOVIE_SEARCH_URL,
    headers: {
      'X-Naver-Client-Id': process.env.NAVER_CLIENT_ID,
      'X-Naver-Client-Secret': process.env.NAVER_CLIENT_SERCRET
    },
    withCredentials: true
  })
  return request
}

const searchMovies = (queries: SearchParams) => {
  const request = getBaseApi()
  console.log(process.env)
  return request({ url: '/vi/search/movie.json', params: queries })
}

export default searchMovies