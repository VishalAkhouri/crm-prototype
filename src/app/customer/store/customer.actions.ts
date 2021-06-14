import { createAction } from "@ngrx/store";
import { CustomerModel } from "../models/customer.model";

export const saveCustomer = createAction(
  '[Customer] save customer',
  (payload?: { customer: CustomerModel}) => ({ payload })
);

export const saveCustomerSuccess = createAction(
  '[Customer] save customer success',
  (payload?: { customer: any}) => ({ payload })
);

export const saveCustomerFailure = createAction(
  '[Customer] save customer failure',
  (payload?: { error: Error}) => ({ payload })
);

export const listCustomers = createAction(
  '[Customer] list customers',
  (payload?: {}) => ({ payload })
);

export const listCustomersSuccess = createAction(
  '[Customer] list customer success',
  (payload?: { customers: CustomerModel[]}) => ({ payload })
);

export const listCustomersFailure = createAction(
  '[Customer] list customer failure',
  (payload?: { error: Error}) => ({ payload })
);
