import { css } from '@emotion/react'
import { StyleTypes } from '@/types/styles'

const buttonTypes = {
  primary: {
    border: 0,
    color: '#fff',
    backgroundColor: 'skyblue'
  },
  secondary: {
    border: 0,
    color: '#fff',
    backgroundColor: 'grey'
  },
  info: {
    backgroundColor: '#fff',
    color: 'grey',
    border: 'grey 1px solid'
  },
  error: {
    border: 0,
    color: '#fff',
    backgroundColor: 'red'
  },
  warn: {
    border: 0,
    color: '#fff',
    backgroundColor: 'yellow'
  },
  success: {
    border: 0,
    color: '#fff',
    backgroundColor: 'green'
  }
}

const getButtonStyle = (type: StyleTypes)=> css({
  fontSize: '1.2rem',
  padding: '8px 12px',
  borderRadius: '5px'
}, buttonTypes[type])

type ButtonProps = {
  label: string,
  type?: StyleTypes,
  isSubmit?: Boolean,
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const BaseButton: React.FC<ButtonProps> = ({
  label,
  type = 'primary',
  isSubmit = false,
  onClick
}) => {
  return (
    <button
      css={getButtonStyle(type)}
      type={isSubmit ? 'submit' : 'button'}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default BaseButton