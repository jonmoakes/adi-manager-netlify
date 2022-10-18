import CustomButton from "../../components/custom-button/custom-button.component";

import {
  CreateDetailsForm,
  StyledInput,
  Label,
} from "../../styles/form/form.styles";

import {
  passwordLengthPlaceholder,
  confirmPasswordPlaceholder,
} from "../../strings/strings";

const FormElement = ({
  userCredentials,
  handleCreateDetailsSubmit,
  handleCreateDetailsChange,
}) => {
  const { displayName, email, confirmEmail, password, confirmPassword } =
    userCredentials;

  return (
    <CreateDetailsForm onSubmit={handleCreateDetailsSubmit}>
      <Label>Name:</Label>

      <StyledInput
        type="text"
        name="displayName"
        value={displayName || ""}
        onChange={handleCreateDetailsChange}
        required
      />

      <Label>Email:</Label>
      <StyledInput
        className="email"
        type="email"
        name="email"
        value={email || ""}
        onChange={handleCreateDetailsChange}
        required
      />

      <Label>Confirm Email:</Label>
      <StyledInput
        className="email"
        type="email"
        name="confirmEmail"
        value={confirmEmail || ""}
        onChange={handleCreateDetailsChange}
        required
      />
      <Label>Password:</Label>
      <StyledInput
        className="password"
        type="password"
        name="password"
        value={password || ""}
        onChange={handleCreateDetailsChange}
        placeholder={passwordLengthPlaceholder}
        required
      />
      <Label>Confirm Password</Label>
      <StyledInput
        className="password"
        type="password"
        name="confirmPassword"
        value={confirmPassword || ""}
        onChange={handleCreateDetailsChange}
        placeholder={confirmPasswordPlaceholder}
        required
      />

      {displayName && email && password && confirmPassword && (
        <CustomButton type="submit">Proceed To Payment Details</CustomButton>
      )}
    </CreateDetailsForm>
  );
};

export default FormElement;
