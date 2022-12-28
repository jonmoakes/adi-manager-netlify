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
    <p>
      please note: if you are using the app as a progressive web app ( where you
      have added the website to your home screen ), to return to the account
      page when you have finished in the customer portal, please do not tap on
      the "return to ADI Manager" link.
    </p>
    <p>instead, tap your browser back button or "done" button.</p>
    <hr />
  </>
);

export default Intro;
