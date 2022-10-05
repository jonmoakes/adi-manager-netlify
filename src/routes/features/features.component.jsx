import { Container } from "../../styles/container/container.styles";
import { Div } from "../../styles/div/div.styles";
import { Heading } from "../../styles/h1/h1.styles";

import Intro from "./intro.component";
import DiarySection from "./diary-section.component";
import LessonsSection from "./lessons-section.component";
import IncomeExpensesSection from "./income-expenses-section.component";
import PupilsSection from "./pupils-section.component";
import UsefulLinksSection from "./useful-links-section.component";
import DataSynching from "./data-synching.component";
import Pricing from "./pricing.component";

const Features = () => (
  <Container>
    <Div>
      <Heading>App Features</Heading>
    </Div>

    <Intro />
    <DiarySection />
    <LessonsSection />
    <IncomeExpensesSection />
    <PupilsSection />
    <UsefulLinksSection />
    <DataSynching />
    <Pricing />
  </Container>
);

export default Features;
