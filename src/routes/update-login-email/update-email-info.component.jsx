import { Div } from "../../styles/div/div.styles";

import { HighlightText } from "../../styles/span/span.styles";
import { StyledLink } from "../../styles/link/link.styles";

import { customerPortalPath } from "../../strings/strings";

const UpdateEmailInfo = () => {
  return (
    <Div>
      <h2>Important Info - Please Read!</h2>

      <p>
        when tapping the update login email button, for security reasons, if you
        have been signed in for a while, the app will{" "}
        <HighlightText>log you out</HighlightText>. please then{" "}
        <HighlightText>log back in</HighlightText> again to create a fresh user
        session.
      </p>
      <p>
        the reason for this is so that if you left your device open and logged
        in whilst you weren't around, no one would be able to change your email
        address without you knowing as they would be unable to log in ( unless
        they knew your login details of course! ).
      </p>

      <p>
        the app will automatically decide if enough time has elapsed when logged
        in for the procedure to be necessary. otherwise, your email will be
        changed as soon as you click the button.
      </p>

      <hr />

      <p>
        should you wish to change your{" "}
        <HighlightText>Billing Email Address</HighlightText> ( ie, where your
        invoices / receipts will be sent ), please go to the{" "}
        <StyledLink to={customerPortalPath}>Customer Portal</StyledLink> and
        follow the instructions on that page.
      </p>
    </Div>
  );
};

export default UpdateEmailInfo;
