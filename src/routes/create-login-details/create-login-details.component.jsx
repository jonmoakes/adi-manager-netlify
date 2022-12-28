import useCreateLoginDetailsSubmit from "./use-create-login-details-submit";

import CreateLoginDetailsPassAdvice from "./create-login-details-pass-advice.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import { Container } from "../../styles/container/container.styles";
import { Div } from "../../styles/div/div.styles";
import { Heading } from "../../styles/h1/h1.styles";
import {
  CreateDetailsForm,
  StyledInput,
  Label,
  CapitalizedInput,
} from "../../styles/form/form.styles";

import {
  passwordLengthPlaceholder,
  confirmPasswordPlaceholder,
} from "../../strings/strings";

const CreateLoginDetails = () => {
  const { handleCreateDetailsChange, handleCreateDetailsSubmit, loginDetails } =
    useCreateLoginDetailsSubmit();

  const { displayName, email, confirmEmail, password, confirmPassword } =
    loginDetails;
  return (
    <Container>
      <Div>
        <Heading>create your login details</Heading>
      </Div>
      <CreateLoginDetailsPassAdvice />

      <Div>
        <CreateDetailsForm onSubmit={handleCreateDetailsSubmit}>
          <Label>Name:</Label>

          <CapitalizedInput
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
            <CustomButton type="submit">
              Proceed To Payment Details
            </CustomButton>
          )}
        </CreateDetailsForm>
      </Div>
    </Container>
  );
};

export default CreateLoginDetails;
