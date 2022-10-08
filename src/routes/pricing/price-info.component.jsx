import { Div } from "../../styles/div/div.styles";
import {StyledLink  } from "../../styles/link/link.styles";
import { HighlightText } from "../../styles/span/span.styles";

import { featuresPath } from "../../strings/strings";

const PriceInfo = () => (
  <Div>
    <p>
      with all the <StyledLink to={featuresPath}>features</StyledLink> you get in this app,
      combined with Data syncing across all devices,
    </p>
    <hr />
    <p>
      the ADI Manager app is just <HighlightText>£4 a month!</HighlightText>
    </p>
    <p>
      ( that's just <HighlightText>93p per week</HighlightText>! )
    </p>
    <hr />
    <p>
      you can also pay per year with a{" "}
      <HighlightText>10% discount</HighlightText> for just{" "}
      <HighlightText>£43</HighlightText> a year!
    </p>
    <p>
      ( that's just <HighlightText>83p per week</HighlightText>! )
    </p>
    <hr />
  </Div>
);

export default PriceInfo;
