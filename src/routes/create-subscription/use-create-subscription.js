import { useState, useEffect } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { useSelector, useDispatch } from "react-redux";

import useFireSwal from "../../hooks/use-fire-swal";

import { signUpStart } from "../../store/user/user.action";
import { addSubscriptionData } from "../../store/customer/customer.action";
import {
  selectCustomerDetails,
  selectSubscriptionPrice,
} from "../../store/customer/customer.selector";

import {
  errorProcessingPaymentMessage,
  paymentSuccessfulMessage,
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
    if (subscriptionPrice === 2000) {
      setPriceId(process.env.REACT_APP_MONTHLY_SUBSCRIPTION_PRICE_ID);
    } else if (subscriptionPrice === 21000) {
      setPriceId(process.env.REACT_APP_YEARLY_SUBSCRIPTION_PRICE_ID);
    }
  }, [subscriptionPrice]);

  const handleError = (retrievedError) => {
    setIsProcessingPayment(false);
    fireSwal(
      "error",
      errorProcessingPaymentMessage,
      `The Error Code Received Was: "${retrievedError}". Please Try Again.`,
      0,
      true,
      false
    );
  };

  const handleAuthenticationError = async (confirm, retrievedCustomerId) => {
    setIsProcessingPayment(false);
    await fetch("/.netlify/functions/delete-customer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        retrievedCustomerId,
      }),
    });

    fireSwal(
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

      const data = await response.json();
      const retrievedError = data.errorMessage;
      const retrievedCustomerId = data.customerId;

      if (!response.ok) return handleError(retrievedError);

      const confirm = await stripe.confirmCardPayment(data.clientSecret);

      if (confirm.error)
        return handleAuthenticationError(confirm, retrievedCustomerId);

      const customerIdAndSubscriptionId = {
        customerId: data.customerId,
        subscriptionId: data.subscriptionId,
      };
      dispatch(addSubscriptionData(customerIdAndSubscriptionId));
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
