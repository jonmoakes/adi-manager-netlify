import { TOTAL_EXPENSES_WEEK_ACTION_TYPES } from "./total-expenses-week.types";

const INITIAL_STATE = {
  totalExpensesWeekEntries: [],
};

export const totalExpensesWeekReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOTAL_EXPENSES_WEEK_ACTION_TYPES.UPDATE_TOTAL_EXPENSES_WEEK_ENTRIES:
      return {
        ...state,
        totalExpensesWeekEntries: action.payload,
      };
    case TOTAL_EXPENSES_WEEK_ACTION_TYPES.CLEAR_TOTAL_EXPENSES_WEEK_ENTRIES:
      return {
        ...state,
        totalExpensesWeekEntries: [],
      };
    default:
      return state;
  }
};
