import { Link } from "react-router-dom";

import { myAccountPath, customerPortalPath } from "../../../strings/strings";

const EmailChangeDetected = () => (
  <>
    <h2>Login & Billing emails are different:</h2>
    <p>
      please note, as your login and billing emails are different, this means
      that you have just ( or at some point ){" "}
      <span>
        followed the instructions to change your billing email in the customer
        portal, or followed the instructions to update your login email by
        tapping on the "update email" button in the account page.
      </span>
    </p>
    <p>
      please note that your billing and login email are two separate things.
    </p>
    <p>
      there is nothing wrong with this, but if you would like your login email
      to match your billing email, please do the following:
    </p>

    <p>
      if you wish to update your login email to match your billing email, please
      tap on the "update login email" button on the{" "}
      <Link to={myAccountPath}>account page</Link> and update your login email
      address to be the same as the billing address on this page by following
      the instructions there.
    </p>
    <p>
      if you wish to update your billing email to match your login email please
      do the following:
    </p>
    <p>
      tap the "open customer portal" button on the{" "}
      <Link to={customerPortalPath}>customer portal page</Link> and then update
      your billing address to match the login address on this page by following
      the instructions there.
    </p>
    <p>
      if you're happy to keep the emails separate (ie your login email is
      different from your billing email ) please disregard this message.
    </p>
  </>
);

export default EmailChangeDetected;
