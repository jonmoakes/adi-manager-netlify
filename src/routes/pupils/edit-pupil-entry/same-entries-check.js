export const sameEntriesCheck = (updatedEntry, entry) => {
  if (
    updatedEntry.name === entry.name &&
    updatedEntry.address === entry.address &&
    updatedEntry.pickUpDropOffAddress === entry.pickUpDropOffAddress &&
    updatedEntry.emailAddress === entry.emailAddress &&
    updatedEntry.primaryPhoneNumber === entry.primaryPhoneNumber &&
    updatedEntry.secondaryPhoneNumber === entry.secondaryPhoneNumber &&
    updatedEntry.dateOfBirth === entry.dateOfBirth &&
    updatedEntry.licenceNumber === entry.licenceNumber &&
    updatedEntry.licenceExpiryDate === entry.licenceExpiryDate &&
    updatedEntry.eyesightCheckedDate === entry.eyesightCheckedDate &&
    updatedEntry.glassesRequired === entry.glassesRequired &&
    updatedEntry.medicalConditions === entry.medicalConditions &&
    updatedEntry.experienceLevel === entry.experienceLevel &&
    updatedEntry.theoryTestPassed === entry.theoryTestPassed &&
    updatedEntry.theoryTestDate === entry.theoryTestDate &&
    updatedEntry.theoryCertificateNumber === entry.theoryCertificateNumber &&
    updatedEntry.drivingTestDate === entry.drivingTestDate &&
    updatedEntry.drivingTestTime === entry.drivingTestTime &&
    updatedEntry.drivingTestLocation === entry.drivingTestLocation &&
    updatedEntry.drivingTestResult === entry.drivingTestResult
  ) {
    return true;
  } else {
    return false;
  }
};
