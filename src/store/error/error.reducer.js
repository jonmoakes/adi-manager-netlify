import { ERROR_ACTION_TYPES } from "./error.types";

const INITIAL_STATE = {
  errorMessage: "",
};

export const errorReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ERROR_ACTION_TYPES.SET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.payload,
      };
    case ERROR_ACTION_TYPES.CLEAR_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: "",
      };
    default:
      return state;
  }
};

