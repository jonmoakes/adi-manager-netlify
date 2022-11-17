import { CardElement } from "@stripe/react-stripe-js";
import { Offline, Online } from "react-detect-offline";

import useConfirmPurchaseSubscription from "./use-confirm-purchase-subscription";
import useCreateSubscription from "./use-create-subscription";
import useHandleCardInputChange from "./use-handle-card-input-change";

import CreateSubscriptionInputDynamicInfo from "./create-subscription-input-dynamic-info.component";
import NoInternetDetected from "../../components/no-internet-detected/no-internet-detected.component";

import Loader from "../../components/loader/loader.component";
import ConfirmInfo from "./confirm-info.component";

import { Container } from "../../styles/container/container.styles";
import { PayButton, DisabledButton } from "../../styles/buttons/buttons.styles";
import { CardInputDiv, Div } from "../../styles/div/div.styles";

import { options } from "./card-input-options";

const CreateSubscription = () => {
  const { confirmPurchaseSubscription } = useConfirmPurchaseSubscription();
  const { isProcessingPayment, createSubscription } = useCreateSubscription();
  const { handleCardInputChange, validateInput } = useHandleCardInputChange();

  const { warning, error, showButton } = validateInput;

  return (
    <Container>
      <ConfirmInfo />

      <Div>
        <Online>
          <CreateSubscriptionInputDynamicInfo {...{ warning, error }} />

          <CardInputDiv>
            <CardElement {...{ options }} onChange={handleCardInputChange} />
          </CardInputDiv>

          {showButton && !isProcessingPayment ? (
            <>
              <PayButton
                type="button"
                onClick={() => confirmPurchaseSubscription(createSubscription)}
              >
                complete purchase
              </PayButton>
            </>
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
      </Div>
    </Container>
  );
};

export default CreateSubscription;
