import { Div } from "../../styles/div/div.styles";
import { StyledLink } from "../../styles/link/link.styles";

import { cookiePolicyPath } from "../../strings/strings";

const SectionOne = () => (
  <Div>
    <h2>1. Policy statement:</h2>
    <p>
      1.1: Everyone has rights with regard to how their personal information is
      handled. During the course of our activities we will collect, store and
      process personal information about our web site visitors - See ({" "}
      <StyledLink to={cookiePolicyPath}>Cookies</StyledLink> ) and information
      entered into our contact form once the "send email" button is pressed. We
      recognise the need to treat it in an appropriate and lawful manner.
    </p>
    <p>
      1.2: The information, which may be held on paper or on a computer or other
      media, is subject to certain legal safeguards specified in the Data
      Protection Act 1998 (the Act) and other regulations. The Act imposes
      restrictions on how we may use that information.
    </p>
  </Div>
);

export default SectionOne;
