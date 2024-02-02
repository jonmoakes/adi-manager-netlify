import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import useFireSwal from "../../hooks/use-fire-swal";

import { startLoader, stopLoader } from "../../store/loader/loader.action";
import { selectIsLoading } from "../../store/loader/loader.selector";

import Loader from "../../components/loader/loader.component";

import {
  ContactFormButton,
  DisabledContactButton,
} from "../../styles/buttons/buttons.styles";

import { validateEmail } from "../../reusable-functions/email-to-send";

import {
  errorSendingMessage,
  missingEmailFieldsErrorMessage,
  invalidEmailErrorMessage,
  successMessage,
  messageSent,
} from "../../strings/strings";

const SendMessage = ({ formDetails }) => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const { fireSwal } = useFireSwal();
  const navigate = useNavigate();

  const { name, email, message } = formDetails;

  const sendEmail = async () => {
    if (!name || !email || !message) {
      fireSwal(
        "error",
        errorSendingMessage,
        missingEmailFieldsErrorMessage,
        0,
        true,
        false
      );
    } else if (!validateEmail(email)) {
      fireSwal(
        "error",
        errorSendingMessage,
        invalidEmailErrorMessage,
        0,
        true,
        false
      );
      return;
    }

    try {
      dispatch(startLoader());
      await axios
        .post("/.netlify/functions/send-contact-form-message-adi-manager", {
          name,
          email,
          message,
        })
        .then((response) => {
          dispatch(stopLoader());
          if (response.status === 202) {
            fireSwal("success", successMessage, messageSent, 4000, false, true);
            navigate("/");
          }
        });
    } catch (error) {
      dispatch(stopLoader());
      fireSwal(
        "error",
        `${errorSendingMessage} the message recieved was:`,
        error.message,
        0,
        true,
        false
      );
    }
  };

  return (
    <div>
      {!isLoading ? (
        <ContactFormButton type="submit" onClick={sendEmail}>
          Send Message
        </ContactFormButton>
      ) : (
        <>
          <Loader />
          <DisabledContactButton>please wait...</DisabledContactButton>
        </>
      )}
    </div>
  );
};

export default SendMessage;
