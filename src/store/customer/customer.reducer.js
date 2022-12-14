import { CUSTOMER_ACTION_TYPES } from "./customer.types";

const INITIAL_STATE = {
  subscriptionPrice: null,
  customerDetails: {},
  subscriptionData: {},
};

export const customerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CUSTOMER_ACTION_TYPES.ADD_SUBSCRIPTION_PRICE:
      return {
        ...state,
        subscriptionPrice: action.payload,
      };
    case CUSTOMER_ACTION_TYPES.CLEAR_SUBSCRIPTION_PRICE:
      return {
        ...state,
        subscriptionPrice: null,
      };
    case CUSTOMER_ACTION_TYPES.ADD_CUSTOMER_DETAILS:
      return {
        ...state,
        customerDetails: action.payload,
      };
    case CUSTOMER_ACTION_TYPES.CLEAR_CUSTOMER_DETAILS:
      return {
        ...state,
        customerDetails: {},
      };
    case CUSTOMER_ACTION_TYPES.ADD_SUBSCRIPTION_DATA:
      return {
        ...state,
        subscriptionData: action.payload,
      };

    case CUSTOMER_ACTION_TYPES.CLEAR_SUBSCRIPTION_DATA:
      return {
        ...state,
        subscriptionData: {},
      };
    default:
      return state;
  }
};
