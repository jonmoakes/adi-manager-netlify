import { LOADER_ACTION_TYPES } from "./loader.types";

const INITIAL_STATE = {
  isLoading: false,
};

export const loaderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOADER_ACTION_TYPES.START_LOADER:
      return {
        ...state,
        isLoading: true,
      };
    case LOADER_ACTION_TYPES.STOP_LOADER:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default loaderReducer;
