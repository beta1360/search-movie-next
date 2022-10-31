import { css } from '@emotion/react'
import { useState, useCallback } from 'react'

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
  defaultValue: string
  clearable?: boolean
  placeholder?: string
  onChange: (value: string) => void
}

const BaseInput: React.FC<InputProps> = ({
  defaultValue = '',
  clearable = true,
  placeholder = '',
  onChange
}) => {
  const [inputValue, setInputValue] = useState(defaultValue)
  const [isFocus, setIsFocus] = useState(false)

  const clearInput = () => {
    setInputValue('')
  }

  const clickClearButton = useCallback(() => {
    clearInput()
  }, [])

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

  return (
    <div css={getInputWrapperStyle(isFocus)}>
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