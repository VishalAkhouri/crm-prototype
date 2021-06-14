import { CustomerModel } from "../models/customer.model";

export interface CustomerState {
  customersList: CustomerModel[]
}

export interface CustomerFeatureState {
  customer: CustomerState
}

export const initialCustomerState: CustomerState = {
  customersList: []
}

export const initialCustomerFeatureState: CustomerFeatureState = {
  customer: initialCustomerState
}
