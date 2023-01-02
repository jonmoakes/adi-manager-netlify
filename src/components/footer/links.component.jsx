import { PrivacyDiv } from "../../styles/div/div.styles";
import { StyledLink } from "../../styles/link/link.styles";
import { SolarisLink } from "../../styles/a/a.styles";

const Links = () => (
  <>
    <PrivacyDiv>
      <span>
        <StyledLink to="/privacy-policy">Privacy Policy</StyledLink>
      </span>
    </PrivacyDiv>
    <PrivacyDiv>
      <span>
        <StyledLink to="/cookie-policy">Cookie Policy</StyledLink>
      </span>
    </PrivacyDiv>
    <PrivacyDiv>
      <span>
        <StyledLink to="/credits">Credits</StyledLink>
      </span>
    </PrivacyDiv>
    <p>Copyright © solaris apps, 2023</p>
    <p>
      app design by{" "}
      <SolarisLink href="https://www.solaris-apps.co.uk">
        Solaris Apps
      </SolarisLink>
    </p>
  </>
);

export default Links;
