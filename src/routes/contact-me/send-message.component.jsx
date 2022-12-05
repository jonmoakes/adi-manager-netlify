import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import useFireSwal from "../../hooks/use-fire-swal";

import { startLoader, stopLoader } from "../../store/loader/loader.action";
import { selectIsLoading } from "../../store/loader/loader.selector";

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
  noNetworkDetected,
} from "../../strings/strings";

const SendMessage = ({ formDetails }) => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const { fireSwal } = useFireSwal();
  const navigate = useNavigate();

  const { name, email, message } = formDetails;

  const handleSuccess = () => {
    return [
      dispatch(stopLoader()),
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
    if (messageText === "Failed to fetch") {
      return [
        dispatch(stopLoader()),
        fireSwal("error", titleText, noNetworkDetected, 0, true, false),
      ];
    } else {
      return [
        dispatch(stopLoader()),
        fireSwal("error", titleText, messageText, 0, true, false),
      ];
    }
  };

  const sendEmail = async () => {
    if (!name || !email || !message) {
      handleError(errorSendingMessage, missingEmailFieldsErrorMessage);
      return;
    } else if (!validateEmail(email)) {
      handleError(errorSendingMessage, invalidEmailErrorMessage);
      return;
    }

    try {
      dispatch(startLoader());
      const response = await fetch(
        "/.netlify/functions/send-contact-form-message",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: emailToSend(name, email, message),
          }),
        }
      );
      if (response.ok) {
        handleSuccess();
      } else {
        handleError(errorSendingMessage);
      }
    } catch (error) {
      handleError(errorSendingMessage, error.message);
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
