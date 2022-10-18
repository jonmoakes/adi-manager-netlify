import { Link } from "react-router-dom";

import CustomButton from "../../components/custom-button/custom-button.component";

import { Container } from "../../styles/container/container.styles";
import { Div, RotateDiv } from "../../styles/div/div.styles";
import { Heading } from "../../styles/h1/h1.styles";
import { MeImage } from "../../styles/image/image.styles";
import { Href } from "../../styles/a/a.styles";

import { contactPath } from "../../strings/strings";

import ImageJpg from "../../assets/me.jpg";

const AboutMePage = () => (
  <Container>
    <Div>
      <Heading>About Me</Heading>
    </Div>
    <RotateDiv>
      <p>Hi there!</p>
      <p>thanks for visiting the ADI Manager Website!</p>
      <p>my name is jonathan oakes and I'm 41 years old.</p>
      <p>
        i was a driving instructor myself from 2009 - 2018, first with AA
        Driving School then branching out as an independent in 2013.
      </p>
      <p>after leaving the industry, I became a self taught web developer.</p>
      <p>
        i initially focused on developing{" "}
        <Href href="https://www.apple.com/uk/swift/">Swift</Href> apps.
      </p>
      <p>
        the perfect project to build myself was the app that I wish I had been
        able to use when I was instructing!
      </p>
      <p>
        this project became the original ADI Mangager that was available only on
        iOS.
      </p>
      <p>
        i published several other apps to the apple app store, but i eventually
        grew tired of only developing applications for Apple Products, so i put
        all my energies into specialising in{" "}
        <Href href="https://reactjs.org/">React</Href> - a facebook developed{" "}
        <Href href="https://en.wikipedia.org/wiki/JavaScript">javascript</Href>{" "}
        library for creating lightning fast applications on almost any device!
      </p>
      <p>this very app is written in react!</p>
      <p>
        I'm currently working freelance and i am based in stoke-on-trent and I
        am interested in all things tech!
      </p>
      <p>
        i also love the NFL ( A{" "}
        <Href href="https://www.chicagobears.com/">Chicago Bears</Href> Fan - if
        you think teaching learners is stressful, you should try following the
        Bears haha! ) and{" "}
        <Href href="https://www.formula1.com/">Formula 1</Href>.
      </p>

      <MeImage srcSet={ImageJpg} alt="profile picture" />
    </RotateDiv>

    <Div>
      <p>
        please take a look at my main website{" "}
        <Href href="https://www.solaris-apps.co.uk">Solaris Apps</Href> to see
        some of my other work!
      </p>
      <p>if you have any questions or feedback then please don't hesitate to</p>
      <p>&darr;&darr;</p>
    </Div>

    <Div>
      <Link to={contactPath}>
        <CustomButton>Contact</CustomButton>
      </Link>
    </Div>
  </Container>
);

export default AboutMePage;
