import { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

import useFireSwal from "../../hooks/swals/use-fire-swal";

import Loader from "../../components/loader/loader.component";

import {
  SignInUpForm,
  ForgotPasswordLabel,
  ResetPasswordInput,
} from "../../styles/form/form.styles";
import { ForgotPasswordSelectDiv } from "../../styles/div/div.styles";
import { ForgotPasswordButton } from "../../styles/buttons/buttons.styles";
import { StyledLink } from "../../styles/link/link.styles";

import {
  passwordResetSuccessMessageSignInPage,
  passwordResetSuccessText,
  emailAddressNotFound,
  pleaseTryAgain,
} from "../../strings/strings";

const ForgotPasswordForm = ({
  emailForPasswordReset,
  resetFormFields,
  handleSignInFormChange,
}) => {
  const [passwordResetLoader, setPasswordResetLoader] = useState(false);
  const [showForgotPasswordField, setShowForgotPasswordField] = useState(false);
  const { fireSwal } = useFireSwal();

  const auth = getAuth();

  const handlePasswordResetSubmit = async (event) => {
    event.preventDefault();
    const email = emailForPasswordReset;
    try {
      setPasswordResetLoader(true);
      await sendPasswordResetEmail(auth, email).then(() => {
        setPasswordResetLoader(false);
        fireSwal(
          "success",
          passwordResetSuccessMessageSignInPage,
          passwordResetSuccessText,
          0,
          true,
          false
        );
      });
      resetFormFields();
    } catch (error) {
      setPasswordResetLoader(false);
      resetFormFields();
      if (error.code.includes("auth/user-not-found")) {
        fireSwal("error", emailAddressNotFound, "", 0, true, false);
      } else {
        fireSwal("error", error.code, pleaseTryAgain, 0, true, false);
      }
    }
  };

  return (
    <>
      {passwordResetLoader && <Loader />}
      <ForgotPasswordSelectDiv>
        {!showForgotPasswordField && (
          <ForgotPasswordButton
            onClick={() => setShowForgotPasswordField(true)}
          >
            Forgot Password?
          </ForgotPasswordButton>
        )}

        {showForgotPasswordField && (
          <SignInUpForm onSubmit={handlePasswordResetSubmit}>
            <ForgotPasswordLabel>
              enter your email & then click "reset password."
              <br />
              forgot your email? please{" "}
              <StyledLink to="/contact">Contact us</StyledLink> to recover your
              account.
            </ForgotPasswordLabel>
            <ResetPasswordInput
              name="emailForPasswordReset"
              type="email"
              onChange={handleSignInFormChange}
              placeholder="Please Enter Your Email"
              value={emailForPasswordReset || ""}
              required
            />

            <ForgotPasswordButton type="submit">
              Reset Password
            </ForgotPasswordButton>
          </SignInUpForm>
        )}
      </ForgotPasswordSelectDiv>
    </>
  );
};

export default ForgotPasswordForm;
