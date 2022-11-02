import { css } from '@emotion/react'
import FormLabel from '@/components/atoms/FormLabel'
import Input from '@/components/atoms/Input'

const dateWrapperStyle = css`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const dateInputWrapper = css`
  display: flex;
  flex-direction: row;
  align-items: center; 
`

type DateProps = {
  useLabel?: boolean
  label?: string
  isRequired?: boolean
  defaultStart?: string
  defaultEnd?: string
  startPlaceholder?: string
  endPlaceholder?: string
  onStartChange: (value: string) => void
  onEndChange: (value: string) => void
}

const BaseDate: React.FC<DateProps> = ({
  useLabel = false,
  label = '',
  isRequired = false,
  defaultStart = '',
  defaultEnd = '',
  startPlaceholder = 'Start',
  endPlaceholder = 'End',
  onStartChange,
  onEndChange
}) => {
  return (
    <div css={dateWrapperStyle}>
      <FormLabel
        isRequired={isRequired}
        label={label}
      />
      <div css={dateInputWrapper}>
        <Input
          defaultValue={defaultStart}
          onChange={() => {}}
        />
        &nbsp;&nbsp;~&nbsp;&nbsp;
        <Input
          defaultValue={defaultEnd}
          onChange={() => {}}
        />
      </div>
    </div>
  )
}

export default BaseDate