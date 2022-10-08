import { TABLE_ACTION_TYPES } from "./table.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const updateOrders = (payload) => {
  return createAction(TABLE_ACTION_TYPES.UPDATE_ORDERS, payload);
};

export const updateUserOrders = (payload) => {
  return createAction(TABLE_ACTION_TYPES.UPDATE_USER_ORDERS, payload);
};

export const setTableErrorMessage = (payload) => {
  return createAction(TABLE_ACTION_TYPES.SET_TABLE_ERROR_MESSAGE, payload);
};
