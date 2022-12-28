import { Div } from "../../../styles/div/div.styles";
import { H2Underline } from "../../../styles/h2/h2.styles";
import { StyledLink } from "../../../styles/link/link.styles";

import { contactPath } from "../../../strings/strings";

const Cancellation = () => (
  <Div>
    <H2Underline>CANCELLATION:</H2Underline>
    <p>
      you can cancel your subscription at any time by logging into your account
      and going to the "customer portal" section with the account page, or
      contacting us using the contact information provided below.
    </p>
    <p>
      your cancellation will take effect at the end of the current paid term,
      which is visible on the "my account" section of the site. if you are
      unsatisfied with our services, please contact us using our website contact
      form with the link below.
    </p>
    <p>
      <StyledLink to={contactPath}>contact me</StyledLink>
    </p>
  </Div>
);

export default Cancellation;
