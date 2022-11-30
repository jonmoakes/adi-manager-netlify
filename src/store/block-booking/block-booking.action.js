import { BLOCK_BOOKING_ACTION_TYPES } from "./block-booking.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const updateBlockBookingEntries = (payload) =>
  createAction(
    BLOCK_BOOKING_ACTION_TYPES.UPDATE_BLOCK_BOOKING_ENTRIES,
    payload
  );

export const clearBlockBookingEntries = () =>
  createAction(BLOCK_BOOKING_ACTION_TYPES.CLEAR_BLOCK_BOOKING_ENTRIES);
