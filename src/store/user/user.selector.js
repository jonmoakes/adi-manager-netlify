import { createSelector } from "reselect";

const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector([selectUser], (user) =>
  user ? user.currentUser : null
);
export const selectIsSignInLoading = createSelector(
  [selectUser],
  (user) => user.isLoading
);

export const selectUserError = createSelector(
  [selectUser],
  (user) => user.error
);
