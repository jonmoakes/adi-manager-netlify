import { Div } from "../../styles/div/div.styles";
import { StyledLink } from "../../styles/link/link.styles";

import { cookiePolicyPath } from "../../strings/strings";

const SectionSeven = () => (
  <Div>
    <h2>7: Monitoring and review of the policy:</h2>
    <p>7.1 This policy is reviewed every 6 months by Jonathan Oakes.</p>
    <p>
      7.2: We will continue to review the effectiveness of this policy to ensure
      it is achieving its stated objectives.
    </p>
    <hr />
    <p>
      please see our{" "}
      <StyledLink to={cookiePolicyPath}>cookie policy</StyledLink> to see how we
      use Cookies In Our App.
    </p>
  </Div>
);

export default SectionSeven;
