import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Iform, IValidator, IFormControl } from '../interface/form.interface';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
})
export class DynamicFormComponent implements OnInit {

  @Input() form !: Iform;
  fb = inject(FormBuilder);
  dynamicFormGroup : FormGroup = this.fb.group({}, {updateOn: 'submit'});

  ngOnInit(): void {
      // form builder on load
      if(this.form?.formControls){
        let formGroup: any = {};
        this.form.formControls.forEach((control: IFormControl) => {
          let controlValidators: any = [];
          if(control.validators){
            control.validators.forEach((val: IValidator) => {
              if(val.validatorName === 'required') controlValidators.push(Validators.required)
              if(val.validatorName === 'pattern') controlValidators.push(Validators.pattern)
            });
          }
          formGroup[control.name] = [control.value || '', controlValidators]
        });
        this.dynamicFormGroup = this.fb.group(formGroup)
      }
  }

  //submit form values to an API
  onSubmit(){
    console.log(this.dynamicFormGroup.value);
  }

  //resets the form values
  resetForm(){
    this.dynamicFormGroup.reset();
  }

  //validation error notification
  getValidationError(control : IFormControl) : string{
    const myFormControl = this.dynamicFormGroup.get(control.name);
    let errorMessage = ''
    control.validators.forEach(val => {
      if(myFormControl?.hasError(val.validatorName as string)){
        errorMessage = val.message as string;
      }
    });
    return errorMessage
  }
}
