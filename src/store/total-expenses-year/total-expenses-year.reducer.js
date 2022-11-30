import { TOTAL_EXPENSES_YEAR_ACTION_TYPES } from "./total-expenses-year.types";

const INITIAL_STATE = {
  totalExpensesYearEntries: [],
};

export const totalExpensesYearReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOTAL_EXPENSES_YEAR_ACTION_TYPES.UPDATE_TOTAL_EXPENSES_YEAR_ENTRIES:
      return {
        ...state,
        totalExpensesYearEntries: action.payload,
      };
    case TOTAL_EXPENSES_YEAR_ACTION_TYPES.CLEAR_TOTAL_EXPENSES_YEAR_ENTRIES:
      return {
        ...state,
        totalExpensesYearEntries: [],
      };
    default:
      return state;
  }
};
