import { Div } from "../../styles/div/div.styles";
import { StyledLink } from "../../styles/link/link.styles";
import { Href } from "../../styles/a/a.styles";
import { HighlightText } from "../../styles/span/span.styles";
import { RedH2Underline } from "../../styles/h2/h2.styles";

import {
  contactPath,
  refundsPath,
} from "../../strings/strings";

const CancelAndRefund = () => (
  <Div>
    <RedH2Underline>easily Cancel Anytime!</RedH2Underline>
    <p>
      i don't know about you, but nothing annoys me more than websites / apps,
      that make it deliberately difficult to cancel a subscription - normally by
      making the cancel page hard to find or omitting it altogether!
    </p>
    <p>
      so I wanted to make it simple. thanks to partnering with{" "}
      <Href href="https://stripe.com/gb">stripe</Href>, the ADI manager offers your
      own personal customer portal, where you can easily{" "}
      <HighlightText>Cancel at any time</HighlightText> in just a few clicks
      from your account page. once cancelled, your subscription continues to the
      end of your current billing period.
    </p>
    <RedH2Underline>There Is Nothing To Lose!</RedH2Underline>
    <p>
      <HighlightText>within 30 days of purchase</HighlightText>, you are not
      completely satisfied, simply <StyledLink to={contactPath}>Contact Me</StyledLink> and
      ask for a full refund -<br />
      <HighlightText>No Questions Asked</HighlightText>!
    </p>
    <p>
      please see the <StyledLink to={refundsPath}>refunds policy</StyledLink> for more info!
    </p>
  </Div>
);

export default CancelAndRefund;
