import { useNavigate } from "react-router-dom";
import axios from "axios";

import useHandleIsProcessing from "../../hooks/use-handle-is-processing";
import useFireSwal from "../../hooks/use-fire-swal";

import Loader from "../../components/loader/loader.component";

import {
  ContactFormButton,
  DisabledContactButton,
} from "../../styles/buttons/buttons.styles";

import {
  emailToSend,
  validateEmail,
} from "../../reusable-functions/email-to-send";

import {
  errorSendingMessage,
  missingEmailFieldsErrorMessage,
  invalidEmailErrorMessage,
  successMessage,
  emailResponseTimeMessage,
} from "../../strings/strings";

const SendMessage = ({ formDetails }) => {
  const { isProcessing, startIsProcessing, startIsNotProcessing } =
    useHandleIsProcessing();
  const { fireSwal } = useFireSwal();
  const navigate = useNavigate();

  const { name, email, message } = formDetails;

  const handleSuccess = () => {
    return [
      fireSwal(
        "success",
        successMessage,
        emailResponseTimeMessage,
        4000,
        false,
        true
      ),
      navigate("/"),
    ];
  };

  const handleError = (titleText, messageText) => {
    fireSwal("error", titleText, messageText, 0, true, false);
  };

  const sendEmail = async () => {
    if (!name || !email || !message) {
      handleError(errorSendingMessage, missingEmailFieldsErrorMessage);
      return;
    } else if (!validateEmail(email)) {
      handleError(errorSendingMessage, invalidEmailErrorMessage);
      return;
    }
    startIsProcessing();
    await axios
      .post("/.netlify/functions/send-contact-form-message", {
        message: emailToSend(name, email, message),
      })
      .then(
        (response) => {
          startIsNotProcessing();
          if (response.status === 202) {
            handleSuccess();
          } else {
            handleError(errorSendingMessage);
          }
        },
        (error) => {
          console.log(error.message);
          startIsNotProcessing();
          handleError(errorSendingMessage, error.message);
        }
      );
  };

  return (
    <div>
      {!isProcessing ? (
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
