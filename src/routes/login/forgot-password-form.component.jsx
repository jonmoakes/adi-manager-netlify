import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../utils/firebase/firebase.utils";
import { sendPasswordResetEmail } from "firebase/auth";

import useFireSwal from "../../hooks/use-fire-swal";
import useShowHide from "../../hooks/use-show-hide";

import { startLoader, stopLoader } from "../../store/loader/loader.action";
import { selectIsLoading } from "../../store/loader/loader.selector";

import Loader from "../../components/loader/loader.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import { Form, Label, StyledInput } from "../../styles/form/form.styles";

import {
  emailAddressNotFound,
  passwordResetSuccessTitle,
  passwordResetSuccessText,
} from "../../strings/strings";

const ForgotPasswordForm = () => {
  const { fireSwal } = useFireSwal();
  const { showData, hideData, showComponent, hideComponent } = useShowHide();
  const [resetPasswordField, setResetPasswordField] = useState("");

  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const handleResetPasswordFieldChange = (event) => {
    setResetPasswordField(event.target.value);
  };

  const handlePasswordResetSubmit = async (event) => {
    event.preventDefault();
    dispatch(startLoader());

    sendPasswordResetEmail(auth, resetPasswordField)
      .then(() => {
        return [
          dispatch(stopLoader()),
          fireSwal(
            "success",
            passwordResetSuccessTitle,
            passwordResetSuccessText,
            4000,
            false,
            true
          ),
          setResetPasswordField(""),
          hideComponent(),
        ];
      })
      .catch((error) => {
        dispatch(stopLoader());
        if (error.code.includes("auth/user-not-found")) {
          fireSwal("error", emailAddressNotFound, "", 0, true, false);
        } else {
          fireSwal("error", error.message, "", 0, true, false);
        }
      });
  };

  return (
    <>
      {isLoading && <Loader />}

      {hideData && (
        <CustomButton className="forgot-password" onClick={showComponent}>
          Forgot Password?
        </CustomButton>
      )}

      {showData && (
        <>
          <hr />
          <Form onSubmit={handlePasswordResetSubmit}>
            <Label>
              enter your email & then tap the "reset password" button
            </Label>
            <StyledInput
              name="emailForPasswordReset"
              type="email"
              onChange={handleResetPasswordFieldChange}
              placeholder="Please Enter Your Email"
              value={resetPasswordField || ""}
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
