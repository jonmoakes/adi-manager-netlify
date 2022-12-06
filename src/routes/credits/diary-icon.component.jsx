import { CreditsLinkDiv } from "../../styles/div/div.styles";
import { LowercaseHref } from "../../styles/a/a.styles";

const DiaryIcon = () => (
  <CreditsLinkDiv>
    <span>
      diary icon by:
      <br />
      <LowercaseHref href="https://www.freepik.com" title="Freepik">
        Freepik
      </LowercaseHref>{" "}
      from{" "}
      <LowercaseHref href="https://www.flaticon.com/" title="Flaticon">
        www.flaticon.com
      </LowercaseHref>
    </span>
  </CreditsLinkDiv>
);

export default DiaryIcon;
