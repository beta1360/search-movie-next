import axios from 'axios'
import { SearchParams } from '@/types/api'

const getBaseApi = () => {
  const request = axios.create({
    withCredentials: true
  })
  return request
}

const searchMovies = async (queries: SearchParams) => {
  const request = getBaseApi()
  const data = await request({ url: '/api/movie', params: queries })
  console.log(data)
}

export default searchMovies