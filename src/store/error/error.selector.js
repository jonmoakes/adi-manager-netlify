import { createSelector } from "reselect";

const selectError = (state) => state.error;

export const selectErrorMessage = createSelector(
  [selectError],
  (error) => error.errorMessage
);
