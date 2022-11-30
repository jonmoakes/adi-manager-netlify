import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const useHandleAddPupilEntryChange = () => {
  const [entry, setEntry] = useState({
    id: uuidv4(),
    name: "",
    address: "",
    pickUpDropOffAddress: "",
    emailAddress: "",
    primaryPhoneNumber: "",
    dateOfBirth: "",
    licenceNumber: "",
    licenceExpiryDate: "",
    eyesightCheckedDate: "",
    glassesRequired: "no",
    medicalConditions: "",
    experienceLevel: "beginner",
    theoryTestPassed: "no",
    theoryTestDate: "",
    theoryCertificateNumber: "",
    drivingTestDate: "",
    drivingTestTime: "",
    drivingTestLocation: "",
    drivingTestResult: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEntry({ ...entry, [name]: value });
  };

  return { entry, handleChange };
};

export default useHandleAddPupilEntryChange;
