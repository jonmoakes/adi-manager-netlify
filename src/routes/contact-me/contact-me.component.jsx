import ContactForm from "../../components/contact-form/contact-form.component";

import { Container } from "../../styles/container/container.styles";
import { Div } from "../../styles/div/div.styles";
import { Heading } from "../../styles/h1/h1.styles";

const ContactPage = () => (
  <Container>
    <Div>
      <Heading>Contact Me</Heading>
    </Div>
    <ContactForm />
  </Container>
);

export default ContactPage;
