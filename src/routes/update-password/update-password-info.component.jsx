import { Div } from "../../styles/div/div.styles";
import { HighlightText } from "../../styles/span/span.styles";
import { StyledLink } from "../../styles/link/link.styles";

import { contactPath } from "../../strings/strings";

const UpdatePasswordInfo = () => {
  return (
    <Div>
      <h2>Important Info - Please Read!</h2>

      <p>
        when tapping the update password button, for security reasons, if you
        have been signed in for a while, the app will{" "}
        <HighlightText>log you out</HighlightText>. please then{" "}
        <HighlightText>log back in</HighlightText> again to create a fresh user
        session.
      </p>
      <p>
        the reason for this is so that if you left your device open and logged
        in whilst you weren't around, no one would be able to change your
        password without you knowing as they would be unable to log in ( unless
        they knew your login details of course! ).
      </p>

      <p>
        the app will automatically decide if enough time has elapsed when logged
        in for the procedure to be necessary. otherwise, your password will be
        updated as soon as you tap the button.
      </p>

      <p>
        please note that on <HighlightText>successful submission</HighlightText>{" "}
        of the password update request, the app will{" "}
        <HighlightText>log you out</HighlightText> so that you can log back in
        with your new password.
      </p>
      <p>
        if you have any problems, please don't hesitate to{" "}
        <StyledLink to={contactPath}>Contact Me</StyledLink>.
      </p>
    </Div>
  );
};

export default UpdatePasswordInfo;
