import { css } from '@emotion/react'

type AlertMessageTypes = 'info' | 'success' | 'warning' | 'error' | 'primary'

const alertMessageType = {
  info: {
    color: 'grey',
    backgroundColor: 'white',
    borderColor: 'grey'
  },
  success: {
    color: 'darkgreen',
    backgroundColor: 'greenyellow',
    borderColor: 'darkgreen'
  },
  warning: {
    color: 'orange',
    backgroundColor: 'yellow',
    borderColor: 'orange'
  },
  error: {
    color: 'crimson',
    backgroundColor: 'salmon',
    borderColor: 'crimson'
  },
  primary: {
    color: 'blue',
    backgroundColor: 'skyblue',
    borderColor: 'blue'
  }
}

const alertMessageStyle = css`
  position: fixed;
  top: 10px;
  transform: translateX(50%);
  max-width: 400px;
  min-width: 250px;
  width: 100%;
  border-width: 1px;
  border-style: solid;
  opacity: 0.85;
  border-radius: 5px;
  padding: 0 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const closeButtonStyle = css`
  background-color: transparent;
  outline: none;
  border: 0;
  cursor: pointer;
  font-size: 1.1rem;
`

const getAlertMessageTypeStyle = (type: AlertMessageTypes) => css({ ...alertMessageType[type] })

type AlertMessageProps = {
  type: AlertMessageTypes
  message: string
}

const AlertMessage: React.FC<AlertMessageProps> = ({
  type,
  message
}) => {
  return (
    <div css={[getAlertMessageTypeStyle(type), alertMessageStyle]}>
      <p>{ message }</p>
      <button
        css={[closeButtonStyle, css({ color: alertMessageType[type].color })]}
      >x</button>
    </div>
  )
}

export default AlertMessage