import SectionOne from "./section-one.component";
import SectionTwo from "./section-two.component";
import SectionThree from "./section-three.component";
import SectionFour from "./section-four.component";
import SectionFive from "./section-five.component";
import SectionSix from "./section-six.component";
import SectionSeven from "./section-seven.component";

import { Container } from "../../styles/container/container.styles";
import { Div } from "../../styles/div/div.styles";
import { Heading } from "../../styles/h1/h1.styles";

const CookiePolicy = () => (
  <Container>
    <Div>
      <Heading>Cookie Policy:</Heading>
    </Div>
    <SectionOne />
    <SectionTwo />
    <SectionThree />
    <SectionFour />
    <SectionFive />
    <SectionSix />
    <SectionSeven />
  </Container>
);

export default CookiePolicy;
