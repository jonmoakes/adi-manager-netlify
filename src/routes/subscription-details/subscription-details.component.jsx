import { Link } from "react-router-dom";

import CustomerId from "./sections/customer-id.component";
import SubscriptionId from "./sections/subscription-id.component";
import UserId from "./sections/user-id.component";
import CurrentPeriodStart from "./sections/current-period-start.component";
import CurrentPeriodEnds from "./sections/current-period-ends.component";
import SubscriptionStatus from "./sections/subscription-status.component";
import Emails from "./sections/emails.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import { Container } from "../../styles/container/container.styles";
import { Div } from "../../styles/div/div.styles";
import { Heading } from "../../styles/h1/h1.styles";
import { StyledLink } from "../../styles/link/link.styles";

const SubscriptionDetailsPage = () => (
  <Container>
    <Div>
      <Heading>your subscription details</Heading>
    </Div>

    <Div>
      should you need to
      <br />
      <StyledLink to="/contact-me">contact support</StyledLink>,
      <br />
      you may be requested to provide some or all of the details below. You can
      copy and paste them into any message if required.
    </Div>

    <Div>
      <>
        <CustomerId />
        <SubscriptionId />
        <UserId />
        <CurrentPeriodStart />
        <CurrentPeriodEnds />
        <SubscriptionStatus />
        <Emails />
      </>
    </Div>

    <Div>
      <Link to="/my-account">
        <CustomButton>back to account page</CustomButton>
      </Link>
    </Div>
  </Container>
);

export default SubscriptionDetailsPage;
