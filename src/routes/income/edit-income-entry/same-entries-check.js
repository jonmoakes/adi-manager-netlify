export const sameEntriesCheck = (updatedEntry, entry) => {
  if (
    updatedEntry.date === entry.date &&
    updatedEntry.name === entry.name &&
    updatedEntry.incomeReceived === entry.incomeReceived &&
    updatedEntry.blockBooking === entry.blockBooking &&
    updatedEntry.paymentMethod === entry.paymentMethod
  ) {
    return true;
  } else {
    return false;
  }
};
