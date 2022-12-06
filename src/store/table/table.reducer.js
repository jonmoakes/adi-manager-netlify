import { TABLE_ACTION_TYPES } from "./table.types";

const INITIAL_STATE = {
  tablePageSize: 25,
};

export const tableReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TABLE_ACTION_TYPES.SET_TABLE_PAGE_SIZE:
      return {
        ...state,
        tablePageSize: action.payload,
      };

    default:
      return state;
  }
};
