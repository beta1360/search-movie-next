import { css } from '@emotion/react'
import { useState, useCallback, useEffect, useMemo } from 'react'
import FormLabel from '@/components/atoms/FormLabel'

const getInputWrapperStyle = (isFocus: boolean) => css`
  display: flex;
  align-items: center;
  border: ${isFocus ? 'green' : 'skyblue'} 1px solid;
  width: 100%;
  padding: 5px 5px;
  border-radius: 5px;
  background-color: white;
`

const inputStyle = css`
  border: 0;
  font-size: 1.2rem;
  padding: 5px 5px;
  background-color: #fff;
  color: #222;
  width: 100%;
  &:focus {
    outline: none;
  }
`

const buttonStyle = css`
  border: 0;
  background: #fff;
  width: 1.5rem;
  font-size: 0.8rem;
  color: skyblue;
  padding: 0;
  cursor: pointer;
  margin-left: 8px;
`

type InputProps = {
  useLabel?: boolean
  label?: string
  isRequired?: boolean
  defaultValue?: string
  clearable?: boolean
  placeholder?: string
  onChange: (value: string) => void
}

const BaseInput: React.FC<InputProps> = ({
  useLabel = false,
  label = '',
  isRequired = false,
  defaultValue = '',
  clearable = true,
  placeholder = '',
  onChange
}) => {
  const [inputValue, setInputValue] = useState(defaultValue)
  const [isFocus, setIsFocus] = useState(false)
  const hasLabel = useMemo(() => label.length > 0, [label])

  const clearInput = () => {
    setInputValue('')
  }

  const clickClearButton = useCallback(() => {
    clearInput()
    onChange('')
  }, [onChange])

  const onFocusInput = useCallback(() => {
    setIsFocus(true)
  }, [])

  const onBlurInput = useCallback(() => {
    setIsFocus(false)
  }, [])

  const onChangeInputValue = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setInputValue(e.target.value)
    onChange(e.target.value)
  }, [onChange])

  useEffect(() => {
    setInputValue(defaultValue)
  }, [defaultValue])

  return (
    <div css={getInputWrapperStyle(isFocus)}>
      { useLabel && hasLabel && 
        <FormLabel
          isRequired={isRequired}
          label={label}
        />
      }
      <input
        type="text"
        css={inputStyle}
        value={inputValue}
        onChange={onChangeInputValue}
        onFocus={onFocusInput}
        onBlur={onBlurInput}
        placeholder={placeholder}
      />
      { clearable &&
        <button
          css={buttonStyle}
          type="button"
          onClick={clickClearButton}
        >x</button> }
    </div>
  )
}

export default BaseInput