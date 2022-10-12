import { Div } from "../../styles/div/div.styles";
import { StyledLink } from "../../styles/link/link.styles";

import { termsPath } from "../../strings/strings";

const TermsAndConditionsConfirm = () => (
    <Div>
      <>
        <p>
          please make sure you have read the{" "}
          <StyledLink to={termsPath}>Terms & Conditions</StyledLink> before starting the
          sign up process.
        </p>
        <p>
          the ADI Manager is designed for United Kingdom based driving
          instructors and potential driving instructors.
        </p>
        <p>tap the button below to start when you're ready!</p>
      </>
    </Div>
  );


export default TermsAndConditionsConfirm;
