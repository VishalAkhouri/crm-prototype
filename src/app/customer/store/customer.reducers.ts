import { Action, createReducer, on } from '@ngrx/store';

import { CustomerState, initialCustomerState } from './customer.state';
import * as CustomerActions from './customer.actions';

const reducer = createReducer(
  initialCustomerState,
  on(CustomerActions.saveCustomerSuccess, (state, { payload }) => {
    return {
      ...state,
      customersList: [
        ...state.customersList,
        payload?.customer
      ]
    }
  })
);

export function CustomerReducer(state: CustomerState| undefined, action: Action): any {
  return reducer(state, action);
}
