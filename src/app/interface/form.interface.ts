export interface Iform {
    formTitle: string
    formControls: IFormControl[]
    saveBtnTitle?: string
    resetBtnTitle?: string
}

export interface IFormControl {
    name: string
    label: string
    value?: string
    placeholder?: string
    class?: string
    type: string
    validators: IValidator[]
    options?: IOptions[]
    radioOptions?: string[]
  }
  
  export interface IValidator {
    validatorName?: string
    required?: boolean
    message?: string
    pattern?: string
    minLength?: string
    maxLength?: string
  }

  export interface IOptions {
      id: number
      value: string
  }