import { Component } from '@angular/core';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { CommonModule } from '@angular/common'
import { employeeInfoConfig } from './constants/employee-info.constant';
import { Iform } from './interface/form.interface'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  employeeForm = employeeInfoConfig as Iform;
}
