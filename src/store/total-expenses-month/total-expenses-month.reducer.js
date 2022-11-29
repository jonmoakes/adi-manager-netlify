import { TOTAL_EXPENSES_MONTH_ACTION_TYPES } from "./total-expenses-month.types";

const INITIAL_STATE = {
  totalExpensesMonthEntries: [],
};

export const totalExpensesMonthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOTAL_EXPENSES_MONTH_ACTION_TYPES.UPDATE_TOTAL_EXPENSES_MONTH_ENTRIES:
      return {
        ...state,
        totalExpensesMonthEntries: action.payload,
      };
    case TOTAL_EXPENSES_MONTH_ACTION_TYPES.CLEAR_TOTAL_EXPENSES_MONTH_ENTRIES:
      return {
        ...state,
        totalExpensesMonthEntries: [],
      };
    default:
      return state;
  }
};
