import Intro from "./intro.component";
import SignUpIcon from "./sign-up-icon.component";
import LoginIcon from "./login-icon.component";
import InfoIcon from "./info-icon.component";
import CreditCardIcon from "./credit-card-icon.component";
import EmailIcon from "./email-icon.component";
import DiaryIcon from "./diary-icon.component";
import SteeringWheelIcon from "./steering-wheel-icon.component";
import PoundIcon from "./pound-icon.component";
import AccountIcon from "./account-icon.component";
import LinksIcon from "./links-icon.component";
import TextMessageIcon from "./text-message-icon.component";
import StarIcon from "./star-icon.component";
import SliderIcon from "./slider-icon.component";
import LogoutIcon from "./logout-icon.component";

import { Container } from "../../styles/container/container.styles";
import { Heading } from "../../styles/h1/h1.styles";
import { Div } from "../../styles/div/div.styles";

const ImageCreditsPage = () => (
  <Container>
    <Div>
      <Heading>Credits:</Heading>
    </Div>

    <Intro />
    <SignUpIcon />
    <LoginIcon />
    <InfoIcon />
    <CreditCardIcon />
    <EmailIcon />
    <DiaryIcon />
    <SteeringWheelIcon />
    <PoundIcon />
    <AccountIcon />
    <LinksIcon />
    <TextMessageIcon />
    <StarIcon />
    <SliderIcon />
    <LogoutIcon />
  </Container>
);

export default ImageCreditsPage;
