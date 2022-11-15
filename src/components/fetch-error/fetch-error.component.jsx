import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { selectErrorMessage } from "../../store/error/error.selector";
import { clearErrorMessage } from "../../store/error/error.action";
import CustomButton from "../custom-button/custom-button.component";

import { ErrorDiv } from "../../styles/div/div.styles";
import { H2 } from "../../styles/h2/h2.styles";

const FetchError = () => {
  const errorMessage = useSelector(selectErrorMessage);
  const dispatch = useDispatch();
  const location = useLocation();

  return (
    <>
      {errorMessage && (
        <ErrorDiv>
          <h1> &#128533;</h1>
          <H2>sorry, there has been an Error</H2>
          {errorMessage && <p>{errorMessage}</p>}
          <p>some things to try:</p>
          <ul>
            <li>Check Your Internet connection.</li>
            <li>reload the page and try again.</li>
            <li>
              you could also try clearing your browser cache, then reloading the
              page and trying again.
            </li>
            <li>please tap the ok button below and then try again.</li>
          </ul>
          {location.pathname !== "/contact" && (
            <p>please Contact Me if the error persists.</p>
          )}
          <p>please tap the ok button to continue</p>
          <CustomButton onClick={() => dispatch(clearErrorMessage())}>
            ok
          </CustomButton>
        </ErrorDiv>
      )}
    </>
  );
};

export default FetchError;
