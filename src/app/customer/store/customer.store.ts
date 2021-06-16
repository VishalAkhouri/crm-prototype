import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { CustomerModel } from '../models/customer.model';
import { CustomerFeatureState } from './customer.state';
import * as CustomerActions from './customer.actions';
import { CustomerSelectors } from './customer.selector';
import { NotificationModel } from 'src/app/shared/models/notification.model';

@Injectable({
  providedIn: 'any'
})
export class CustomerStore {

  public customersList$ = this.store.pipe(
    select(CustomerSelectors.getCustomersList)
  );

  public loading$ = this.store.pipe(
    select(CustomerSelectors.getLoading)
  );

  public notification$ = this.store.pipe(
    select(CustomerSelectors.getNotifications)
  );

  public saveComplete$ = this.store.pipe(
    select(CustomerSelectors.getSaveComplete)
  );

  constructor(private store: Store<CustomerFeatureState>) {}

  public saveCustomer(customer: CustomerModel) {
    this.store.dispatch(CustomerActions.saveCustomer({ customer }));
  }

  public listCustomers() {
    this.store.dispatch(CustomerActions.listCustomers());
  }

  public addNotification(notification: NotificationModel) {
    this.store.dispatch(CustomerActions.addNotification({ notification }));
  }

  // clearNotifications
  public clearNotifications() {
    this.store.dispatch(CustomerActions.clearNotifications());
  }
}
