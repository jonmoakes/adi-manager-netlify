import { HeaderNavigationItems } from "../../styles/div/div.styles";
import { LoginIcon, SignUpIcon } from "../../styles/svg/svg.styles";
import { LoginIconText, SignUpIconText } from "../../styles/text/text.styles";
import { ImageLink } from "../../styles/link/link.styles";

const SignedOutLinks = () => {

  return (

        <HeaderNavigationItems>
          <ul>
            <li>
              <ImageLink to="/login">
                <LoginIcon />
                <LoginIconText>Login</LoginIconText>
              </ImageLink>
            </li>
            <li>
              <ImageLink to="/sign-up">
                <SignUpIcon />
                <SignUpIconText>Sign Up</SignUpIconText>
              </ImageLink>
            </li>
          </ul>
        </HeaderNavigationItems>
  );
};

export default SignedOutLinks;
