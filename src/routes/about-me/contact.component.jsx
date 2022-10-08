import { Link } from "react-router-dom";

import CustomButton from "../../components/custom-button/custom-button.component";

import { Div } from "../../styles/div/div.styles";

import { contactPath } from "../../strings/strings";

const Contact = () => (
  <Div>
    <Link to={contactPath}>
      <CustomButton>Contact</CustomButton>
    </Link>
  </Div>
);

export default Contact;
