export type CountryOptionType = {
  id: number | string,
  label: string,
  code: string
}

export type GenreOptionType = {
  id: number | string,
  label: string
}

export type OptionsType = CountryOptionType | GenreOptionType