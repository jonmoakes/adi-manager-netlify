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
import { SmallHighlightText } from "../../../styles/span/span.styles";

const EditIncomeEntryForm = ({ handleChange, entry }) => (
  <Form>
    <Label>Edit Name:</Label>
    <CapitalizedInput
      type="text"
      name="name"
      onChange={handleChange}
      defaultValue={entry.name}
    />

    <Label>Edit Address:</Label>
    <CapitalizedInput
      type="text"
      name="address"
      onChange={handleChange}
      defaultValue={entry.address}
    />

    <Label>Edit Pick Up / Drop Off Address:</Label>
    <CapitalizedInput
      type="text"
      name="pickUpDropOffAddress"
      onChange={handleChange}
      defaultValue={entry.pickUpDropOffAddress}
    />

    <Label>Edit Email Address:</Label>
    <LowercasedInput
      type="email"
      name="emailAddress"
      onChange={handleChange}
      defaultValue={entry.emailAddress}
    />

    <Label>Edit Phone Number:</Label>
    <StyledInput
      type="number"
      name="primaryPhoneNumber"
      onChange={handleChange}
      defaultValue={entry.primaryPhoneNumber}
    />

    <Label>Edit Date Of Birth:</Label>
    <StyledInput
      className="date-picker"
      type="date"
      name="dateOfBirth"
      onChange={handleChange}
      defaultValue={entry.dateOfBirth}
    />

    <Label>Edit Driving Licence Number:</Label>
    <UppercasedInput
      type="text"
      name="licenceNumber"
      onChange={handleChange}
      defaultValue={entry.licenceNumber}
    />

    <Label>Edit Licence Expiry Date:</Label>
    <StyledInput
      className="date-picker"
      type="date"
      name="licenceExpiryDate"
      onChange={handleChange}
      defaultValue={entry.licenceExpiryDate}
    />

    <Label>Edit Eyesight Checked On:</Label>
    <StyledInput
      className="date-picker"
      type="date"
      name="eyesightCheckedDate"
      onChange={handleChange}
      defaultValue={entry.eyesightCheckedDate}
    />

    <Label>Edit Glasses Required?</Label>

    <StyledSelect
      name="glassesRequired"
      onChange={handleChange}
      defaultValue={entry.glassesRequired}
    >
      {entry.glassesRequired === "no" ? (
        <option value="no">No</option>
      ) : (
        <option value="yes">Yes</option>
      )}

      {entry.glassesRequired === "no" ? (
        <option value="yes">Yes</option>
      ) : (
        <option value="no">No</option>
      )}
    </StyledSelect>

    <Label>Edit Medical Conditions:</Label>
    <StyledTextArea
      type="text"
      name="medicalConditions"
      onChange={handleChange}
      defaultValue={entry.medicalConditions}
    />

    <Label>Edit Experience Level:</Label>
    <StyledSelect
      name="experienceLevel"
      onChange={handleChange}
      defaultValue={entry.experienceLevel}
    >
      <option>{entry.experienceLevel}</option>
      {entry.experienceLevel === "beginner" ? (
        <>
          <option hidden>{entry.experienceLevel}</option>

          <option value="part trained">Part Trained</option>
          <option value="trained">Trained</option>
          <option value="full licence holder">Full Licence Holder</option>
        </>
      ) : entry.experienceLevel === "part trained" ? (
        <>
          <option hidden>{entry.experienceLevel}</option>

          <option value="beginner">Beginner</option>
          <option value="trained">Trained</option>
          <option value="full licence holder">Full Licence Holder</option>
        </>
      ) : entry.experienceLevel === "trained" ? (
        <>
          <option hidden>{entry.experienceLevel}</option>

          <option value="beginner">Beginner</option>
          <option value="part trained">Part Trained</option>
          <option value="full licence holder">Full Licence Holder</option>
        </>
      ) : entry.experienceLevel === "full licence holder" ? (
        <>
          <option hidden>{entry.experienceLevel}</option>

          <option value="beginner">Beginner</option>
          <option value="part trained">Part Trained</option>
          <option value="trained">Trained</option>
        </>
      ) : null}
    </StyledSelect>

    <Label>
      Edit Theory Test Passed?{" "}
      <SmallHighlightText>
        ( selecting yes Displays More Options after saving )
      </SmallHighlightText>
    </Label>
    <StyledSelect
      name="theoryTestPassed"
      onChange={handleChange}
      defaultValue={entry.theoryTestPassed}
    >
      {entry.theoryTestPassed === "no" ? (
        <option value="no">No</option>
      ) : (
        <option value="yes">Yes</option>
      )}

      {entry.theoryTestPassed === "no" ? (
        <option value="yes">Yes</option>
      ) : (
        <option value="no">No</option>
      )}
    </StyledSelect>

    <Label>Edit Theory Test Date:</Label>
    <StyledInput
      className="date-picker"
      type="date"
      name="theoryTestDate"
      onChange={handleChange}
      defaultValue={entry.theoryTestDate}
    />

    {entry.theoryTestPassed === "yes" && (
      <>
        <Label>Edit Theory Test Certificate Number:</Label>
        <StyledInput
          type="number"
          name="theoryCertificateNumber"
          onChange={handleChange}
          defaultValue={entry.theoryCertificateNumber}
        />

        <Label>Edit Driving Test Date:</Label>
        <StyledInput
          className="date-picker"
          type="date"
          name="drivingTestDate"
          onChange={handleChange}
          defaultValue={entry.drivingTestDate}
        />

        <Label>Edit Driving Test Time:</Label>
        <StyledInput
          className="date-picker"
          type="time"
          name="drivingTestTime"
          onChange={handleChange}
          defaultValue={entry.drivingTestTime}
        />

        <Label>Edit Driving Test Location:</Label>
        <CapitalizedInput
          type="text"
          name="drivingTestLocation"
          onChange={handleChange}
          defaultValue={entry.drivingTestLocation}
        />

        <Label>Edit Driving Test Result:</Label>
        <StyledTextArea
          type="text"
          name="drivingTestResult"
          onChange={handleChange}
          defaultValue={entry.drivingTestResult}
        />
      </>
    )}
  </Form>
);

export default EditIncomeEntryForm;
