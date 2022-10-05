import { PrivacyDiv } from "../../styles/div/div.styles";
import { FooterPageLink } from "../../styles/link/link.styles";
import { SolarisLink } from "../../styles/a/a.styles";

const Links = () => (
  <>
    <PrivacyDiv>
      <span>
        <FooterPageLink to="/privacy-policy">Privacy Policy</FooterPageLink>
      </span>
    </PrivacyDiv>
    <PrivacyDiv>
      <span>
        <FooterPageLink to="/cookie-policy">Cookie Policy</FooterPageLink>
      </span>
    </PrivacyDiv>
    <PrivacyDiv>
      <span>
        <FooterPageLink to="/credits">Credits</FooterPageLink>
      </span>
    </PrivacyDiv>
    <p>Copyright © solaris apps, 2022</p>
    <p>
      app design by{" "}
      <SolarisLink href="https://www.solaris-apps.co.uk">
        Solaris Apps
      </SolarisLink>
    </p>
  </>
);

export default Links;
