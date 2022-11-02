import { css } from '@emotion/react'

const labelStyle = css`
  font-size: 1.3rem;
  margin-right: 8px;
  width: 100%;
  flex: 0 0 120px;
`

type FormLabelProps = {
  label: string
  isRequired?: boolean
}

const FormLabel: React.FC<FormLabelProps> = ({
  label,
  isRequired = false
}) => {
  const requiredSymbol = <span css={css`color: red;`}>*</span>
  return <p css={labelStyle}>{isRequired && requiredSymbol} {label}</p>
}

export default FormLabel