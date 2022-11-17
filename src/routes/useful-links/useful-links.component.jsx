import { Container } from "../../styles/container/container.styles";
import { Div, UsefulLinksDiv } from "../../styles/div/div.styles";
import {
  DvsaButton,
  HighwayCodeButton,
  GovUkButton,
  DvlaButton,
} from "../../styles/buttons/buttons.styles";
import { Heading } from "../..//styles/h1/h1.styles";
import { StyledLink } from "../../styles/link/link.styles";

import { contactPath } from "../../strings/strings";

const UsefulLinksPage = () => (
  <Container>
    <Div>
      <Heading>Useful Links</Heading>
    </Div>

    <Div>
      <p>here are some useful links for you to use!</p>
      <p>
        please <StyledLink to={contactPath}>Contact Me</StyledLink> if you have
        any more suggestions to add :)
      </p>
      <UsefulLinksDiv>
        <a href="https://www.gov.uk/government/organisations/driver-and-vehicle-standards-agency">
          <DvsaButton>DVSA</DvsaButton>
        </a>
        <a href="https://www.gov.uk/guidance/the-highway-code">
          <HighwayCodeButton>The Highway Code</HighwayCodeButton>
        </a>
        <a href="https://www.gov.uk/browse/driving">
          <GovUkButton>Gov.uk - Driving</GovUkButton>
        </a>
        <a href="https://www.gov.uk/government/organisations/driver-and-vehicle-licensing-agency">
          <DvlaButton>DVLA</DvlaButton>
        </a>
      </UsefulLinksDiv>
    </Div>
  </Container>
);

export default UsefulLinksPage;
