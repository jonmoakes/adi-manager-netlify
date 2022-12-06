import { CreditsLinkDiv } from "../../styles/div/div.styles";
import { LowercaseHref } from "../../styles/a/a.styles";

const PoundIcon = () => (
  <CreditsLinkDiv>
    <span>
      Pound icon by:
      <br />
      <LowercaseHref
        href="https://www.flaticon.com/authors/pixelmeetup"
        title="Pixelmeetup"
      >
        Pixelmeetup
      </LowercaseHref>{" "}
      from{" "}
      <LowercaseHref href="https://www.flaticon.com/" title="Flaticon">
        www.flaticon.com
      </LowercaseHref>
    </span>
  </CreditsLinkDiv>
);

export default PoundIcon;
