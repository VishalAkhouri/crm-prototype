import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { CustomerModel } from '../models/customer.model';
import { CustomerFeatureState } from './customer.state';
import * as CustomerActions from './customer.actions';
import { CustomerSelectors } from './customer.selector';

@Injectable({
  providedIn: 'any'
})
export class CustomerStore {

  public customersList$ = this.store.pipe(
    select(CustomerSelectors.getCustomersList)
  );

  constructor(private store: Store<CustomerFeatureState>) {}

  public saveCustomer(customer: CustomerModel) {
    this.store.dispatch(CustomerActions.saveCustomer({ customer }));
  }
}
