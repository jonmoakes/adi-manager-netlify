import Intro from "./intro.component";
import WebsiteInfo from "./website-info.component";
import Contact from "./contact.component";

import { Container } from "../../styles/container/container.styles";
import { Div } from "../../styles/div/div.styles";
import { Heading } from "../../styles/h1/h1.styles";

const AboutMePage = () => (
  <Container>
    <Div>
      <Heading>About Me</Heading>
    </Div>
    <Intro />
    <WebsiteInfo />
    <Contact />
  </Container>
);

export default AboutMePage;
