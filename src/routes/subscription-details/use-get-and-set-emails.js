import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../utils/firebase/firebase.utils";

import { selectSubscriptionData } from "../../store/customer/customer.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { setErrorMessage } from "../../store/error/error.action";

const useGetAndSetEmails = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [billingEmail, setBillingEmail] = useState("");

  const currentUser = useSelector(selectCurrentUser);
  const subscriptionData = useSelector(selectSubscriptionData);
  const dispatch = useDispatch();
  const { customerId } = subscriptionData;

  useEffect(() => {
    if (!currentUser) return;

    const fetchAndSetEmails = async () => {
      try {
        const response = await fetch("/.netlify/functions/fetch-customer", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            customerId,
          }),
        });
        const data = await response.json();
        const { customer } = data;
        setBillingEmail(customer.email);

        if (currentUser.email) {
          setLoginEmail(currentUser.email);
          return;
        } else {
          const userRef = doc(db, "users", currentUser.id);
          const userSnapshot = await getDoc(userRef);

          try {
            if (!userSnapshot.exists) return;
            const { email } = userSnapshot.data();
            setLoginEmail(email);
          } catch (error) {
            dispatch(setErrorMessage(error.message));
          }
        }
      } catch (error) {
        setErrorMessage(error.message);
      }
    };
    fetchAndSetEmails();
  }, [customerId, currentUser, dispatch]);

  return { loginEmail, billingEmail };
};

export default useGetAndSetEmails;
