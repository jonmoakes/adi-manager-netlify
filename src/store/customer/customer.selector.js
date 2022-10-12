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

export const selectCustomerId = createSelector(
  [selectCustomer],
  (customer) => customer.customerId
);

export const selectLoader = createSelector(
  [selectCustomer],
  (customer) => customer.loader
);
