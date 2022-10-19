import { createSelector } from "reselect";

const selectCustomer = (state) => state.customer;

export const selectSubscriptionPrice = createSelector(
  [selectCustomer],
  (customer) => customer.subscriptionPrice
);

export const selectCustomerDetails = createSelector(
  [selectCustomer],
  (customer) => customer.customerDetails
);

export const selectSubscriptionData = createSelector(
  [selectCustomer],
  (customer) => customer.subscriptionData
);
