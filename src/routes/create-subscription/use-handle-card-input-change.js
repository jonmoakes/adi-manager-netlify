import { useState } from "react";

import {
  pleaseEnterYourCardDetails,
  formNotCompleteWarning,
} from "../../strings/strings";

const useHandleCardInputChange = () => {
  const [validateInput, setValidateInput] = useState({
    error: "",
    warning: "",
    showButton: false,
  });

  const handleCardInputChange = (e) => {
    if (e.empty) {
      setValidateInput({
        error: pleaseEnterYourCardDetails,
        warning: "",
        showButton: false,
      });
    } else if (e.error === undefined && e.complete === false) {
      setValidateInput({
        error: "",
        warning: formNotCompleteWarning,
        showButton: false,
      });
    } else if (e.error !== undefined && e.complete === false) {
      setValidateInput({
        error: e.error.message,
        warning: "",
        showButton: false,
      });
    } else if (!e.empty && e.error === undefined && e.complete === true) {
      setValidateInput({
        error: "",
        warning: "",
        showButton: true,
      });
    }
  };

  return {
    handleCardInputChange,
    validateInput,
  };
};

export default useHandleCardInputChange;
