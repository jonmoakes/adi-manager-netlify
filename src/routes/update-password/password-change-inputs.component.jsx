import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import useHandleUpdatePassword from "./use-handle-update-password";
import useFireSwal from "../../hooks/use-fire-swal";

import CustomButton from "../../components/custom-button/custom-button.component";

import { Div } from "../../styles/div/div.styles";
import { StyledInput, Label } from "../../styles/form/form.styles";
import { DisabledButton } from "../../styles/buttons/buttons.styles";

import {
  passwordsDontMatchMessage,
  confirmUpdatePasswordMessage,
  passwordFieldsEmptyMessage,
  confirmChangePassword,
  passwordLengthError,
} from "../../strings/strings";

const PasswordChangeInputs = () => {
  const { handleChange, isDisabled, userCredentials, handleUpdatePassword } =
    useHandleUpdatePassword();
  const { fireSwal } = useFireSwal();

  const swal = withReactContent(Swal);

  const updatePasswordConfirmBox = async () => {
    const { newPassword, confirmNewPassword } = await userCredentials;
    if (!newPassword || !confirmNewPassword) {
      fireSwal("error", passwordFieldsEmptyMessage, "", 0, true, false);
    } else if (newPassword !== confirmNewPassword) {
      fireSwal("error", passwordsDontMatchMessage, "", 0, true, false);
    } else if (newPassword.length < 6 || confirmNewPassword.length < 6) {
      fireSwal("error", passwordLengthError, "", 0, true, false);
    } else {
      swal
        .fire({
          title: confirmUpdatePasswordMessage,
          icon: "question",
          showCancelButton: true,
          cancelButtonColor: "red",
          cancelButtonText: "Cancel",
          confirmButtonText: confirmChangePassword,
          allowOutsideClick: false,
          reverseButtons: true,
          confirmButtonColor: "#3085d6",
          background: "black",
          backdrop: `
        rgba(36, 122, 252, 0.8)`,
          customClass: "confirm",
        })
        .then((result) => {
          if (result.isConfirmed) {
            handleUpdatePassword();
          }
        });
    }
  };

  return (
    <Div>
      <Label>choose new password</Label>
      <StyledInput name="newPassword" type="password" onChange={handleChange} />

      <Label>confirm new password</Label>
      <StyledInput
        name="confirmNewPassword"
        type="password"
        onChange={handleChange}
      />

      {isDisabled === false ? (
        <CustomButton type="submit" onClick={updatePasswordConfirmBox}>
          Update Password
        </CustomButton>
      ) : (
        <DisabledButton>please wait...</DisabledButton>
      )}
    </Div>
  );
};

export default PasswordChangeInputs;
