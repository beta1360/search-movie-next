import { OptionsType } from '@/types/data'
import { css } from '@emotion/react'
import React, { useCallback, useMemo } from 'react'

const selectStyle = css`
  font-size: 1.2rem;
  padding: 10px;
  border: 1px solid skyblue;
  border-radius: 5px;
  width: 150px;
`

const labelStyle = css`
  font-size: 0.9rem;
  margin-bottom: 2px;
`

const getLabel = (label: string, isRequired: boolean) => {
  const requiredSymbol = <span css={css`color: red;`}>*</span>
  return <p css={labelStyle}>{isRequired && requiredSymbol} {label}</p>
}

type SelectProps = {
  useLabel?: boolean
  label?: string
  isRequired?: boolean
  options: Array<OptionsType>
  defaultValue?: number | string
  onChange: (value: string) => void
}

const BaseSelect: React.FC<SelectProps> = ({
  useLabel = false,
  label = '',
  isRequired = false,
  options = [],
  defaultValue = (0 || options[0].id),
  onChange
}) => {
  const hasLabel = useMemo(() => label.length > 0, [label])

  const handleChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value)
  }, [onChange])

  return (
    <div>
      { useLabel && hasLabel && getLabel(label, isRequired)}
      <select
        css={selectStyle}
        defaultValue={defaultValue}
        onChange={handleChange}
      >
        {
          options.map(option => (
            <option
              key={`${label}-${option.id}`}
              value={option.id}
            >
              { option.label }
            </option>
          ))
        }
      </select>
    </div>
  )
}

export default BaseSelect