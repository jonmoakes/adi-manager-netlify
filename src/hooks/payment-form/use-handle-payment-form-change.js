import { useState } from "react";

import {
  pleaseEnterYourCardDetails,
  formNotCompleteWarning,
} from "../../strings/strings";

const useHandlePaymentFormChange = () => {
  const [error, setError] = useState("");
  const [warning, setWarning] = useState("");
  const [showButton, setShowButton] = useState(false);

  const handleChange = (e) => {
    if (e.empty) {
      setShowButton(false);
      setWarning("");
      setError(pleaseEnterYourCardDetails);
    } else if (e.error === undefined && e.complete === false) {
      setShowButton(false);
      setWarning(formNotCompleteWarning);
      setError("");
    } else if (e.error !== undefined && e.complete === false) {
      setWarning("");
      setShowButton(false);
      setError(e.error.message);
    } else if (!e.empty && e.error === undefined && e.complete === true) {
      setWarning("");
      setShowButton(true);
      setError("");
    }
  };

  return {
    handleChange,
    error,
    warning,
    showButton,
  };
};

export default useHandlePaymentFormChange;
