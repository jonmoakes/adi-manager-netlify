import { ENTRY_ACTION_TYPES } from "./entry.types";

const INITIAL_STATE = {
  entry: null,
};

const entryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ENTRY_ACTION_TYPES.ADD_ENTRY:
      return {
        ...state,
        entry: action.payload,
      };
    case ENTRY_ACTION_TYPES.CLEAR_ENTRY:
      return {
        ...state,
        entry: null,
      };
    default:
      return state;
  }
};

export default entryReducer;
