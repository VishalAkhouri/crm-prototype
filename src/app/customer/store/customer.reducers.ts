import { Action, createReducer, on } from '@ngrx/store';

import { CustomerState, initialCustomerState } from './customer.state';
import * as CustomerActions from './customer.actions';
import { CustomerModel } from '../models/customer.model';
import { NotificationModel } from 'src/app/shared/models/notification.model';

const reducer = createReducer(
  initialCustomerState,

  on(CustomerActions.saveCustomer, (state, { payload }) => {
    return {
      ...state,
      loading: true
    }
  }),

  on(CustomerActions.saveCustomerSuccess, (state, { payload }) => {
    return {
      ...state,
      loading: false,
      saveComplete: true
    }
  }),

  on(CustomerActions.saveCustomerFailure, (state, { payload }) => {
    return {
      ...state,
      loading: false
    }
  }),

  on(CustomerActions.listCustomers, (state, { payload }) => {
    return {
      ...state,
      loading: true
    }
  }),

  on(CustomerActions.listCustomersSuccess, (state, { payload }) => {
    return {
      ...state,
      customersList: payload?.customers as CustomerModel[],
      loading: false,
    }
  }),

  on(CustomerActions.addNotification, (state, { payload }) => {
    return {
      ...state,
      notifications: [
        ...state.notifications,
        payload?.notification!
      ]
    }
  }),

  on(CustomerActions.clearNotifications, (state, { payload }) => {
    return {
      ...state,
      notifications: []
    }
  }),
);

export function CustomerReducer(state: CustomerState| undefined, action: Action): any {
  return reducer(state, action);
}
