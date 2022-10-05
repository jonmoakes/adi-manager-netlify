
// import { useSelector } from "react-redux";

// import { selectCurrentUser } from "../../redux/user/user.selectors";

import { FeaturesDiv } from "../../styles/div/div.styles";
import { FeaturesButton, SignUpLinkButton } from "../../styles/buttons/buttons.styles";
import { RedHeading } from "../../styles/h2/h2.styles";
import { StyledLink } from "../../styles/link/link.styles";

import {
  featuresPath,
  signUpPath,
  refundsPath,
} from "../../strings/strings";

const Features = () => {
  // const currentUser = useSelector(selectCurrentUser);

  return (
    <FeaturesDiv>
      <StyledLink to={featuresPath}>
        <FeaturesButton>Features</FeaturesButton>
      </StyledLink>

        <>
          <p>OR</p>

          <StyledLink to={signUpPath}>
            <SignUpLinkButton>Sign Up</SignUpLinkButton>
          </StyledLink>

          <RedHeading>
            100% money back guarantee for 30 days!
          </RedHeading>
          <p>
            please see our <StyledLink to={refundsPath}>refunds policy</StyledLink> for full
            details!
          </p>
        </>
   
    </FeaturesDiv>
  );
};

export default Features;
