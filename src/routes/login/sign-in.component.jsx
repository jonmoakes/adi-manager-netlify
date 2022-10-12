import { useDispatch } from "react-redux";

import useHandleSignInFormError from "../../hooks/errors/use-handle-sign-in-form-error";

import {
  emailSignInStart,
} from "../../store/user/user.action";

import {
  SignInUpForm,
  Label,
  LowercasedInput,
  StyledInput,
} from "../../styles/form/form.styles";
import {SignInButton,
} from "../../styles/buttons/buttons.styles";
import { SignInUpHr } from "../../styles/hr/hr.styles";

const SignIn = ({
  email,
  password,
  resetFormFields,
  handleSignInFormChange,
}) => {
  useHandleSignInFormError(resetFormFields);
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await dispatch(emailSignInStart(email, password));
    } catch (error) {
      resetFormFields();
      return;
    }
  };

  return (
    <SignInUpForm onSubmit={handleSubmit}>
      <SignInUpHr />
      <Label>email</Label>
      <LowercasedInput
        name="email"
        type="email"
        onChange={handleSignInFormChange}
        placeholder="Enter Your Email"
        value={email || ""}
        required
      />

      <Label>password</Label>
      <StyledInput
        name="password"
        type="password"
        onChange={handleSignInFormChange}
        placeholder="Enter Your Password"
        value={password || ""}
        required
      />

      <SignInButton type="submit">log In</SignInButton>
    </SignInUpForm>
  );
};

export default SignIn;
