import { EXPENSES_ACTION_TYPES } from "./expenses.types";

const INITIAL_STATE = {
  expensesEntries: [],
};

export const expensesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EXPENSES_ACTION_TYPES.UPDATE_EXPENSES_ENTRIES:
      return {
        ...state,
        expensesEntries: action.payload,
      };
    case EXPENSES_ACTION_TYPES.CLEAR_EXPENSES_ENTRIES:
      return {
        ...state,
        expensesEntries: [],
      };
    default:
      return state;
  }
};
