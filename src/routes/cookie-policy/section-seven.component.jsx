import { Div } from "../../styles/div/div.styles";
import { StyledLink } from "../../styles/link/link.styles";

import { contactPath } from "../../strings/strings";

const SectionSeven = () => (
  <Div>
    <p>7: Our details:</p>
    <p>7.1: This website is owned and operated by Jonathan Oakes.</p>
    <p>
      7.2: You can contact us Using our website{" "}
      <StyledLink to={contactPath}>contact form</StyledLink>
    </p>
    <p>
      Return <StyledLink to="/">home</StyledLink>
    </p>
  </Div>
);

export default SectionSeven;
