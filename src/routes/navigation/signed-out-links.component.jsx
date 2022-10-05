import { Link } from "react-router-dom";

import { HeaderNavigationItems } from "../../styles/div/div.styles";
import { LoginIcon, SignUpIcon } from "../../styles/svg/svg.styles";
import { LoginIconText, SignUpIconText } from "../../styles/text/text.styles";


const SignedOutLinks = () => {

  return (
    <>
     
        <HeaderNavigationItems>
          <ul>
            <li>
              <Link to="/log-in">
                <LoginIcon />
                <LoginIconText>Login</LoginIconText>
              </Link>
            </li>
            <li>
              <Link to="/sign-up">
                <SignUpIcon />
                <SignUpIconText>Sign Up</SignUpIconText>
              </Link>
            </li>
          </ul>
        </HeaderNavigationItems>
  
    </>
  );
};

export default SignedOutLinks;
