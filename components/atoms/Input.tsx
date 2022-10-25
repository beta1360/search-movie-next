import { useState } from 'react'
import { css } from '@emotion/react'
import { useCallback } from 'react'

type InputProps = {
  defaultInput?: string,
  clearable?: boolean,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const BaseInput: React.FC<InputProps> = ({
  defaultInput = '',
  clearable = true,
  onChange
}) => {
  const [value, setValue] = useState(defaultInput)

  const clearInput = useCallback(() => {
    setValue('')
  }, [])

  return (
    <div>
      <input
        type="text"
        defaultValue={value}
        onChange={onChange}
      />
      { clearable && <button onClick={clearInput}>x</button> }
    </div>
  )
}

export default BaseInput