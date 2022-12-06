import { Div } from "../../styles/div/div.styles";
import { HighlightText } from "../../styles/span/span.styles";
import { Href } from "../../styles/a/a.styles";

const WhenWillReceiveRefund = () => (
  <Div>
    <h2>when will i receive my refund?</h2>
    <p>
      our billing partner <Href href="https://stripe.com/gb">stripe</Href>{" "}
      handles refunds. they will submit refund requests to your bank or card
      issuer. You will see the refund as a credit{" "}
      <HighlightText>
        Approximately 5-10 business after you cancel
      </HighlightText>{" "}
      , depending upon the bank. Refunds can’t be canceled after they’re issued.
      Disputes and chargebacks aren’t possible on credit card charges that are
      fully refunded.
    </p>

    <p>
      We’ll also send an email to your registered billing email address
      notifying you of the refund.
    </p>
    <p>
      Some refunds ( those issued shortly after the original charge ) appear in
      the form of a reversal instead of a refund. In the case of a reversal, the
      original charge drops off your statement, and a separate credit isn’t
      issued.
    </p>
  </Div>
);

export default WhenWillReceiveRefund;
