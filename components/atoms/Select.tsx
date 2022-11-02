import { OptionsType } from '@/types/data'
import React, { useCallback } from 'react'

type SelectProps = {
  label: string,
  options: Array<OptionsType>,
  defaultValue?: number | string,
  onChange: (value: string) => void
}

const BaseSelect: React.FC<SelectProps> = ({
  label,
  options = [],
  defaultValue = (0 || options[0].id),
  onChange
}) => {
  const handleChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value)
  }, [onChange])

  return (
    <select
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
  )
}

export default BaseSelect