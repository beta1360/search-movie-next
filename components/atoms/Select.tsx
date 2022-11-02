import { OptionsType } from '@/types/data'

type SelectProps = {
  label: string,
  options: Array<OptionsType>,
  defaultValue: number | string
}

const BaseSelect: React.FC<SelectProps> = ({
  label,
  options = [],
  defaultValue = 0
}) => {
  return (
    <select>
      {
        options.map(option => (
          <option
            key={`${label}-${option.id}`}
            value={option.id}
            selected={defaultValue === option.id}
          >
            { option.label }
          </option>
        ))
      }
    </select>
  )
}

export default BaseSelect