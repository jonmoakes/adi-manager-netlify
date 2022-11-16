import { Link } from "react-router-dom";

import CustomButton from "../../components/custom-button/custom-button.component";

import { Div, ButtonsDiv } from "../../styles/div/div.styles";
import { SmallHighlightText } from "../../styles/span/span.styles";

import {
  customerPortalPath,
  updateLoginEmailPath,
  updatePasswordPath,
  subscriptionDetailsPath,
} from "../../strings/strings";

const Links = () => (
  <>
    <Div>
      <p>welcome to your account page.</p>
      <p>tap any button below to view / edit your details.</p>
    </Div>

    <Div>
      <ButtonsDiv>
        <p>enter your customer portal to:</p>
        <SmallHighlightText>
          ( cancel your subscription, updating payment info / email address,
          viewing / downloading invoices etc )
        </SmallHighlightText>
        <Link to={customerPortalPath}>
          <CustomButton className="account-button">
            Enter Customer Portal
          </CustomButton>
        </Link>
        <hr />

        <p>need to update your login email?</p>
        <Link to={updateLoginEmailPath}>
          <CustomButton className="account-button">
            Update Login Email
          </CustomButton>
        </Link>
        <hr />

        <p>need to update your password?</p>
        <Link to={updatePasswordPath}>
          <CustomButton className="account-button">
            Update Your password
          </CustomButton>
        </Link>
        <hr />

        <p>need to view your subscription details?</p>
        <SmallHighlightText>
          ( seeing when your subscription renews / ends, info for when
          contacting support etc )
        </SmallHighlightText>
        <Link to={subscriptionDetailsPath}>
          <CustomButton className="account-button">
            view subscription details
          </CustomButton>
        </Link>
        <hr />
      </ButtonsDiv>
    </Div>
  </>
);

export default Links;
