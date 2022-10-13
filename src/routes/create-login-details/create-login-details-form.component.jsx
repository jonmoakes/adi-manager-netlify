import { useSelector } from "react-redux";

import useHandleCreateLoginDetailsSubmit from "../../hooks/sign-up/use-handle-create-login-details-submit";

import { selectErrorMessage } from "../../store/error/error.selector";

import Loader from "../../components/loader/loader.component";
import FetchError from "../../components/fetch-error/fetch-error.component";
import StrongPasswordAdvice from "./strong-password-advice.component";
import FormElement from "./form-element.component";

import { Div } from "../../styles/div/div.styles";

const CreateLoginDetailsForm = () => {
  const {
    isLoading,
    handleCreateLoginDetailsChange,
    handleCreateLoginDetailsSubmit,
    userCredentials,
  } = useHandleCreateLoginDetailsSubmit();

  const errorMessage = useSelector(selectErrorMessage);

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
                handleCreateLoginDetailsChange,
                handleCreateLoginDetailsSubmit,
              }}
            />
          </Div>
        </>
      )}
    </>
  );
};

export default CreateLoginDetailsForm;
