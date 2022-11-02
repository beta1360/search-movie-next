import { css } from '@emotion/react'
import { useCallback, useState } from 'react'
import { FormPropsType } from '@/types/form'
import Button from '@/components/atoms/Button'
import Input from '@/components/atoms/Input'
import SearchExtension from '@/components/shared/SearchExtension'

const baseSearchStyle = css`
  display: flex;
  flex-direction: row;
  width: 100%;
`

type SearchProps = {
  defaultKeyword?: string
  placeholder?: string,
  useExtension?: boolean,
  extensionProp?: Array<FormPropsType>
  onChange: (value: string) => void
  handleSubmit: (e: React.SyntheticEvent) => void
}

const Search: React.FC<SearchProps> = ({
  defaultKeyword = '',
  placeholder = '',
  useExtension = false,
  extensionProp = [],
  onChange,
  handleSubmit
}) => {
  console.log('eb', extensionProp)

  return (
    <form onSubmit={handleSubmit}>
      <section
        css={baseSearchStyle}
      >
        <Input
          placeholder={placeholder}
          defaultValue={defaultKeyword}
          onChange={onChange}
        />
        <Button
          label="검색"
          isSubmit={true}
        />
      </section>
      { useExtension &&
        <SearchExtension
          prop={extensionProp}
        />
      }
    </form>
  )
}

export default Search