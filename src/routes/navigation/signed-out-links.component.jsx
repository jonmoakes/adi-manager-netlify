import { useSelector } from "react-redux";

import { selectCurrentUser } from "../../store/user/user.selector";

import { HeaderNavigationItems } from "../../styles/div/div.styles";
import {
  LoginIcon,
  // SignUpIcon
} from "../../styles/svg/svg.styles";
import {
  LoginIconText,
  // SignUpIconText
} from "../../styles/text/text.styles";
import { ImageLink } from "../../styles/link/link.styles";

const SignedOutLinks = () => {
  const currentUser = useSelector(selectCurrentUser);

  return (
    <>
      {!currentUser && (
        <HeaderNavigationItems>
          <ul>
            <li>
              <ImageLink to="/login">
                <LoginIcon />
                <LoginIconText>Login</LoginIconText>
              </ImageLink>
            </li>
            {/* <li>
              <ImageLink to="/sign-up">
                <SignUpIcon />
                <SignUpIconText>Signup</SignUpIconText>
              </ImageLink>
            </li> */}
          </ul>
        </HeaderNavigationItems>
      )}
    </>
  );
};

export default SignedOutLinks;
