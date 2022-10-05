import {
  ErrorImageOverlay,
  ErrorImageContainer,
} from "../../styles/div/div.styles";
import { ErrorImageText } from "../../styles/text/text.styles";
import { StyledLink } from "../../styles/link/link.styles";
import { ErrorBoundaryReloadPageButton } from "../../styles/buttons/buttons.styles";

const ErrorFallback = () => (
  <ErrorImageOverlay>
    <ErrorImageContainer imageUrl="https://cdn.pixabay.com/photo/2015/11/13/14/44/candle-1042087_1280.jpg" />
    <ErrorImageText>
      Sorry, Something Has Broken! Please Try Checking Your internet Connection.
    </ErrorImageText>

    <ErrorImageText>
      Or You Can Click <StyledLink to="/">Here</StyledLink> To Try Returning To
      Our Home Page..
    </ErrorImageText>

    <ErrorImageText>
      if that doesn't work, click the button below to try reloading the page.
    </ErrorImageText>
    <ErrorBoundaryReloadPageButton onClick={() => window.location.reload()}>
      reload the page
    </ErrorBoundaryReloadPageButton>

    <ErrorImageText>
      and if that doesn't work, please{" "}
      <StyledLink to="contact">contact me</StyledLink>
    </ErrorImageText>
  </ErrorImageOverlay>
);

export default ErrorFallback;
