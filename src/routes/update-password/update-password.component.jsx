import { useSelector } from "react-redux";

import { selectErrorMessage } from "../../store/error/error.selector";
import { selectIsLoading } from "../../store/loader/loader.selector";

import Loader from "../../components/loader/loader.component";
import FetchError from "../../components/fetch-error/fetch-error.component";
import UpdatePasswordInfo from "./update-password-info.component";
import PasswordChangeInputs from "./password-change-inputs.component";

import { Container } from "../../styles/container/container.styles";
import { Div } from "../../styles/div/div.styles";
import { Heading } from "../../styles/h1/h1.styles";

const UpdatePassword = () => {
  const { isLoading } = useSelector(selectIsLoading);
  const errorMessage = useSelector(selectErrorMessage);

  return (
    <Container>
      {isLoading && <Loader />}
      <Div>
        <Heading>update your password</Heading>
      </Div>

      {errorMessage ? (
        <FetchError />
      ) : (
        <>
          <UpdatePasswordInfo />
          <PasswordChangeInputs />
        </>
      )}
    </Container>
  );
};

export default UpdatePassword;
