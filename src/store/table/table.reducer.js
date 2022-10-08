import { TABLE_ACTION_TYPES } from "./table.types";

const INITIAL_STATE = {
  orders: [],
  userOrders: [],
  tableErrorMessage: "",
};

export const tableReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case TABLE_ACTION_TYPES.UPDATE_ORDERS:
      return {
        ...state,
        orders: payload,
      };
    case TABLE_ACTION_TYPES.UPDATE_USER_ORDERS:
      return {
        ...state,
        userOrders: payload,
      };
    case TABLE_ACTION_TYPES.SET_TABLE_ERROR_MESSAGE:
      return {
        ...state,
        tableErrorMessage: payload,
      };
    default:
      return state;
  }
};
