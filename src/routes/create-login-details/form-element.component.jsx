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
  handleCreateLoginDetailsSubmit,
  handleCreateLoginDetailsChange,
}) => {
  const { displayName, email, confirmEmail, password, confirmPassword } =
    userCredentials;

  return (
    <CreateDetailsForm onSubmit={handleCreateLoginDetailsSubmit}>
      <Label>Name:</Label>

      <StyledInput
        type="text"
        name="displayName"
        value={displayName || ""}
        onChange={handleCreateLoginDetailsChange}
        required
      />

      <Label>Email:</Label>
      <StyledInput
        className="email"
        type="email"
        name="email"
        value={email || ""}
        onChange={handleCreateLoginDetailsChange}
        required
      />

      <Label>Confirm Email:</Label>
      <StyledInput
        className="email"
        type="email"
        name="confirmEmail"
        value={confirmEmail || ""}
        onChange={handleCreateLoginDetailsChange}
        required
      />
      <Label>Password:</Label>
      <StyledInput
        className="password"
        type="password"
        name="password"
        value={password || ""}
        onChange={handleCreateLoginDetailsChange}
        placeholder={passwordLengthPlaceholder}
        required
      />
      <Label>Confirm Password</Label>
      <StyledInput
        className="password"
        type="password"
        name="confirmPassword"
        value={confirmPassword || ""}
        onChange={handleCreateLoginDetailsChange}
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
