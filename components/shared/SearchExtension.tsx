
import { useState, useCallback } from 'react'
import { css } from '@emotion/react'
import Select from '@/components/atoms/Select'
import country from '@/data/country.json'

const expandButtonStyle = css`
  background-color: transparent;
  width: 100%;
  outline: none;
  border: 0;
  color: grey;
  cursor: pointer;
  margin-bottom: 8px;
`

const expanedFormsLayoutStyle = css`
  display: grid;
  grid-template-columns: 50% 50%;
`

const SearchExtension: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true)

  const toggleDetailSearch = useCallback(() => {
    setIsExpanded(!isExpanded)
  }, [isExpanded])

  return (
    <section>
      <button
        type="button"
        css={expandButtonStyle}
        onClick={toggleDetailSearch}
      >
        { isExpanded ? '접기 ▲' : '상세 검색 ▼' }
      </button>
      { isExpanded && 
        <article css={expanedFormsLayoutStyle}>
          <Select
            useLabel={true}
            isRequired={true}
            options={country}
            label="국가"
            onChange={() => {}}
          />
          <Select
            useLabel={true}
            isRequired={true}
            options={country}
            label="장르"
            onChange={() => {}}
          />
        </article>
      }
    </section>
  )
}

export default SearchExtension