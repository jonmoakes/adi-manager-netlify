import { auth } from "../../utils/firebase/firebase.utils";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import useHandleNewEmailSubmit from "./use-handle-new-email-submit";
import useFireSwal from "../../hooks/use-fire-swal";

import CustomButton from "../../components/custom-button/custom-button.component";

import { Div } from "../../styles/div/div.styles";
import { LowercasedInput, Label } from "../../styles/form/form.styles";
import { DisabledButton } from "../../styles/buttons/buttons.styles";

import {
  emailFieldsEmptyMessage,
  sameEmailAddressMessage,
  emailsDontMatchMessage,
  changeEmailConfirmMessage,
  currentEmailDoesNotExistMessage,
  confirmChangeEmail,
} from "../../strings/strings";

const EmailChangeInputs = () => {
  const { fireSwal } = useFireSwal();
  const { handleChange, isDisabled, userCredentials, handleNewEmailSubmit } =
    useHandleNewEmailSubmit();

  const swal = withReactContent(Swal);
  const currentUser = auth.currentUser;
  const { currentEmail, newEmail, confirmEmail } = userCredentials;

  const confirmEmailChangeConfirmBox = async () => {
    if (currentEmail === "" || newEmail === "" || confirmEmail === "") {
      fireSwal("error", emailFieldsEmptyMessage, "", 0, true, false);
    } else if (currentEmail !== currentUser.email) {
      fireSwal("error", currentEmailDoesNotExistMessage, "", 0, true, false);
    } else if (currentEmail === newEmail || currentEmail === confirmEmail) {
      fireSwal("error", sameEmailAddressMessage, "", 0, true, false);
    } else if (newEmail !== confirmEmail) {
      fireSwal("error", emailsDontMatchMessage, "", 0, true, false);
    } else {
      swal
        .fire({
          title: changeEmailConfirmMessage,
          icon: "question",
          showCancelButton: true,
          cancelButtonColor: "red",
          cancelButtonText: "Cancel",
          confirmButtonText: confirmChangeEmail,
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
            handleNewEmailSubmit();
          }
        });
    }
  };

  return (
    <Div>
      <Label>your current email</Label>
      <LowercasedInput
        name="currentEmail"
        type="email"
        onChange={handleChange}
      />

      <Label>your new email</Label>
      <LowercasedInput name="newEmail" type="email" onChange={handleChange} />

      <Label>confirm new email</Label>
      <LowercasedInput
        name="confirmEmail"
        type="email"
        onChange={handleChange}
      />

      {!isDisabled ? (
        <CustomButton type="submit" onClick={confirmEmailChangeConfirmBox}>
          update login Email
        </CustomButton>
      ) : (
        <DisabledButton>please wait...</DisabledButton>
      )}
    </Div>
  );
};

export default EmailChangeInputs;
