import { useDispatch } from "react-redux";

import useFireSwal from "../../hooks/swals/use-fire-swal";
import useHandleSignUpFormError from "../../hooks/errors/use-handle-sign-up-form-error";

import { signUpStart } from "../../store/user/user.action";

import {
  SignInUpForm,
  LowercasedInput,
  StyledInput,
  CapitalizedInput,
  Label,
} from "../../styles/form/form.styles";
import { SignUpButton } from "../../styles/buttons/buttons.styles";
import { SignInUpHr } from "../../styles/hr/hr.styles";

import {
  displayNameTooLongMessage,
  passwordsDontMatchMessage,
} from "../../strings/strings";

const SignUp = ({ handleSignUpFormChange, resetFormFields, formFields }) => {
  const { fireSwal } = useFireSwal();
  useHandleSignUpFormError(resetFormFields);

  const dispatch = useDispatch();
  const { displayName, email, password, confirmPassword } = formFields;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (displayName.length > 8) {
      fireSwal("error", displayNameTooLongMessage, "", 0, true, false);
      return;
    } else if (password !== confirmPassword) {
      fireSwal("error", passwordsDontMatchMessage, "", 0, true, false);
      return;
    } else {
      dispatch(signUpStart(email, password, displayName));
    }
  };
  return (
    <SignInUpForm onSubmit={handleSubmit}>
      <SignInUpHr />
      <Label>display name</Label>
      <CapitalizedInput
        type="text"
        name="displayName"
        value={displayName || ""}
        onChange={handleSignUpFormChange}
        placeholder="Max 8 Characters "
        required
      />

      <Label>email</Label>
      <LowercasedInput
        type="email"
        name="email"
        value={email || ""}
        onChange={handleSignUpFormChange}
        placeholder="Enter Your Email Address"
        required
      />

      <Label>password</Label>
      <StyledInput
        type="password"
        name="password"
        value={password || ""}
        onChange={handleSignUpFormChange}
        placeholder="Min 6 Characters"
        required
      />

      <Label>confirm password</Label>
      <StyledInput
        type="password"
        name="confirmPassword"
        value={confirmPassword || ""}
        onChange={handleSignUpFormChange}
        placeholder="Confirm Your Password"
        required
      />

      <SignUpButton>Sign Up</SignUpButton>
    </SignInUpForm>
  );
};

export default SignUp;
