import { useSelector } from "react-redux";

import useHandleSignUpFormChange from "../../hooks/handlers/use-handle-sign-up-form-change";

import { selectIsSignInLoading } from "../../store/user/user.selector";

import Loader from "../loader/loader.component";
import SignUpWelcome from "./sign-up-welcome.component";
import SignUp from "./sign-up.component";
import AlreadyHaveAccount from "./already-have-account.component";

import { Div } from "../../styles/div/div.styles";

const SignUpForm = () => {
  const { formFields, resetFormFields, handleSignUpFormChange } =
    useHandleSignUpFormChange();
  const isLoading = useSelector(selectIsSignInLoading);

  return (
    <Div>
      {isLoading && <Loader />}
      <SignUpWelcome />

      <SignUp
        {...{
          handleSignUpFormChange,
          formFields,
          resetFormFields,
        }}
      />
      <AlreadyHaveAccount />
    </Div>
  );
};

export default SignUpForm;
