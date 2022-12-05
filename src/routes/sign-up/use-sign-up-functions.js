import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addSubscriptionPrice } from "../../store/customer/customer.action";
import { createLoginDetailsPath } from "../../strings/strings";

const useSignUpFunctions = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const chooseMonthAndPushToCreateDetails = () => {
    dispatch(addSubscriptionPrice(2000));
    navigate(createLoginDetailsPath);
  };

  const chooseYearAndPushToCreateDetails = () => {
    dispatch(addSubscriptionPrice(21600));
    navigate(createLoginDetailsPath);
  };

  return {
    chooseMonthAndPushToCreateDetails,
    chooseYearAndPushToCreateDetails,
  };
};

export default useSignUpFunctions;
