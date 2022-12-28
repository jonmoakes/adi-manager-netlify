import { CreditsLinkDiv } from "../../styles/div/div.styles";
import { LowercaseHref } from "../../styles/a/a.styles";

const TextMessageIcon = () => (
  <CreditsLinkDiv>
    <span>
      Text Message icon by:
      <br />
      <LowercaseHref href="https://smashicons.com/" title="Smashicons">
        Smashicons
      </LowercaseHref>{" "}
      from{" "}
      <LowercaseHref href="https://www.flaticon.com/" title="Flaticon">
        {" "}
        www.flaticon.com
      </LowercaseHref>
    </span>
  </CreditsLinkDiv>
);

export default TextMessageIcon;
