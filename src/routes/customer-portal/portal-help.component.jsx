import { useState } from "react";

import Intro from "./help/intro.component";
import DeleteAccountInfo from "./help/delete-account-info.component";
import RefundsInfo from "./help/refunds-info.component";
import UpdateBillingEmailInfo from "./help/update-billing-email-info.component";
import UpdatePaymentMethodInfo from "./help/update-payment-method-info.component";
import AuthenticatePaymentInfo from "./help/authenticate-payment-info.component";

import { InfoButton } from "../../styles/buttons/buttons.styles";
import { BounceInDiv } from "../../styles/div/div.styles";

const PortalHelp = () => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <>
      <p>tap to toggle help</p>
      <p>
        the help section contains important information, particularly if you are
        cancelling your subscription or requesting a refund.
      </p>

      <InfoButton onClick={() => setShowInfo(!showInfo)} />

      {showInfo && (
        <BounceInDiv>
          <Intro />
          <DeleteAccountInfo />
          <RefundsInfo />
          <UpdateBillingEmailInfo />
          <UpdatePaymentMethodInfo />
          <AuthenticatePaymentInfo />
        </BounceInDiv>
      )}
    </>
  );
};

export default PortalHelp;
