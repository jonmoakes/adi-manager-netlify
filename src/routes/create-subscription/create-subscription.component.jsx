import ConfirmPayment from "../../components/confirm-payment/confirm-payment.component";

import { Container } from "../../styles/container/container.styles";
import { Div } from "../../styles/div/div.styles";

const CreateSubscription = () => (
  <Container>
    <Div>
      <h1> subscribe</h1>
    </Div>

    <Div>
      <ConfirmPayment />
    </Div>
  </Container>
);

export default CreateSubscription;
