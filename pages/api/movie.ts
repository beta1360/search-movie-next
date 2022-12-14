import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { SearchParams  } from '@/types/api'

const getBaseApi = () => {
  const request = axios.create({
    baseURL: process.env.NAVER_MOVIE_SEARCH_URL,
    headers: {
      'X-Naver-Client-Id': process.env.NAVER_CLIENT_ID,
      'X-Naver-Client-Secret': process.env.NAVER_CLIENT_SERCRET
    }
  })
  return request
}

const searchMovies = (queries: Partial<SearchParams>) => {
  const request = getBaseApi()
  return request({ method: 'get', url: '/v1/search/movie', params: queries })
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const queries = req.query
  try {
    const { data, status } = await searchMovies(queries)
    res.status(status).json(data)
  } catch(e) {
    res.status(400).json({
      display: 0,
      items: [],
      lasBuildDate: new Date(),
      start: 1,
      total: 0
    })
  }
}