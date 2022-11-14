import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { doc, getDoc } from "firebase/firestore";
import { db } from "../../utils/firebase/firebase.utils";

import { selectErrorMessage } from "../../store/error/error.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectSubscriptionData } from "../../store/customer/customer.selector";
import { addSubscriptionData } from "../../store/customer/customer.action";
import { setErrorMessage } from "../../store/error/error.action";

import FetchError from "../../components/fetch-error/fetch-error.component";
import Links from "./links.component";

import { Container } from "../../styles/container/container.styles";
import { Div } from "../../styles/div/div.styles";
import { Heading } from "../../styles/h1/h1.styles";

const Account = () => {
  // gets customer & subscriptionId
  const subscriptionData = useSelector(selectSubscriptionData);
  const errorMessage = useSelector(selectErrorMessage);
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const { customerId, subscriptionId } = subscriptionData;

  useEffect(() => {
    if (!currentUser) return;

    // Do this in case we don't have the subscriptionId at this point which is needed to fetch the customer subscription.
    const getSubscriptionDataFromFirestore = async () => {
      const userRef = doc(db, "users", currentUser.id);
      const userSnapshot = await getDoc(userRef);

      try {
        if (!userSnapshot) return;
        const { subscriptionData } = userSnapshot.data();
        const response = await fetch(
          "/.netlify/functions/fetch-customer-subscription",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              subscriptionId: subscriptionData.subscriptionId,
            }),
          }
        );
        const data = await response.json();
        const { subscription } = data;

        const {
          current_period_start,
          current_period_end,
          canceled_at,
          status,
        } = subscription;

        console.log(canceled_at);

        dispatch(
          addSubscriptionData({
            customerId,
            subscriptionId,
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
  }, [currentUser, dispatch, customerId, subscriptionId]);

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
