import { useState } from "react";

import SendMessage from "./send-message.component";

import {
  Form,
  Label,
  CapitalizedInput,
  LowercasedInput,
  StyledTextArea,
} from "../../styles/form/form.styles";
import { Div } from "../../styles/div/div.styles";

const defaultFormDetails = {
  name: "",
  email: "",
  message: "",
};

const ContactForm = () => {
  const [formDetails, setFormDetails] = useState(defaultFormDetails);
  const { name, email, message } = formDetails;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormDetails({ ...formDetails, [name]: value });
  };

  return (
    <Div>
      <Form id="contact-form">
        <Label>Your Name:</Label>
        <CapitalizedInput
          type="text"
          name="name"
          value={name || ""}
          onChange={handleChange}
        />

        <Label>Your Email:</Label>
        <LowercasedInput
          type="email"
          name="email"
          value={email || ""}
          onChange={handleChange}
        />

        <Label>Your Message:</Label>
        <StyledTextArea
          type="text"
          name="message"
          value={message || ""}
          onChange={handleChange}
        />
      </Form>

      <SendMessage {...{ formDetails }} />
    </Div>
  );
};

export default ContactForm;
