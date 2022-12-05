import CustomButton from "../custom-button/custom-button.component";
import {
  ErrorImageOverlay,
  ErrorImageContainer,
} from "../../styles/div/div.styles";
import { ErrorImageText } from "../../styles/text/text.styles";
import { StyledLink } from "../../styles/link/link.styles";

const ErrorFallback = () => (
  <ErrorImageOverlay>
    <ErrorImageContainer imageUrl="https://lh3.googleusercontent.com/pw/ACtC-3cVmKb5eOxQzVrCjYY0taZqvLD-mC6LjQxCSpO2S1pgeXEg9TVMJ6HOwte5YU6YZfb_kjl9BnnKm8c01Aj3Bu7QwDRslPQynZbYZsedMsQXIhLRjUnZRTOUIwHce4i4cNy3EDb1jUm2csDYV2HzF39X=s800-no" />
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
    <CustomButton onClick={() => window.location.reload()}>
      reload the page
    </CustomButton>

    <ErrorImageText>
      and if that doesn't work, please{" "}
      <StyledLink to="contact">contact me</StyledLink>
    </ErrorImageText>
  </ErrorImageOverlay>
);

export default ErrorFallback;
