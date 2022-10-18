import { useState, useEffect } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { useSelector, useDispatch } from "react-redux";

import useFireSwal from "../swals/use-fire-swal";

import { signUpStart } from "../../store/user/user.action";
import {
  selectCustomerDetails,
  selectSubscriptionPrice,
} from "../../store/customer/customer.selector";

import {
  errorProcessingPaymentMessage,
  paymentSuccessfulMessage,
  pleaseTryAgain,
  youWillReceiveAnEmailMessage,
} from "../../strings/strings";

const useCreateSubscription = () => {
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [priceId, setPriceId] = useState("");
  const { fireSwal } = useFireSwal();
  const dispatch = useDispatch();

  const customerDetails = useSelector(selectCustomerDetails);
  const subscriptionPrice = useSelector(selectSubscriptionPrice);

  const { displayName, email, password } = customerDetails;

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    if (subscriptionPrice === 4000) {
      setPriceId(process.env.REACT_APP_MONTHLY_SUBSCRIPTION_PRICE_ID);
    } else if (subscriptionPrice === 43000) {
      setPriceId(process.env.REACT_APP_YEARLY_SUBSCRIPTION_PRICE_ID);
    }
  }, [subscriptionPrice]);

  const handleError = (response) => {
    setIsProcessingPayment(false);
    return fireSwal(
      "error",
      errorProcessingPaymentMessage,
      pleaseTryAgain,
      0,
      true,
      false
    );
  };

  const handleAuthenticationError = (confirm) => {
    console.log(confirm);
    setIsProcessingPayment(false);
    return fireSwal(
      "error",
      errorProcessingPaymentMessage,
      confirm.error.message,
      0,
      true,
      false
    );
  };

  const createSubscription = async () => {
    if (!stripe || !elements) return;
    setIsProcessingPayment(true);
    try {
      const paymentMethod = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement("card"),
      });
      const response = await fetch("/.netlify/functions/create-subscription", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          displayName,
          email,
          paymentMethod: paymentMethod.paymentMethod.id,
          priceId,
        }),
      });

      if (!response.ok) return handleError();
      const data = await response.json();

      // const combinedSubscriptionData = {
      //   customerId: data.customerId,
      //   subscriptionId: data.subscriptionId,
      //   status: data.status,
      // };
      const confirm = await stripe.confirmCardPayment(data.clientSecret);

      if (confirm.error) return handleAuthenticationError(confirm);
      dispatch(signUpStart(email, password, displayName));
      fireSwal(
        "success",
        paymentSuccessfulMessage,
        youWillReceiveAnEmailMessage,
        0,
        true,
        false
      );
    } catch (error) {
      fireSwal(
        "error",
        errorProcessingPaymentMessage,
        error.message,
        0,
        true,
        false
      );
    }
  };

  return { createSubscription, isProcessingPayment };
};

export default useCreateSubscription;
