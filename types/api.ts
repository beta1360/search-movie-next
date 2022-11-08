export type SearchParams = {
  query: string
  country?: string
  genre?: number
  yearfrom?: string
  yearto?: string
  display?: number
}

export type SearchMovieResponse = {
  display: number,
  items: Array<any>,
  lastBuildDate: string,
  start: number,
  total: number
}