import { SmallScreenDiv } from "../../styles/div/div.styles";
import { PageLink } from "../../styles/link/link.styles";

const NoAccount = () => (
  <SmallScreenDiv>
    <p>no account yet?</p>
    <PageLink to="/sign-up">Sign up!</PageLink>
  </SmallScreenDiv>
);

export default NoAccount;
