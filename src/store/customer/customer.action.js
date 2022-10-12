import { CUSTOMER_ACTION_TYPES } from "./customer.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const addSubscriptionPrice = (payload) =>
  createAction(CUSTOMER_ACTION_TYPES.ADD_SUBSCRIPTION_PRICE, payload);

export const addCustomerDetails = (customerDetails) =>
  createAction(CUSTOMER_ACTION_TYPES.ADD_CUSTOMER_DETAILS, customerDetails);

export const addCustomerId = (payload) =>
  createAction(CUSTOMER_ACTION_TYPES.ADD_CUSTOMER_ID, payload);
