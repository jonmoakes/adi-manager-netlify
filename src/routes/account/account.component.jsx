import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../utils/firebase/firebase.utils";

import { selectErrorMessage } from "../../store/error/error.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { addSubscriptionData } from "../../store/customer/customer.action";
import { selectSubscriptionData } from "../../store/customer/customer.selector";
import { setErrorMessage } from "../../store/error/error.action";

import FetchError from "../../components/fetch-error/fetch-error.component";
import Links from "./links.component";

import { Container } from "../../styles/container/container.styles";
import { Div } from "../../styles/div/div.styles";
import { Heading } from "../../styles/h1/h1.styles";

const Account = () => {
  const errorMessage = useSelector(selectErrorMessage);
  const currentUser = useSelector(selectCurrentUser);
  const subscriptionData = useSelector(selectSubscriptionData);
  const dispatch = useDispatch();

  const { subscriptionId } = subscriptionData;

  useEffect(() => {
    if (!currentUser) return;
    // Get subscriptionId from firestore which is created on initial sign up.
    // Needed to get all subscription data from stripe.
    const getSubscriptionDataFromFirestore = async () => {
      const userRef = doc(db, "users", currentUser.id);
      const userSnapshot = await getDoc(userRef);

      try {
        if (!userSnapshot) return;
        const { subscriptionData } = userSnapshot.data();
        const subscriptionId = subscriptionData.subscriptionId;

        const response = await fetch(
          "/.netlify/functions/fetch-customer-subscription",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              subscriptionId,
            }),
          }
        );
        const data = await response.json();
        const { subscription } = data;

        // get everything needed from stripe subscription object
        const {
          customer,
          id,
          current_period_start,
          current_period_end,
          canceled_at,
          status,
        } = subscription;

        dispatch(
          addSubscriptionData({
            customerId: customer,
            subscriptionId: id,
            current_period_start,
            current_period_end,
            canceled_at,
            status,
          })
        );
      } catch (error) {
        setErrorMessage(error.message);
      }
    };
    getSubscriptionDataFromFirestore();
  }, [currentUser, subscriptionId, dispatch]);

  return (
    <Container>
      <Div>
        <Heading>My Account</Heading>
      </Div>

      {errorMessage ? <FetchError {...{ errorMessage }} /> : <Links />}
    </Container>
  );
};

export default Account;
