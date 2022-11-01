import { AlertMessageTypes } from '@/types/styles'
import { useSetRecoilState, useResetRecoilState } from 'recoil'
import { alertMessageContextAtom } from '@/store/modal'

export function useAlertMessage () {
  const setAlertMessageContext = useSetRecoilState(alertMessageContextAtom)
  const resetAlertMessageContext = useResetRecoilState(alertMessageContextAtom)
  const AUTO_REMOVE_TIME = 3000
  let timer = null

  const openAlertMessage = ({ type, message }: { type: AlertMessageTypes, message: string }) => {
    setAlertMessageContext({
      shown: true,
      data: { type, message }
    })
    timer = setTimeout(() => {
      closeAlertMessage()
    }, AUTO_REMOVE_TIME)
  }

  const closeAlertMessage = () => {
    timer = null
    resetAlertMessageContext()
  }

  return { openAlertMessage, closeAlertMessage }
}