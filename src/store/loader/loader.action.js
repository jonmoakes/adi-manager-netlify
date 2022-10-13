import { LOADER_ACTION_TYPES } from "./loader.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const startLoader = () =>
  createAction(LOADER_ACTION_TYPES.START_LOADER);

  export const stopLoader = () =>
  createAction(LOADER_ACTION_TYPES.STOP_LOADER);