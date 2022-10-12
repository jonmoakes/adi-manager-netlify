import CreateLoginDetailsForm from "../../components/create-login-details-form/create-login-details-form.component";

import { Container } from "../../styles/container/container.styles";
import { Div } from "../../styles/div/div.styles";
import { Heading } from "../..//styles/h1/h1.styles";

const CreateLoginDetails = () => (
  <Container>
    <Div>
      <Heading>create login details</Heading>
    </Div>
    <CreateLoginDetailsForm />
  </Container>
);

export default CreateLoginDetails;
