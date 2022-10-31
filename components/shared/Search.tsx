import Button from '@/components/atoms/Button'
import Input from '@/components/atoms/Input'
import { css } from '@emotion/react'
import React from 'react'

const searchStyle = css`
  display: flex;
  flex-direction: row;
  width: 100%;
`

type SearchProps = {
  defaultKeyword?: string,
  onChange: (value: string) => void
  handleSubmit: (e: React.SyntheticEvent) => void
}

const Search: React.FC<SearchProps> = ({
  defaultKeyword = '',
  onChange,
  handleSubmit
}) => {
  return (
    <form
      css={searchStyle}
      onSubmit={handleSubmit}
    >
      <Input
        defaultValue={defaultKeyword}
        onChange={onChange}
      />
      <Button
        label="검색"
        isSubmit={true}
      />
    </form>
  )
}

export default Search