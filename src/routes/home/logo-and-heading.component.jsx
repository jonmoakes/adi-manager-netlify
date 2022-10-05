import LogoPng from "../../assets/header/adi-logo.png";
import LogoWebP from "../../assets/header/adi-logo.webp";

import { CompatibleWith } from "../../styles/h1/h1.styles";
import { Div, SlideInDiv } from "../../styles/div/div.styles";
import { HomePageLogoImage } from "../../styles/image/image.styles";

const LogoAndHeading = () => (
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
);

export default LogoAndHeading;
