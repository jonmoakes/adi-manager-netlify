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

const PrivacyPolicy = () => (
  <Container>
    <Div>
      <Heading>Privacy Policy:</Heading>
    </Div>
    <Div>
      <h2>ADI Manager:</h2>
      <h2>06/12/2022</h2>
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

export default PrivacyPolicy;
