import { useState } from 'react'
import { css } from '@emotion/react'
import { useCallback } from 'react'

const getInputWrapperStyle = (isFocus: boolean) => css`
  display: flex;
  align-items: center;
  border: skyblue ${isFocus ? 2 : 1}px solid;
  width: max-content;
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
  const [isFocus, setIsFocus] = useState(false)

  const clearInput = useCallback(() => {
    setValue('')
  }, [])

  const onFocusInput = useCallback(() => {
    setIsFocus(true)
  }, [])

  const onBlurInput = useCallback(() => {
    setIsFocus(false)
  }, [])

  return (
    <div css={getInputWrapperStyle(isFocus)}>
      <input
        type="text"
        css={inputStyle}
        defaultValue={value}
        onChange={onChange}
        onFocus={onFocusInput}
        onBlur={onBlurInput}
      />
      { clearable &&
        <button
          css={buttonStyle}
          onClick={clearInput}
        >x</button> }
    </div>
  )
}

export default BaseInput