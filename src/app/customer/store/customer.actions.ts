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
