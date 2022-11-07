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
  placeholder?: string
  useExtension?: boolean
  defaultExpanded?: boolean
  extensionProp?: Array<FormPropsType>
  onChange: (value: string) => void
  handleSubmit: (e: React.SyntheticEvent) => void,
  expand?: (value: boolean) => void
}

const Search: React.FC<SearchProps> = ({
  defaultKeyword = '',
  placeholder = '',
  useExtension = false,
  extensionProp = [],
  defaultExpanded = false,
  onChange,
  handleSubmit,
  expand = (value: boolean) => {}
}) => {
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
          defaultExpanded={defaultExpanded}
          expand={expand}
        />
      }
    </form>
  )
}

export default Search