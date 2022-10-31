import Button from '@/components/atoms/Button'
import Input from '@/components/atoms/Input'
import { css } from '@emotion/react'
import React, { useState, useCallback } from 'react'

const searchStyle = css`
  display: flex;
  flex-direction: row;
  width: max-content;
`

type SearchProps = {
  defaultKeyword?: string
}

const Search: React.FC<SearchProps> = ({
  defaultKeyword = ''
}) => {
  const [keyword, setKeyword] = useState(defaultKeyword)

  const onChange = useCallback((value: string) => {
    console.log(value)
    setKeyword(value)
  }, [])

  const handleSubmit = useCallback((e: React.SyntheticEvent) => {
    e.preventDefault()
    console.log('form', keyword)
  }, [keyword])

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