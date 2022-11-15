import { HighlightText } from "../../../styles/span/span.styles";
import { StyledLink } from "../../../styles/link/link.styles";

import { myAccountPath } from "../../../strings/strings";

const UpdateBillingEmailInfo = () => (
  <>
    <h2>Update your billing email address:</h2>
    <p>
      under "<HighlightText>billing information</HighlightText>" you will see
      your current billing email address.
    </p>
    <p>
      tap "<HighlightText>update information</HighlightText>" and enter in the
      email you wish to use for your billing address.
    </p>
    <p>then tap save.</p>
    <p>
      note this will{" "}
      <HighlightText>not change your login address</HighlightText> as they are
      two separate things. you can change your login address in the{" "}
      <StyledLink to={myAccountPath}>account page</StyledLink>. there, you will
      find the button to update your login email address at the bottom of the
      page
    </p>
    <p>
      please note that this is not mandatory to have the same login and billing
      email address.
    </p>
    <hr />
  </>
);

export default UpdateBillingEmailInfo;
