import { HighlightText } from "../../../styles/span/span.styles";
import { StyledLink } from "../../../styles/link/link.styles";

import { termsPath } from "../../../strings/strings";

const DeleteAccountInfo = () => (
  <>
    <h2>delete your account:</h2>
    <p>
      you can <HighlightText>delete your account</HighlightText> by tapping the{" "}
      <HighlightText>"cancel plan"</HighlightText> button in the portal.
    </p>
    <p>
      you will retain access to the app and all of your data until the end of
      your current billing period ( ie the end of the month or end of the year
      depending on what subscription you chose when signing up ).
    </p>
    <p>
      please note that once your subsciption has been cancelled at the end of
      your subscription period, all of your data will be lost and is not
      recoverable! This also applies even if you sign up to the app again with
      the same email address after your subscription expires - The data is not
      recoverable and would be treated as a brand new user account.
    </p>
    <p>
      please back up your data should you wish to retain it ( You Could email
      yourself each important entry for example ).
    </p>
    <p>
      you can also <HighlightText>renew your subscription</HighlightText> should
      you wish to after you have cancelled it by simply tapping the{" "}
      <HighlightText>"renew plan"</HighlightText> button and your subscription
      will carry on as normal.
    </p>
    <p>
      please <HighlightText>allow up to 48 hours</HighlightText> for all your
      data to be deleted from our database after you have cancelled your
      subscription and your billing period has ended.
    </p>
    <p>
      please see our full{" "}
      <StyledLink to={termsPath}>Terms & Conditions</StyledLink> for more
      information!
    </p>
    <hr />
  </>
);

export default DeleteAccountInfo;
