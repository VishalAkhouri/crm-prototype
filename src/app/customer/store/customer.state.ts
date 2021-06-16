import { NotificationModel } from "src/app/shared/models/notification.model";
import { CustomerModel } from "../models/customer.model";

export interface CustomerState {
  customersList: CustomerModel[];
  loading: boolean;
  notifications: NotificationModel[],
  saveComplete: boolean
}

export interface CustomerFeatureState {
  customer: CustomerState
}

export const initialCustomerState: CustomerState = {
  customersList: [],
  loading: false,
  notifications: [],
  saveComplete: false
}

export const initialCustomerFeatureState: CustomerFeatureState = {
  customer: initialCustomerState
}
