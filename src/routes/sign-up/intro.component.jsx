import { Div } from "../../styles/div/div.styles";
import { H2, RedH2Underline } from "../../styles/h2/h2.styles";
import { StyledLink } from "../../styles/link/link.styles";

import { refundsPath } from "../../strings/strings";

const Intro = () => (
  <Div>
    <H2>Do Not have an account?</H2>
    <p>please follow the instructions below to sign up!</p>
    <RedH2Underline>100% money back guarantee for 30 days!</RedH2Underline>
    <p>
      please see our <StyledLink to={refundsPath}>refunds policy</StyledLink> for full
      details!
    </p>
  </Div>
);

export default Intro;
