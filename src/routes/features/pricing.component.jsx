import CustomButton from "../../components/custom-button/custom-button.component";

import { Div } from "../../styles/div/div.styles";
import { StyledLink } from "../../styles/link/link.styles";

import { pricingPath } from "../../strings/strings";

const Pricing = () => (
  <Div>
    <StyledLink to={pricingPath}>
      <CustomButton>Pricing</CustomButton>
    </StyledLink>
  </Div>
);

export default Pricing;
