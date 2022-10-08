import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import useFireSwal from "../swals/use-fire-swal";

import { resetErrorMessage } from "../../store/user/user.action";
import { selectUserError } from "../../store/user/user.selector";

import {
  networkRequestFailedError,
  noNetworkDetected,
  errorSigningInTitle,
  errorSigningInText,
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
      fireSwal(
        "error",
        errorSigningInTitle,
        errorSigningInText,
        0,
        true,
        false
      );
      resetFormFields();
      dispatch(resetErrorMessage());
    }
  }, [error, fireSwal, dispatch, resetFormFields]);
};

export default useHandleSignInFormError;
