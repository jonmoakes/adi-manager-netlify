import LoginForm from "./login-form.component";
import NoAccount from "./no-account.component";

import { Container } from "../../styles/container/container.styles";
import { Div } from "../../styles/div/div.styles";
import { Heading } from "../../styles/h1/h1.styles";

const Login = () => (
  <Container>
    <Div>
      <Heading>Log In</Heading>
      <NoAccount />
    </Div>

    <Div>
      <LoginForm />
    </Div>
  </Container>
);

export default Login;
