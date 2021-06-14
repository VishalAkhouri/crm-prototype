import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerModel } from '../models/customer.model';
import { CustomerStore } from '../store/customer.store';
import CustomerFormFieldsConfig from './config/form-fields.config';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {
  public customerForm: FormGroup;
  public customerFormFieldsConfig = CustomerFormFieldsConfig

  public dateFormatRegex = '^[0-9]{2}[\/][0-9]{2}[\/][0-9]{4}$';

  constructor(
    private formBuilder: FormBuilder,
    private customerStore: CustomerStore
  ) {
    this.customerForm = this.formBuilder.group({
      [this.customerFormFieldsConfig.firstName.name]: this.formBuilder.control('', [
        Validators.required
      ]),
      [this.customerFormFieldsConfig.lastName.name]: this.formBuilder.control('', [
        Validators.required
      ]),
      [this.customerFormFieldsConfig.dob.name]: this.formBuilder.control('', [
        Validators.required, Validators.pattern(this.dateFormatRegex)
      ]),
      [this.customerFormFieldsConfig.email.name]: this.formBuilder.control('', [
        Validators.required, Validators.email
      ]),
      [this.customerFormFieldsConfig.phone.name]: this.formBuilder.control('', [
        Validators.required
      ]),
      [this.customerFormFieldsConfig.address.name]: this.formBuilder.control('', [
        Validators.required
      ]),
    });
  }

  ngOnInit(): void {
  }

  public isFormControlInvalid(formControlName: string) {
    return this.customerForm.controls[formControlName].invalid &&
      (this.customerForm.controls[formControlName].dirty || this.customerForm.controls[formControlName].touched)
  }

  public getFormValidationErrors(formControlName: string) {
    return this.customerForm.controls[formControlName]?.errors;
  }

  public onSubmit() {
    if (this.customerForm.valid) {
      const formValues = this.customerForm.value as CustomerModel;
      const data: CustomerModel = this.createCustomerModel(formValues);

      this.customerStore.saveCustomer(data);
    } else {
      console.error('Form validation errors!');
    }
  }

  private createCustomerModel(formValues: any) {
    const customerCode = this.generateCustomerCode();
    return {
      [this.customerFormFieldsConfig.firstName.name]: formValues[this.customerFormFieldsConfig.firstName.name],
      [this.customerFormFieldsConfig.lastName.name]: formValues[this.customerFormFieldsConfig.lastName.name],
      [this.customerFormFieldsConfig.dob.name]: formValues[this.customerFormFieldsConfig.dob.name],
      [this.customerFormFieldsConfig.email.name]: formValues[this.customerFormFieldsConfig.email.name],
      [this.customerFormFieldsConfig.phone.name]: formValues[this.customerFormFieldsConfig.phone.name],
      [this.customerFormFieldsConfig.address.name]: formValues[this.customerFormFieldsConfig.address.name],
      [this.customerFormFieldsConfig.firstName.name]: formValues[this.customerFormFieldsConfig.firstName.name],
    }
  }

  private generateCustomerCode() {

  }
}
