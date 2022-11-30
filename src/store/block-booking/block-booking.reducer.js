import { BLOCK_BOOKING_ACTION_TYPES } from "./block-booking.types";

const INITIAL_STATE = {
  blockBookingEntries: [],
};

export const blockBookingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BLOCK_BOOKING_ACTION_TYPES.UPDATE_BLOCK_BOOKING_ENTRIES:
      return {
        ...state,
        blockBookingEntries: action.payload,
      };
    case BLOCK_BOOKING_ACTION_TYPES.CLEAR_BLOCK_BOOKING_ENTRIES:
      return {
        ...state,
        blockBookingEntries: [],
      };
    default:
      return state;
  }
};
