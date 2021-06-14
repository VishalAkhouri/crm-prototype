import { CustomerModel } from "../models/customer.model";

export interface CustomerState {
  customersList: CustomerModel[];
  loading: boolean;
}

export interface CustomerFeatureState {
  customer: CustomerState
}

export const initialCustomerState: CustomerState = {
  customersList: [],
  loading: false
}

export const initialCustomerFeatureState: CustomerFeatureState = {
  customer: initialCustomerState
}
