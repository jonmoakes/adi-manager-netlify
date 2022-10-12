import { useSelector } from "react-redux";
// import { useBeforeunload } from 'react-beforeunload';

import { selectErrorMessage } from "../../store/error/error.selector";

import useHandleCreateLoginDetailsSubmit from "../../hooks/login/use-handle-create-login-details-submit";

import Loader from "../loader/loader.component";
import FetchError from "../fetch-error/fetch-error.component";
import StrongPasswordAdvice from "./strong-password-advice.component";
import FormElement from "./form-element.component";

import { Div } from "../../styles/div/div.styles";

const CreateLoginDetailsForm = () => {
  const {
    isLoading,
    handleCreateDetailsChange,
    handleCreateDetailsSubmit,
    userCredentials,
    // prompt
  } = useHandleCreateLoginDetailsSubmit();

  const errorMessage = useSelector(selectErrorMessage);

  // useBeforeunload(() => {
  // if (prompt) {
  //   alert("arghhh")
  // }
  // });

  return (
    <>
      {isLoading && <Loader />}
      {errorMessage ? (
        <FetchError />
      ) : (
        <>
        <Div>
          <StrongPasswordAdvice />
        </Div>
        <Div>
          <FormElement
            {...{
              userCredentials,
              handleCreateDetailsChange,
              handleCreateDetailsSubmit,
            }}
          />
        </Div></>
      )}
    </>
  );
};

export default CreateLoginDetailsForm;
