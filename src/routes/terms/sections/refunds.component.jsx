import { Div } from "../../../styles/div/div.styles";
import { H2Underline } from "../../../styles/h2/h2.styles";
import { StyledLink } from "../../../styles/link/link.styles";

import { refundsPath } from "../../../strings/strings";

const Refunds = () => (
  <Div>
    <H2Underline>REFUNDS:</H2Underline>
    <p>
      you can request a full refund within 30 days of your original purchase
      date.
    </p>
    <p>
      please see the <StyledLink to={refundsPath}>refunds</StyledLink> policy
      for full details!
    </p>
  </Div>
);

export default Refunds;
