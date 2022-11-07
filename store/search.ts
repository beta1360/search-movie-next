import { atom } from 'recoil'
import { SearchParams } from '@/types/api'

export const searchParamsAtom = atom<SearchParams>({
  key: 'atom/searchParams',
  default: {
    query: ''
  }
})