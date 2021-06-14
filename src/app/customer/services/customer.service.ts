import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { CustomerModel } from '../models/customer.model';

@Injectable({
  providedIn: 'any'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) {}

  public postCustomer(customer: CustomerModel) {
    return this.httpClient.post(`${environment.apiUrl}/customer/add`, customer);
  }

  public getCustomerList() {
    return this.httpClient.get(`${environment.apiUrl}/customer/list`);
  }
}
