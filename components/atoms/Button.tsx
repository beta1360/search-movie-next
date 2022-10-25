/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { StyleTypes } from '@/types/styles'

const buttonTypes = {
  primary: {
    backgroundColor: 'skyblue'
  },
  secondary: {
    backgroundColor: 'grey'
  },
  info: {
    backgroundColor: '#fff',
    color: 'grey',
    border: 'grey 1px solid'
  },
  error: {
    backgroundColor: 'red'
  },
  warn: {
    backgroundColor: 'yellow'
  },
  success: {
    backgroundColor: 'green'
  }
}

const getButtonStyle = (type: StyleTypes)=> css({
  fontSize: '1.5rem',
  padding: '10px 20px',
  border: 0,
  color: '#fff',
  backgroundColor: '#fff',
  borderRadius: '5px'
}, buttonTypes[type])

type ButtonProps = {
  label: string,
  type?: StyleTypes,
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const BaseButton: React.FC<ButtonProps> = ({
  label,
  type = 'primary',
  onClick
}) => {
  return (
    <button
      css={getButtonStyle(type)}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default BaseButton