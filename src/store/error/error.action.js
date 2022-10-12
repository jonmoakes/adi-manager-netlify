import { ERROR_ACTION_TYPES } from "./error.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const clearErrorMessage = () =>
createAction(ERROR_ACTION_TYPES.CLEAR_ERROR_MESSAGE)

export const setErrorMessage = (payload) =>
createAction(ERROR_ACTION_TYPES.SET_ERROR_MESSAGE, payload)
