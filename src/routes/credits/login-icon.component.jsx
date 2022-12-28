import { CreditsLinkDiv } from "../../styles/div/div.styles";
import { LowercaseHref } from "../../styles/a/a.styles";

const LoginIcon = () => (
  <CreditsLinkDiv>
    <span>
      Login icon by:
      <br />
      <LowercaseHref href="https://www.flaticon.com/authors/srip" title="srip">
        srip
      </LowercaseHref>{" "}
      from{" "}
      <LowercaseHref href="https://www.flaticon.com/" title="Flaticon">
        www.flaticon.com
      </LowercaseHref>
    </span>
  </CreditsLinkDiv>
);

export default LoginIcon;
