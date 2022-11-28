import { INCOME_ACTION_TYPES } from "./income.types";

const INITIAL_STATE = {
  incomeEntries: [],
};

export const incomeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCOME_ACTION_TYPES.UPDATE_INCOME_ENTRIES:
      return {
        ...state,
        incomeEntries: action.payload,
      };
    case INCOME_ACTION_TYPES.CLEAR_INCOME_ENTRIES:
      return {
        ...state,
        incomeEntries: [],
      };
    default:
      return state;
  }
};
