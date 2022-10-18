import SignUpChooseMonthOrYear from "./sign-up-choose-month-or-year.component";

import { Container } from "../../styles/container/container.styles";
import { Div } from "../../styles/div/div.styles";
import { StyledLink } from "../../styles/link/link.styles";
import { H2, RedH2Underline } from "../../styles/h2/h2.styles";

import { refundsPath, termsPath } from "../../strings/strings";

const SignUp = () => (
  <Container>
    <Div>
      <H2>Do Not have an account?</H2>
      <p>please follow the instructions below to sign up!</p>
      <RedH2Underline>100% money back guarantee for 30 days!</RedH2Underline>
      <p>
        please see our <StyledLink to={refundsPath}>refunds policy</StyledLink>{" "}
        for full details!
      </p>
    </Div>

    <Div>
      <>
        <p>
          please make sure you have read the{" "}
          <StyledLink to={termsPath}>Terms & Conditions</StyledLink> before
          starting the sign up process.
        </p>
        <p>
          the ADI Manager is designed for United Kingdom based driving
          instructors and potential driving instructors.
        </p>
        <p>tap the button below to start when you're ready!</p>
      </>
    </Div>
    <SignUpChooseMonthOrYear />
  </Container>
);

export default SignUp;
