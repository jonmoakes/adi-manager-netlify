import { MissingDataDiv } from "../../styles/div/div.styles";
import { WhitesmokeText } from "../../styles/text/text.styles";

const NoInternetDetected = () => {
  return (
    <MissingDataDiv>
      <WhitesmokeText>no internet connection has been detected.</WhitesmokeText>
      <WhitesmokeText>please check yourt connection.</WhitesmokeText>
    </MissingDataDiv>
  );
};

export default NoInternetDetected;
