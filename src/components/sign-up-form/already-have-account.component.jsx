import { SmallScreenSignUpDiv } from "../../styles/div/div.styles";
import { PageLink } from "../../styles/link/link.styles";

const AlreadyHaveAccount = () => (
  <SmallScreenSignUpDiv>
    <p>already have an account?</p>
    <PageLink to="/login">log in!</PageLink>
  </SmallScreenSignUpDiv>
);

export default AlreadyHaveAccount;
