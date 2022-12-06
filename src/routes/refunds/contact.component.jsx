import { Div } from "../../styles/div/div.styles";
import { StyledLink } from "../../styles/link/link.styles";

import { contactPath } from "../../strings/strings";

const Contact = () => (
  <Div>
    <p>
      if you have any questions, don't hesitate to{" "}
      <StyledLink to={contactPath}>Contact me</StyledLink>!
    </p>
  </Div>
);

export default Contact;
