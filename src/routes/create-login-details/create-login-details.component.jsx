import CreateDetailsForm from "./create-details-form.component";

import { Container } from "../../styles/container/container.styles";
import { Div } from "../../styles/div/div.styles";
import { Heading } from "../..//styles/h1/h1.styles";

const CreateLoginDetails = () => (
  <Container>
    <Div>
      <Heading>create login details</Heading>
    </Div>
    <CreateDetailsForm />
  </Container>
);

export default CreateLoginDetails;
