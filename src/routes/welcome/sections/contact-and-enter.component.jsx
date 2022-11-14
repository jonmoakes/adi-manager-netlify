import CustomButton from "../../../components/custom-button/custom-button.component";

import { Div } from "../../../styles/div/div.styles";
import { StyledLink } from "../../../styles/link/link.styles";

import { myAccountPath } from "../../../strings/strings";

const ContactAndEnter = () => (
  <>
    <Div>
      <p>
        please contact me with any questions / suggestions / comments via the
        contact form ( which you can find in the bottom left of the screen once
        in the app ) as I'd love to hear them!
      </p>
      <p>i hope you enjoy using the adi manager app!</p>
      <p>kind regards,</p>
      <p>Jonathan</p>
    </Div>
    <Div>
      <StyledLink to={myAccountPath}>
        <CustomButton>Enter The App!</CustomButton>
      </StyledLink>
    </Div>
  </>
);

export default ContactAndEnter;
