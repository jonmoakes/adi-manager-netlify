import { HighlightText } from "../../../styles/span/span.styles";
import { StyledLink } from "../../../styles/link/link.styles";

import { contactPath, refundsPath } from "../../../strings/strings";

const RefundsInfo = () => (
  <>
    <h2>Refunds:</h2>
    <p>
      if you are within 30 days of purchase, you can can request a full refund -
      No questions asked!
    </p>
    <p>
      you do not need to cancel your subscription using the method above for
      this method.
    </p>
    <p>
      please simply <StyledLink to={contactPath}>Contact me</StyledLink> and
      request a refund, providing your{" "}
      <HighlightText>billing email address</HighlightText> and your{" "}
      <HighlightText>customer id</HighlightText>. both of these can be found on
      the account page near the bottom of that page.
    </p>
    <p>
      I will confirm in writing via email your cancellation request and your
      data will be removed immediately and your refund processed. for more
      details about refunds, please see the{" "}
      <StyledLink to={refundsPath}>refunds policy</StyledLink>.
    </p>
    <hr />
  </>
);

export default RefundsInfo;
