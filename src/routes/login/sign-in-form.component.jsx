import { useSelector } from "react-redux";

import useHandleSignInFormChange from "../../hooks/handlers/use-handle-sign-in-form-change";

import { selectIsSignInLoading } from "../../store/user/user.selector";

import Loader from "../../components/loader/loader.component";
import SignIn from "./sign-in.component";
import NoAccount from "./no-account.component";
import ForgotPasswordForm from "./forgot-password-form.component";

import { Div } from "../../styles/div/div.styles";

const SignInForm = () => {
  const { formFields, handleSignInFormChange, resetFormFields } =
    useHandleSignInFormChange();

  const isLoading = useSelector(selectIsSignInLoading);
  const { email, password, emailForPasswordReset } = formFields;

  return (
    <Div>
      {isLoading && <Loader />}
      <p>Please log in with your email and password.</p>
      <SignIn
        {...{
          email,
          password,
          resetFormFields,
          handleSignInFormChange,
        }}
      />

      <NoAccount />
      <ForgotPasswordForm
        {...{ emailForPasswordReset, resetFormFields, handleSignInFormChange }}
      />
    </Div>
  );
};

export default SignInForm;
