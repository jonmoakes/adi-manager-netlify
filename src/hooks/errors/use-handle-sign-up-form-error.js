import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import useFireSwal from "../swals/use-fire-swal";

import { resetErrorMessage } from "../../store/user/user.action";
import { selectUserError } from "../../store/user/user.selector";

import { emailAlreadyInUse, weakPassword } from "../../strings/strings";

const useHandleSignUpFormError = (resetFormFields) => {
  const { fireSwal } = useFireSwal();

  const error = useSelector(selectUserError);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!error) return;
    if (error.code.includes("auth/email-already-in-use")) {
      fireSwal("error", emailAlreadyInUse, "", 0, true, false);
      dispatch(resetErrorMessage());
      resetFormFields();
      return;
    } else if (error.code.includes("weak-password")) {
      fireSwal("error", weakPassword, "", 0, true, false);
      dispatch(resetErrorMessage());
    } else {
      fireSwal("error", error.code, "", 0, true, false);
      dispatch(resetErrorMessage());
      resetFormFields();
    }
  }, [error, dispatch, resetFormFields, fireSwal]);
};

export default useHandleSignUpFormError;
