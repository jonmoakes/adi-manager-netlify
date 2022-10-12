import Intro from "./intro.component";
import TermsAndConditionsConfirm from "./terms-and-coditions-confirm.component";
import  ChooseMonthOrYear from "./choose-month-or-year.component";

import { Container } from "../../styles/container/container.styles";

const SignUp = () => (
  <Container>
    <Intro />
    <TermsAndConditionsConfirm />
    <ChooseMonthOrYear />
  </Container>
);

export default SignUp;
