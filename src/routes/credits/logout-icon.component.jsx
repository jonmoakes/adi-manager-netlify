import { CreditsLinkDiv } from "../../styles/div/div.styles";
import { LowercaseHref } from "../../styles/a/a.styles";

const LogoutIcon = () => (
  <CreditsLinkDiv>
    <span>
      Log Out icon by:
      <br />
      <LowercaseHref href="https://www.flaticon.com" title="Cursor Creative">
        Cursor Creative
      </LowercaseHref>{" "}
      from{" "}
      <LowercaseHref href="https://www.flaticon.com/" title="Flaticon">
        www.flaticon.com
      </LowercaseHref>
    </span>
  </CreditsLinkDiv>
);

export default LogoutIcon;
