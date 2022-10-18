import { CardElement } from "@stripe/react-stripe-js";
import { Offline, Online } from "react-detect-offline";

import useConfirmPaymentSwal from "../../hooks/swals/use-confirm-payment-swal";
import useCreateSubscription from "../../hooks/payment-form/use-create-subscription";
import useHandlePaymentFormChange from "../../hooks/payment-form/use-handle-payment-form-change";

import Errors from "./errors.component";
import NoInternetDetected from "../no-internet-detected/no-internet-detected.component";
import Loader from "../loader/loader.component";

import { PayButton, DisabledButton } from "../../styles/buttons/buttons.styles";
import { CardInputDiv } from "../../styles/div/div.styles";

import { options } from "./card-input-options";

const ConfirmPayment = () => {
  const { confirmPaymentSwal } = useConfirmPaymentSwal();
  const { isProcessingPayment, createSubscription } = useCreateSubscription();
  const { handleChange, error, warning, showButton } =
    useHandlePaymentFormChange();

  return (
    <>
      <Online>
        <Errors {...{ warning, error }} />

        <CardInputDiv>
          <CardElement {...{ options }} onChange={handleChange} />
        </CardInputDiv>

        {showButton && !isProcessingPayment ? (
          <PayButton
            onChange={handleChange}
            type="button"
            onClick={() => confirmPaymentSwal(createSubscription)}
          >
            Pay Now
          </PayButton>
        ) : (
          showButton &&
          isProcessingPayment && (
            <>
              <Loader />
              <DisabledButton>Please Wait...</DisabledButton>
            </>
          )
        )}
      </Online>
      <Offline>
        <NoInternetDetected />
      </Offline>
    </>
  );
};

export default ConfirmPayment;
