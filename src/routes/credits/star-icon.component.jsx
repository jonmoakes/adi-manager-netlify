import { CreditsLinkDiv } from "../../styles/div/div.styles";
import { LowercaseHref } from "../../styles/a/a.styles";

const StarIcon = () => (
  <CreditsLinkDiv>
    <span>
      star icon by:
      <br />
      <LowercaseHref href="https://icon54.com/" title="Pixel perfect">
        Pixel perfect
      </LowercaseHref>{" "}
      from{" "}
      <LowercaseHref href="https://www.flaticon.com/" title="Flaticon">
        {" "}
        www.flaticon.com
      </LowercaseHref>
    </span>
  </CreditsLinkDiv>
);

export default StarIcon;
