import { StyledLink } from "../../styles/link/link.styles";
import { SmallScreenDiv } from "../../styles/div/div.styles";

const NoAccount = () => (
  <SmallScreenDiv>
    <p>no account yet?</p>
    <StyledLink to="/sign-up">Sign up!</StyledLink>
  </SmallScreenDiv>
);

export default NoAccount;
