import { Div } from "../../styles/div/div.styles";

import { HighlightText } from "../../styles/span/span.styles";
import { StyledLink } from "../../styles/link/link.styles";

import { contactPath } from "../../strings/strings";

const UpdateEmailInstructions = () => {
  return (
    <Div>
      <p>
        for security reasons, the app will{" "}
        <HighlightText>log you out</HighlightText> on a successful email change
        so that you can log back in with your new email address.
      </p>

      <p>
        you can always <StyledLink to={contactPath}>contact me</StyledLink> of
        course if you have any problems!
      </p>
    </Div>
  );
};

export default UpdateEmailInstructions;
