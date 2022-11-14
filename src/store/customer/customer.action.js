import { CUSTOMER_ACTION_TYPES } from "./customer.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const addSubscriptionPrice = (payload) =>
  createAction(CUSTOMER_ACTION_TYPES.ADD_SUBSCRIPTION_PRICE, payload);

export const clearSubscriptionPrice = () =>
  createAction(CUSTOMER_ACTION_TYPES.CLEAR_SUBSCRIPTION_PRICE);

export const addCustomerDetails = (payload) =>
  createAction(CUSTOMER_ACTION_TYPES.ADD_CUSTOMER_DETAILS, payload);

export const clearCustomerDetails = () =>
  createAction(CUSTOMER_ACTION_TYPES.CLEAR_CUSTOMER_DETAILS);

export const addSubscriptionData = (payload) =>
  createAction(CUSTOMER_ACTION_TYPES.ADD_SUBSCRIPTION_DATA, payload);

export const clearSubscriptionData = (payload) =>
  createAction(CUSTOMER_ACTION_TYPES.CLEAR_SUBSCRIPTION_DATA, payload);
