import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import { Container } from "../../styles/container/container.styles";
import { Div } from "../../styles/div/div.styles";
import { Heading } from "../../styles/h1/h1.styles";

const Login = () => (
  <Container>
    <Div>
      <Heading>Log In</Heading>
    </Div>
    <SignInForm />
  </Container>
);

export default Login;
