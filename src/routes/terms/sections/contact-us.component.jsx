import { Div } from "../../../styles/div/div.styles";
import { H2Underline } from "../../../styles/h2/h2.styles";
import { StyledLink } from "../../../styles/link/link.styles";

import { contactPath, privacyPolicyPath } from "../../../strings/strings";

const ContactUs = () => (
  <Div>
    <H2Underline>CONTACT US</H2Underline>
    <p>
      in order to resolve a complaint regarding the site or to receive further
      information regarding the use of the site, please contact us using our
      site's <StyledLink to={contactPath}>contact form</StyledLink>.
    </p>
    <p>
      please see our{" "}
      <StyledLink to={privacyPolicyPath}>privacy policy</StyledLink> to see how
      we handle your data protection.
    </p>
  </Div>
);

export default ContactUs;
