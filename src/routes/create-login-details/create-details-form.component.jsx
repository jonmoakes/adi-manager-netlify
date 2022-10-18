import { useSelector } from "react-redux";

import useHandleCreateDetailsSubmit from "../../hooks/sign-up/use-handle-create-details-submit";

import { selectErrorMessage } from "../../store/error/error.selector";

import Loader from "../../components/loader/loader.component";
import FetchError from "../../components/fetch-error/fetch-error.component";
import StrongPasswordAdvice from "./strong-password-advice.component";
import FormElement from "./form-element.component";

import { Div } from "../../styles/div/div.styles";

const CreateDetailsForm = () => {
  const {
    isLoading,
    handleCreateDetailsChange,
    handleCreateDetailsSubmit,
    userCredentials,
  } = useHandleCreateDetailsSubmit();

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
                handleCreateDetailsChange,
                handleCreateDetailsSubmit,
              }}
            />
          </Div>
        </>
      )}
    </>
  );
};

export default CreateDetailsForm;
