import { useState } from "react";

const useHandleSignInFormChange = () => {
  const [signInCredentials, setSignInCredentials] = useState({
    email: "",
    password: "",
  });

  const handleSignInFormChange = (event) => {
    const { value, name } = event.target;
    setSignInCredentials({ ...signInCredentials, [name]: value });
  };

  return { signInCredentials, handleSignInFormChange };
};

export default useHandleSignInFormChange;
