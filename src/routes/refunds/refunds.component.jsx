import Intro from "./intro.component";
import Info from "./info.component";
import Instructions from "./instructions.component";
import Notes from "./notes.component";
import WhenWillReceiveRefund from "./when-will-receive-refund.component";
import Contact from "./contact.component";

import { Container } from "../../styles/container/container.styles";
import { Div } from "../../styles/div/div.styles";
import { Heading } from "../../styles/h1/h1.styles";

const Refunds = () => (
  <Container>
    <Div>
      <Heading>Refunds Policy</Heading>
    </Div>

    <Intro />
    <Info />
    <Instructions />
    <Notes />
    <WhenWillReceiveRefund />
    <Contact />
  </Container>
);

export default Refunds;
