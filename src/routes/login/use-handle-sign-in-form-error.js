import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import useFireSwal from "../../hooks/use-fire-swal";

import { resetErrorMessage } from "../../store/user/user.action";
import { selectUserError } from "../../store/user/user.selector";

import {
  errorSigningInText,
  errorSigningInTitle,
  networkRequestFailedError,
  noNetworkDetected,
} from "../../strings/strings";

const useHandleSignInFormError = (resetFormFields) => {
  const { fireSwal } = useFireSwal();

  const error = useSelector(selectUserError);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error && error.code.includes(networkRequestFailedError)) {
      fireSwal("error", noNetworkDetected, "", 0, true, false);
      dispatch(resetErrorMessage());
    } else if (error && !error.code.includes(networkRequestFailedError)) {
      resetFormFields();
      fireSwal(
        "error",
        errorSigningInTitle,
        errorSigningInText,
        0,
        true,
        false
      );
      dispatch(resetErrorMessage());
    }
  }, [error, fireSwal, dispatch, resetFormFields]);
};

export default useHandleSignInFormError;
