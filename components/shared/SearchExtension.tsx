
import { useState, useCallback } from 'react'
import { css } from '@emotion/react'
import Input from '@/components/atoms/Input'
import Select from '@/components/atoms/Select'
import Date from '@/components/atoms/Date'
import { DatePropType, FormPropsType, InputPropType, SelectPropType } from '@/types/form'

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
  gap: 10px 30px;
`

type SearchExtensionProps = {
  prop: Array<FormPropsType>
}

const SearchExtension: React.FC<SearchExtensionProps> = ({
  prop
}) => {
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
          {
            prop.map((item) => {
              if (item.type === 'input') {
                const currentItem = item as InputPropType
                return (
                  <Input
                    key={`${currentItem.type}-${currentItem.label}`}
                    useLabel={currentItem.useLabel}
                    isRequired={currentItem.isRequired}
                    label={currentItem.label}
                    onChange={() => {}}
                  />
                )
              } else if (item.type === 'select') {
                const currentItem = item as SelectPropType
                return (
                  <Select
                    key={`${currentItem.type}-${currentItem.label}`}
                    useLabel={currentItem.useLabel}
                    isRequired={currentItem.isRequired}
                    options={currentItem.options}
                    label={currentItem.label}
                    onChange={() => {}}
                  />
                )
              } else if (item.type === 'date') {
                const currentItem = item as DatePropType
                return (
                  <Date
                  key={`${currentItem.type}-${currentItem.label}`}
                    useLabel={currentItem.useLabel}
                    isRequired={currentItem.isRequired}
                    label={currentItem.label}
                    defaultStart={currentItem.defaultStart as string}
                    defaultEnd={currentItem.defaultEnd as string}
                    onStartChange={() => {}}
                    onEndChange={() => {}}
                  />
                )
              }
            })
          }
        </article>
      }
    </section>
  )
}

export default SearchExtension