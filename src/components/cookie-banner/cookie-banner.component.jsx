import CookieConsent from "react-cookie-consent";

import useFireSwal from "../../hooks/use-fire-swal";

import { StyledLink } from "../../styles/link/link.styles";

import { cookieThanksMessage } from "../../strings/strings";

const CookieBanner = () => {
  const { fireSwal } = useFireSwal();

  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept & Close"
      cookieName="accept-cookies"
      style={{ background: "black" }}
      buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
      expires={150}
      onAccept={() => {
        fireSwal("success", cookieThanksMessage, "", 1500, false, true);
      }}
    >
      Cookies: This site uses cookies. By continuing to use this website, you
      agree to their use. To find out more, including how to control cookies,
      see here: <StyledLink to="/cookie-policy">Cookie Policy</StyledLink>
    </CookieConsent>
  );
};

export default CookieBanner;
