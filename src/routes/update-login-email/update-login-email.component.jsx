import { useSelector } from "react-redux";

import { selectErrorMessage } from "../../store/error/error.selector";
import { selectIsLoading } from "../../store/loader/loader.selector";

import FetchError from "../../components/fetch-error/fetch-error.component";
import UpdateEmailInfo from "./update-email-info.component";
import UpdateEmailInstructions from "./update-email-instructions.component";
import EmailChangeInputs from "./email-change-inputs.component";
import Loader from "../../components/loader/loader.component";

import { Container } from "../../styles/container/container.styles";
import { Div } from "../../styles/div/div.styles";
import { Heading } from "../../styles/h1/h1.styles";

const UpdateLoginEmail = () => {
  const errorMessage = useSelector(selectErrorMessage);
  const isLoading = useSelector(selectIsLoading);

  return (
    <Container>
      {isLoading && <Loader />}
      <Div>
        <Heading>update your Log In email address</Heading>
      </Div>

      {errorMessage ? (
        <FetchError />
      ) : (
        <>
          <UpdateEmailInfo />
          <UpdateEmailInstructions />
          <EmailChangeInputs />
        </>
      )}
    </Container>
  );
};

export default UpdateLoginEmail;
