import { createSelector } from "reselect";

const selectBlockBooking = (state) => state.blockBooking;

export const selectBlockBookingEntries = createSelector(
  [selectBlockBooking],
  (blockBooking) => (blockBooking ? blockBooking.blockBookingEntries : null)
);
