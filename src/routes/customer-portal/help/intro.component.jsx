import { HighlightText } from "../../../styles/span/span.styles";
const Intro = () => (
  <>
    <p>
      please tap the button at the bottom of the page to launch your customer
      portal.
    </p>
    <p>in the customer portal, you can:</p>
    <ul>
      <HighlightText>
        <li>view your current subscription plan.</li>
      </HighlightText>
      <br />
      <HighlightText>
        <li>view and download your receipts & invoices.</li>
      </HighlightText>
      <br />
      <HighlightText>
        <li>delete your account.</li>
      </HighlightText>
      <br />
      <HighlightText>
        <li>change your billing email address.</li>
      </HighlightText>
      <br />
      <HighlightText>
        <li>update your payment method.</li>
      </HighlightText>
      <br />
      <HighlightText>
        <li>authenticate your payment method.</li>
      </HighlightText>
      <br />
    </ul>
    <hr />
  </>
);

export default Intro;
