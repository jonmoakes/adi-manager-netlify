import { useSelector } from "react-redux";

import { selectCurrentUser } from "../../store/user/user.selector";

import { StyledLink } from "../../styles/link/link.styles";
import { Div } from "../../styles/div/div.styles";
import { HighlightText } from "../../styles/span/span.styles";

import { contactPath, myAccountPath, loginPath } from "../../strings/strings";

const Instructions = () => {
  const currentUser = useSelector(selectCurrentUser);
  return (
    <Div>
      <p>
        all you have to do is simply{" "}
        <StyledLink to={contactPath}>Contact Me</StyledLink>. there are no forms
        to fill out, or reasons to give! simply ask for a refund and quote your{" "}
        <HighlightText>Billing email address</HighlightText> and your{" "}
        <HighlightText>User Id</HighlightText>.
      </p>

      <p>
        both of these can be found in the{" "}
        {currentUser ? (
          <>
            <StyledLink to={myAccountPath}>Account page.</StyledLink> under the
            "view subscription details" section.
          </>
        ) : (
          <>
            <HighlightText>account page</HighlightText> which you can access by{" "}
            <StyledLink to={loginPath}>logging in</StyledLink>.
          </>
        )}
      </p>
    </Div>
  );
};

export default Instructions;
