import { atom } from 'recoil'
import { AlertMessageTypes } from '@/types/styles'

type AlertModalContext = {
  shown: boolean,
  data: {
    type: AlertMessageTypes
    message: string
  }
}

export const alertMessageContextAtom = atom<AlertModalContext>({
  key: 'atom/alertMessageContext',
  default: {
    shown: false,
    data: {
      type: 'info',
      message: ''
    }
  }
})
