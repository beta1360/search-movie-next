import { css } from '@emotion/react'
import FormLabel from '@/components/atoms/FormLabel'
import Input from '@/components/atoms/Input'
import { useState, useCallback, useMemo } from 'react'

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
  const hasLabel = useMemo(() => label.length > 0, [label])
  const [startDate, setStartDate] = useState(defaultStart)
  const [endDate, setEndDate] = useState(defaultEnd)

  const onChangeStartDate = useCallback((value: string) => {
    setStartDate(value)
    onStartChange(value)
  }, [onStartChange])

  const onChangeEndDate = useCallback((value: string) => {
    setEndDate(value)
    onEndChange(value)
  }, [onEndChange])

  return (
    <div css={dateWrapperStyle}>
      { useLabel && hasLabel && 
        <FormLabel
          isRequired={isRequired}
          label={label}
        />
      }
      <div css={dateInputWrapper}>
        <Input
          defaultValue={defaultStart}
          placeholder={startPlaceholder}
          onChange={onChangeStartDate}
        />
        &nbsp;&nbsp;~&nbsp;&nbsp;
        <Input
          defaultValue={defaultEnd}
          placeholder={endPlaceholder}
          onChange={onChangeEndDate}
        />
      </div>
    </div>
  )
}

export default BaseDate