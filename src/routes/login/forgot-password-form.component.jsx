import { useState } from "react";
import { auth } from "../../utils/firebase/firebase.utils";
import { sendPasswordResetEmail } from "firebase/auth";

import useFireSwal from "../../hooks/use-fire-swal";

import Loader from "../../components/loader/loader.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import { Form, Label, StyledInput } from "../../styles/form/form.styles";

import {
  emailAddressNotFound,
  passwordResetSuccessMessageSignInPage,
  passwordResetSuccessText,
} from "../../strings/strings";

const ForgotPasswordForm = ({
  emailForPasswordReset,
  resetFormFields,
  handleSignInFormChange,
}) => {
  const { fireSwal } = useFireSwal();

  const [passwordResetLoader, setPasswordResetLoader] = useState(false);
  const [showForgotPasswordField, setShowForgotPasswordField] = useState(false);

  const handlePasswordResetSubmit = async (event) => {
    event.preventDefault();

    setPasswordResetLoader(true);

    sendPasswordResetEmail(auth, emailForPasswordReset)
      .then(() => {
        return [
          setPasswordResetLoader(false),
          fireSwal(
            "success",
            passwordResetSuccessMessageSignInPage,
            passwordResetSuccessText,
            4000,
            false,
            true
          ),
          resetFormFields(),
          setShowForgotPasswordField(false),
        ];
      })
      .catch((error) => {
        setPasswordResetLoader(false);
        if (error.code.includes("auth/user-not-found")) {
          fireSwal("error", emailAddressNotFound, "", 0, true, false);
          resetFormFields();
        } else {
          fireSwal("error", error.message, "", 0, true, false);
          resetFormFields();
        }
      });
  };

  return (
    <>
      {passwordResetLoader && <Loader />}

      {!showForgotPasswordField && (
        <CustomButton
          className="forgot-password"
          onClick={() => setShowForgotPasswordField(true)}
        >
          Forgot Password?
        </CustomButton>
      )}

      {showForgotPasswordField && (
        <>
          <hr />
          <Form onSubmit={handlePasswordResetSubmit}>
            <Label>enter your email & then click "reset password."</Label>
            <StyledInput
              className="reset-pass-input email"
              name="emailForPasswordReset"
              type="email"
              onChange={handleSignInFormChange}
              placeholder="Please Enter Your Email"
              value={emailForPasswordReset || ""}
              required
            />
            <CustomButton className="forgot-password" type="submit">
              Reset Password
            </CustomButton>
          </Form>
        </>
      )}
    </>
  );
};

export default ForgotPasswordForm;
