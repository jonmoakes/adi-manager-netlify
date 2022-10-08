import { useState } from "react";

const defaultFormFields = {
  email: "",
  password: "",
  emailForPasswordReset: "",
};

const useHandleSignInFormChange = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSignInFormChange = (event) => {
    const { value, name } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return { formFields, resetFormFields, handleSignInFormChange };
};

export default useHandleSignInFormChange;
