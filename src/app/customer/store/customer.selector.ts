import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CustomerFeatureState, CustomerState } from "./customer.state";


const getCustomerState = createFeatureSelector<CustomerFeatureState, CustomerState>('customer');

const getCustomersList = createSelector(
  getCustomerState,
  ({ customersList }) => customersList
);

export const CustomerSelectors = {
  getCustomersList
};
