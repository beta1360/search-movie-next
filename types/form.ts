type BaseFormType = {
  label?: string
  isRequired?: boolean
  useLabel: boolean
  type: 'input' | 'select' | 'date'
}

export interface InputPropType extends BaseFormType {
  defaultValue?: string | number,
  onChange: (value: string) => void
}

type BaseSelectOptionType = {
  id: number | string
  label: string
}

export interface SelectPropType extends BaseFormType {
  defaultValue?: string | number
  options: Array<BaseSelectOptionType>
  onChange: (value: string) => void
}

export interface DatePropType extends BaseFormType {
  defaultStart?: string | number
  defaultEnd?: string | number
  onChangeStart: (value: string) => void
  onChangeEnd: (value: string) => void
}

export type FormPropsType = InputPropType | SelectPropType | DatePropType