import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import useHandleCreateCustomer from "../../hooks/sign-up/use-handle-create-customer";

import { selectIsLoading } from "../../store/loader/loader.selector";
import { selectErrorMessage} from "../../store/error/error.selector";
import { clearCustomerDetails } from "../../store/customer/customer.action";

import Loader from "../../components/loader/loader.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import { NoHeaderFooterContainer } from "../../styles/container/container.styles";
import { Div } from "../..//styles/div/div.styles";
import { Heading } from "../../styles/h1/h1.styles";
import { StyledLink } from "../../styles/link/link.styles";

import { createLoginDetailsPath, contactPath } from "../../strings/strings";

const CreateCustomer = () => {
  useHandleCreateCustomer();
  const isLoading = useSelector(selectIsLoading);
  const errorMessage = useSelector(selectErrorMessage);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const tryAgain = () => {
    dispatch(clearCustomerDetails());
    navigate(createLoginDetailsPath);
  }

  return (
    <>
      {isLoading && <Loader />}
      <NoHeaderFooterContainer>
        {!errorMessage ?
          <Div>
            <Heading>creating customer.... please wait</Heading>
          </Div>
        : 
          <Div>
            <Heading>sorry, there was an error.</Heading>
            <p>please tap the button below to try again or <StyledLink to={contactPath}>contact us</StyledLink> if the problem persists.</p>
            <p>the error message received was:</p>
            <p>{errorMessage}</p>
            <CustomButton onClick={tryAgain}>tap to try again</CustomButton>
          </Div> 
        }
      </NoHeaderFooterContainer>
    </>
  );
};

export default CreateCustomer;
