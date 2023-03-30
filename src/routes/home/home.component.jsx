import ProgressiveImg from "../../components/progressive-image/progressive-image.component";

import { Container } from "../../styles/container/container.styles";
import {
  Div,
  SlideInDiv,
  ImageDiv,
  FeaturesDiv,
} from "../../styles/div/div.styles";
import { CompatibleWith } from "../../styles/h1/h1.styles";
import { RedH2Underline } from "../../styles/h2/h2.styles";
import { RedLi } from "../../styles/li/li.styles";
import { HomePageLogoImage } from "../../styles/image/image.styles";
import { Href } from "../../styles/a/a.styles";
import {
  FeaturesButton,
  SignUpLinkButton,
} from "../../styles/buttons/buttons.styles";
import { StyledLink } from "../../styles/link/link.styles";

import ImagePlaceHolder from "../../assets/image-placeholder.jpeg";
import LogoPng from "../../assets/header/adi-logo.png";
import LogoWebP from "../../assets/header/adi-logo.webp";

import { incomeTable } from "../../image-links/image-links";

import { featuresPath, signUpPath, refundsPath } from "../../strings/strings";

const Home = () => (
  <Container>
    <Div>
      <SlideInDiv>
        <picture>
          <source srcSet={LogoWebP} type="image/webp" />
          <source srcSet={LogoPng} type="image/png" />
          <HomePageLogoImage src={LogoPng} alt="driving instructor app logo" />
        </picture>
      </SlideInDiv>

      <CompatibleWith>
        Driving Instructor app for iPhone, iPad, Android, Windows and Mac.
      </CompatibleWith>
    </Div>
    <Div>
      <RedH2Underline>for the UK based ADI</RedH2Underline>
      <p>
        Looking for a comprehensive and easy to use tool to manage your driving
        instructor business? Look no further than the ADI Manager!
      </p>
      <p>
        Our app is the perfect solution for UK driving instructors who need to
        keep track of their lesson schedules, pupil information, and financials.
      </p>
      <p>
        With ADI Manager, you can quickly and easily add lessons to your diary,
        track pupil progress in key subjects, and manage your income and
        expenses with ease.
      </p>
      <p>
        Plus, our app is available on web and mobile, so you can access it from
        any device.
      </p>
      <p>your data is also synched instantly between your devices!</p>

      <p>
        Don't let the day to day tasks of running your business slow you down!
        streamline your operations with the ADI Manager today!
      </p>
    </Div>
    <Div>
      <p>Safely & securely store:</p>
      <ul>
        <RedLi>Appointments</RedLi>
        <RedLi>Lesson Information</RedLi>
        <RedLi>Income / Expenses Information</RedLi>
        <RedLi>Pupil Information</RedLi>
      </ul>
    </Div>
    <Div>
      <ImageDiv>
        <a href={incomeTable}>
          <ProgressiveImg
            src={incomeTable}
            alt="Income Table"
            placeholderSrc={ImagePlaceHolder}
          />
        </a>
      </ImageDiv>

      <RedH2Underline>Syncs All Your Data To Any Device!</RedH2Underline>
      <p>
        For example, maybe you like to use your phone / tablet device during the
        day, then your PC at night.
      </p>
      <p>
        all of your data that you input on your phone / tablet, is immediately
        available on any other device that you log into the app with!
      </p>
      <RedH2Underline>PWA Compliant:</RedH2Underline>
      <p>
        the ADI Manager is a Fully{" "}
        <Href href="https://web.dev/what-are-pwas/">Progressive Web App</Href> (
        PWA ) allowing you to install the app on your phone / tablet's home
        screen, eliminating the need for the app store!
        <br />( see the bottom of the page for the simple instructions ).
      </p>
      <p>
        It can also be used on any home PC / Mac so you can keep track of your
        business at home or on the move!
      </p>
    </Div>{" "}
    <FeaturesDiv>
      <StyledLink to={featuresPath}>
        <FeaturesButton>Features</FeaturesButton>
      </StyledLink>

      <p>OR</p>

      <StyledLink to={signUpPath}>
        <SignUpLinkButton>Sign Up</SignUpLinkButton>
      </StyledLink>

      <RedH2Underline>100% money back guarantee for 30 days!</RedH2Underline>
      <p>
        please see our <StyledLink to={refundsPath}>refunds policy</StyledLink>{" "}
        for full details!
      </p>
    </FeaturesDiv>
  </Container>
);

export default Home;
