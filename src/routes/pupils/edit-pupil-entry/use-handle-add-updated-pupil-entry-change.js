import { useState } from "react";
import { useSelector } from "react-redux";

import { selectEntry } from "../../../store/entry/entry.selector";

const useHandleUpdatedPupilEntryChange = () => {
  const entry = useSelector(selectEntry);

  const [updatedEntry, setUpdatedEntry] = useState({
    id: entry.id,
    name: entry.name,
    address: entry.address,
    pickUpDropOffAddress: entry.pickUpDropOffAddress,
    emailAddress: entry.emailAddress,
    primaryPhoneNumber: entry.primaryPhoneNumber,
    dateOfBirth: entry.dateOfBirth,
    licenceNumber: entry.licenceNumber,
    licenceExpiryDate: entry.licenceExpiryDate,
    eyesightCheckedDate: entry.eyesightCheckedDate,
    glassesRequired: entry.glassesRequired,
    medicalConditions: entry.medicalConditions,
    experienceLevel: entry.experienceLevel,
    theoryTestPassed: entry.theoryTestPassed,
    theoryTestDate: entry.theoryTestDate,
    theoryCertificateNumber: entry.theoryCertificateNumber,
    drivingTestDate: entry.drivingTestDate,
    drivingTestTime: entry.drivingTestTime,
    drivingTestLocation: entry.drivingTestLocation,
    drivingTestResult: entry.drivingTestResult,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUpdatedEntry({ ...updatedEntry, [name]: value });
  };

  return { entry, updatedEntry, handleChange };
};

export default useHandleUpdatedPupilEntryChange;
