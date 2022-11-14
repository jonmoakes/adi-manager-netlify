import { useSelector, useDispatch } from "react-redux";

import useHandleSignInFormChange from "./use-handle-sign-in-form-change";
import useHandleSignInFormError from "./use-handle-sign-in-form-error";

import { selectIsSignInLoading } from "../../store/user/user.selector";
import { emailSignInStart } from "../../store/user/user.action";

import Loader from "../../components/loader/loader.component";
import ForgotPasswordForm from "./forgot-password-form.component";

import {
  Form,
  Label,
  StyledInput,
  LowercasedInput,
} from "../../styles/form/form.styles";
import { SignInButton } from "../../styles/buttons/buttons.styles";

const LoginForm = () => {
  const { formFields, handleSignInFormChange, resetFormFields } =
    useHandleSignInFormChange();
  useHandleSignInFormError(resetFormFields);

  const isLoading = useSelector(selectIsSignInLoading);
  const dispatch = useDispatch();

  const { email, password, emailForPasswordReset } = formFields;

  const handleSubmit = (event) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
    } catch (error) {
      resetFormFields();
      return;
    }
  };

  return (
    <>
      {isLoading && <Loader />}

      <Form onSubmit={handleSubmit}>
        <Label>Email:</Label>
        <LowercasedInput
          name="email"
          type="email"
          onChange={handleSignInFormChange}
          value={email || ""}
          required
        />

        <Label>Password:</Label>
        <StyledInput
          className="password"
          name="password"
          type="password"
          value={password || ""}
          onChange={handleSignInFormChange}
          required
        />

        <SignInButton type="submit">Log In</SignInButton>
      </Form>

      <ForgotPasswordForm
        {...{ emailForPasswordReset, resetFormFields, handleSignInFormChange }}
      />
    </>
  );
};

export default LoginForm;
