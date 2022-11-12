import { useDispatch } from "react-redux";

import { clearSubscriptionData } from "../../../store/customer/customer.action";
import CustomButton from "../../../components/custom-button/custom-button.component";

import { Div } from "../../../styles/div/div.styles";
import { StyledLink } from "../../../styles/link/link.styles";

import { myAccountPath } from "../../../strings/strings";

const Intro = () => {
  const dispatch = useDispatch();

  const clearSubData = () => {
    dispatch(clearSubscriptionData());
  };

  return (
    <Div>
      <p>
        your payment has been successful and your account has been activated!
      </p>
      <p>
        if you'd like some info on how best to use this app, please read on!
      </p>
      <p>
        otherwise tap the button below to enter the app and start exploring!
      </p>

      <StyledLink to={myAccountPath}>
        <CustomButton onClick={clearSubData}>Enter The App!</CustomButton>
      </StyledLink>
    </Div>
  );
};

export default Intro;
