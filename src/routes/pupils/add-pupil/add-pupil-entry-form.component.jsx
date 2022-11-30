import {
  Form,
  Label,
  StyledInput,
  StyledTextArea,
  StyledSelect,
  CapitalizedInput,
  LowercasedInput,
  UppercasedInput,
} from "../../../styles/form/form.styles";
import { HighlightText } from "../../../styles/span/span.styles";

import {
  ifDifferentToHomeAddressPlaceholder,
  pupilEmailPlaceholder,
  infiniteSpacePlaceholder,
  drivingTestResultPlaceholder,
} from "../../../strings/strings";

const AddPupilEntryForm = ({ theoryTestPassed, handleChange }) => (
  <Form>
    <Label>
      <HighlightText>*</HighlightText> Pupil Name:
    </Label>
    <CapitalizedInput type="text" name="name" onChange={handleChange} />

    <Label>Address:</Label>
    <CapitalizedInput type="text" name="address" onChange={handleChange} />

    <Label>Pick Up / Drop Off Address:</Label>
    <CapitalizedInput
      type="text"
      name="pickUpDropOffAddress"
      onChange={handleChange}
      placeholder={ifDifferentToHomeAddressPlaceholder}
    />

    <Label>Email Address:</Label>
    <LowercasedInput
      className="email"
      type="email"
      name="emailAddress"
      onChange={handleChange}
      placeholder={pupilEmailPlaceholder}
    />

    <Label>Phone Number:</Label>
    <StyledInput
      type="number"
      name="primaryPhoneNumber"
      onChange={handleChange}
    />

    <Label>Date Of Birth:</Label>
    <StyledInput
      className="date-picker"
      type="date"
      name="dateOfBirth"
      onChange={handleChange}
    />

    <Label>Driving Licence Number:</Label>
    <UppercasedInput type="text" name="licenceNumber" onChange={handleChange} />

    <Label>Licence Expiry Date:</Label>
    <StyledInput
      className="date-picker"
      type="date"
      name="licenceExpiryDate"
      onChange={handleChange}
    />

    <Label>Eyesight Checked On:</Label>
    <StyledInput
      className="date-picker"
      type="date"
      name="eyesightCheckedDate"
      onChange={handleChange}
    />

    <Label>Glasses Required?</Label>
    <StyledSelect name="glassesRequired" onChange={handleChange}>
      <option value="no">No</option>
      <option value="yes">Yes</option>
    </StyledSelect>

    <Label>Medical Conditions:</Label>
    <StyledTextArea
      type="text"
      name="medicalConditions"
      onChange={handleChange}
      placeholder={infiniteSpacePlaceholder}
    />

    <Label>Experience Level:</Label>
    <StyledSelect name="experienceLevel" onChange={handleChange}>
      <option value="beginner">Beginner</option>
      <option value="part trained">Part Trained</option>
      <option value="trained">Trained</option>
      <option value="full licence holder">Full Licence Holder</option>
    </StyledSelect>

    <Label>Theory Test Passed? ( Yes Displays More Options ):</Label>
    <StyledSelect name="theoryTestPassed" onChange={handleChange}>
      <option value="no">No</option>
      <option value="yes">Yes</option>
    </StyledSelect>

    <Label>Theory Test Date:</Label>
    <StyledInput
      className="date-picker"
      type="date"
      name="theoryTestDate"
      onChange={handleChange}
    />

    {theoryTestPassed === "yes" && (
      <>
        <Label>Theory Test Certificate Number:</Label>
        <StyledInput
          type="number"
          name="theoryCertificateNumber"
          onChange={handleChange}
        />

        <Label>Driving Test Date:</Label>
        <StyledInput
          className="date-picker"
          type="date"
          name="drivingTestDate"
          onChange={handleChange}
        />

        <Label>Driving Test Time:</Label>
        <StyledInput
          className="date-picker"
          type="time"
          name="drivingTestTime"
          onChange={handleChange}
        />

        <Label>Driving Test Location:</Label>
        <CapitalizedInput
          type="text"
          name="drivingTestLocation"
          onChange={handleChange}
        />

        <Label>Driving Test Result:</Label>
        <StyledTextArea
          type="text"
          name="drivingTestResult"
          onChange={handleChange}
          placeholder={drivingTestResultPlaceholder}
        />
      </>
    )}
  </Form>
);

export default AddPupilEntryForm;
