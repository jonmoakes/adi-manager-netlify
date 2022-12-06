import { CreditsLinkDiv } from "../../styles/div/div.styles";
import { StyledLink } from "../../styles/link/link.styles";

import { contactPath } from "../../strings/strings";

const Intro = () => (
  <CreditsLinkDiv>
    <p>
      thank you to the people who created the brilliant font and icons in this
      app!
    </p>
    <p>check out their work by clicking on the links!</p>
    <p>
      missing or wrong attribution? please{" "}
      <StyledLink to={contactPath}>contact me</StyledLink> so i can rectify it!
    </p>
  </CreditsLinkDiv>
);

export default Intro;
