import { HighlightText } from "../../../styles/span/span.styles";

const UpdatePaymentMethodInfo = () => (
  <>
    <h2>updating your payment method:</h2>
    <p>
      tap the "<HighlightText>add payment method</HighlightText>" link, enter
      your new card details and then tap "<HighlightText>add</HighlightText>".
    </p>
    <p>
      you can then either remove your old payment method by{" "}
      <HighlightText>tapping on the cross icon</HighlightText> or leave it there
      for reference.
    </p>
    <hr />
  </>
);

export default UpdatePaymentMethodInfo;
