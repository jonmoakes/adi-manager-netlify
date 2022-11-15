import { HighlightText } from "../../../styles/span/span.styles";
import { StyledLink } from "../../../styles/link/link.styles";

import { contactPath } from "../../../strings/strings";

const AuthenticatePaymentInfo = () => (
  <>
    <h2>authenticate your payment method:</h2>
    <p>
      recently, card transactions often make use of 3D Secure technology to
      authenticate a payment and authorise a transaction.
    </p>
    <p>
      should you need to do this, please find the "
      <HighlightText>billing history</HighlightText>" section at the bottom,
      then tap on the required date that is marked "
      <HighlightText>unpaid</HighlightText>".
    </p>
    <p>
      this will take you to a secure,{" "}
      <a href="https://stripe.com/gb/customers">stripe</a> hosted link where you
      can attempt to authenticate your payment.
    </p>
    <p>
      tap the "<HighlightText>confirm payment</HighlightText>" button and then
      follow the instructions to authenticate your card and complete payment.
      you will be asked to verify your identity with a push notification, a text
      message, or another method chosen by your bank.
    </p>
    <p>
      please remember to{" "}
      <HighlightText>pay an unpaid invoices within 7 days</HighlightText> of the
      billing date in order that you do not have your subscription cancelled and
      your account deleted. please{" "}
      <StyledLink to={contactPath}>Contact Me</StyledLink> if you have any
      questions.
    </p>
    <hr />
  </>
);

export default AuthenticatePaymentInfo;
