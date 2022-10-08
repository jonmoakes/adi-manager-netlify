import { Link } from "react-router-dom";

import { Container } from "../../styles/container/container.styles";
import { Div } from "../../styles/div/div.styles";
import { Heading } from "../../styles/h1/h1.styles";

import PriceInfo from "./price-info.component";
import CancelAndRefund from "./cancel-and-refund.component";
import StripeInfo from "./stripe-info.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import { aboutMePath } from "../../strings/strings";

const Pricing = () => (
  <Container>
    <Div>
      <Heading>Pricing</Heading>
    </Div>

    <PriceInfo />
    <CancelAndRefund />
    <StripeInfo />

    <Div>
      <Link to={aboutMePath}>
        <CustomButton>About Me</CustomButton>
      </Link>
    </Div>
  </Container>
);

export default Pricing;
