import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import moment from 'moment';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { CustomerModel } from '../models/customer.model';
import { CustomerStore } from '../store/customer.store';
import CustomerFormFieldsConfig from './config/form-fields.config';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit, OnDestroy {
  public customerForm: FormGroup;
  public customerFormFieldsConfig = CustomerFormFieldsConfig;
  public subscription = new Subscription();
  public saveComplete$ = this.customerStore.saveComplete$;

  public dateFormatRegex = '^[0-9]{2}[\/][0-9]{2}[\/][0-9]{4}$';

  public isSubmitted = false;

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
    this.subscription.add(this.saveComplete$.pipe(
      filter(Boolean)
    ).subscribe(saveComplete => {
      if (saveComplete && this.customerForm) {
        this.customerForm.reset();
        this.isSubmitted = false;
      }
    }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  public isFormControlInvalid(formControlName: string) {
    return this.customerForm.controls[formControlName].invalid &&
      (this.customerForm.controls[formControlName].dirty || this.customerForm.controls[formControlName].touched)
  }

  public getFormValidationErrors(formControlName: string) {
    return this.customerForm.controls[formControlName]?.errors;
  }

  public onSubmit() {
    this.isSubmitted = true;
    if (this.customerForm.valid) {
      const formValues = this.customerForm.value as CustomerModel;
      const data: CustomerModel = this.createCustomerModel(formValues);

      this.customerStore.saveCustomer(data);
    } else {
      console.error('Form validation errors!');
    }
  }

  private createCustomerModel(formValues: any): CustomerModel {
    const firstName = formValues[this.customerFormFieldsConfig.firstName.name];
    const lastName = formValues[this.customerFormFieldsConfig.lastName.name];
    const dob = formValues[this.customerFormFieldsConfig.dob.name];

    const customerCode = this.generateCustomerCode(firstName, lastName, dob);
    return {
      [this.customerFormFieldsConfig.firstName.name]: firstName,
      [this.customerFormFieldsConfig.lastName.name]: lastName,
      [this.customerFormFieldsConfig.dob.name]: dob,
      [this.customerFormFieldsConfig.email.name]: formValues[this.customerFormFieldsConfig.email.name],
      [this.customerFormFieldsConfig.phone.name]: formValues[this.customerFormFieldsConfig.phone.name],
      [this.customerFormFieldsConfig.address.name]: formValues[this.customerFormFieldsConfig.address.name],
      [this.customerFormFieldsConfig.firstName.name]: formValues[this.customerFormFieldsConfig.firstName.name],
      [this.customerFormFieldsConfig.fullName.name]: `${firstName} ${lastName}`,
      [this.customerFormFieldsConfig.customerCode.name]: customerCode,
    }
  }

  private generateCustomerCode(firstName: string, lastName: string, dob: string) {
    return `${firstName.toLowerCase()}${lastName.toLowerCase()}${moment(dob).format('YYYYMMDD')}`;
  }
}
