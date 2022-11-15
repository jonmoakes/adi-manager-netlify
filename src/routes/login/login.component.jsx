import { useSelector, useDispatch } from "react-redux";

import useHandleSignInFormChange from "./use-handle-sign-in-form-change";
import useHandleSignInFormError from "./use-handle-sign-in-form-error";

import { selectIsSignInLoading } from "../../store/user/user.selector";
import { emailSignInStart } from "../../store/user/user.action";

import Loader from "../../components/loader/loader.component";
import ForgotPasswordForm from "./forgot-password-form.component";

import { Container } from "../../styles/container/container.styles";
import { Div } from "../../styles/div/div.styles";
import { Heading } from "../../styles/h1/h1.styles";
import {
  Form,
  Label,
  StyledInput,
  LowercasedInput,
} from "../../styles/form/form.styles";
import { SignInButton } from "../../styles/buttons/buttons.styles";

const Login = () => {
  const { signInCredentials, handleSignInFormChange } =
    useHandleSignInFormChange();
  useHandleSignInFormError();

  const isLoading = useSelector(selectIsSignInLoading);
  const dispatch = useDispatch();
  const { email, password } = signInCredentials;

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(emailSignInStart(email, password));
  };

  return (
    <>
      {isLoading && <Loader />}

      <Container>
        <Div>
          <Heading>Log In</Heading>
        </Div>

        <Div>
          <Form onSubmit={handleSubmit}>
            <Label>Email:</Label>
            <LowercasedInput
              name="email"
              type="email"
              onChange={handleSignInFormChange}
              value={email || ""}
              required
            />

            <Label>Password:</Label>
            <StyledInput
              name="password"
              type="password"
              value={password || ""}
              onChange={handleSignInFormChange}
              required
            />

            <SignInButton type="submit">Log In</SignInButton>
          </Form>

          <ForgotPasswordForm />
        </Div>
      </Container>
    </>
  );
};

export default Login;
