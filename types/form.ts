type BaseFormType = {
  label?: string
  isRequired?: boolean
  useLabel: boolean
  type: 'input' | 'select' | 'date'
}

export interface InputPropType extends BaseFormType {
  defaultValue?: string | number
}

type BaseSelectOptionType = {
  id: number | string
  label: string
}

export interface SelectPropType extends BaseFormType {
  defaultValue?: string | number
  options: Array<BaseSelectOptionType>
}

export interface DatePropType extends BaseFormType {
  defaultStart?: string | number
  defaultEnd?: string | number
}

export type FormPropsType = InputPropType | SelectPropType | DatePropType