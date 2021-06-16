import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CustomerFeatureState, CustomerState } from "./customer.state";


const getCustomerState = createFeatureSelector<CustomerFeatureState, CustomerState>('customer');

const getCustomersList = createSelector(
  getCustomerState,
  ({ customersList }) => customersList
);

const getLoading = createSelector(
  getCustomerState,
  ({ loading }) => loading
);

const getNotifications = createSelector(
  getCustomerState,
  ({ notifications }) => notifications
);

const getSaveComplete = createSelector(
  getCustomerState,
  ({ saveComplete }) => saveComplete
);

export const CustomerSelectors = {
  getCustomersList,
  getLoading,
  getNotifications,
  getSaveComplete,
};
