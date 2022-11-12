import useAddSubscriptionDataToFirestore from "./use-add-subscription-data-to-firestore";

import Intro from "./sections/intro.component";
import Navigation from "./sections/navigation.component";
import InstructionsForUse from "./sections/instructions-for-use.component";
import Pwa from "./sections/pwa.component";
import ContactAndEnter from "./sections/contact-and-enter.component";

import { NoHeaderFooterContainer } from "../../styles/container/container.styles";
import { Div } from "../../styles/div/div.styles";
import { Heading } from "../../styles/h1/h1.styles";

const WelcomePage = () => {
  useAddSubscriptionDataToFirestore();

  return (
    <NoHeaderFooterContainer>
      <Div>
        <Heading>Welcome!</Heading>
      </Div>
      <Intro />
      <Navigation />
      <InstructionsForUse />
      <Pwa />
      <ContactAndEnter />
    </NoHeaderFooterContainer>
  );
};

export default WelcomePage;
