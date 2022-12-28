import { Div } from "../../styles/div/div.styles";
import { StyledLink } from "../../styles/link/link.styles";

import { contactPath } from "../../strings/strings";

const SectionTwo = () => (
  <Div>
    <h2>2. Status of the policy:</h2>
    <p>
      2.1: This policy sets out our rules on data protection and the legal
      conditions that must be satisfied in relation to the obtaining, handling,
      processing, storage, transportation and destruction of personal
      information.
    </p>
    <p>2.2: The Data:</p>
    <p>
      Protection Compliance Manager is responsible for ensuring compliance with
      the Act and with this policy. That post is held by Jonathan Oakes. you can
      contact him using the link below. Any questions or concerns about the
      operation of this policy should be referred in the first instance to the
      afformentioned person.
    </p>
    <p>
      <StyledLink to={contactPath}>contact me</StyledLink>
    </p>
    <p>
      2.3: If you consider that the policy has not been followed in respect of
      personal data about yourself or others you should raise the matter the
      Data Protection Compliance Manager.
    </p>
  </Div>
);

export default SectionTwo;
