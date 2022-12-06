import { CreditsLinkDiv } from "../../styles/div/div.styles";
import { LowercaseHref } from "../../styles/a/a.styles";

const InfoIcon = () => (
  <CreditsLinkDiv>
    <span>
      Info icon by:
      <br />
      <LowercaseHref
        href="https://www.flaticon.com/authors/roundicons"
        title="Roundicons"
      >
        Roundicons
      </LowercaseHref>{" "}
      from{" "}
      <LowercaseHref href="https://www.flaticon.com/" title="Flaticon">
        {" "}
        www.flaticon.com
      </LowercaseHref>
    </span>
  </CreditsLinkDiv>
);

export default InfoIcon;
