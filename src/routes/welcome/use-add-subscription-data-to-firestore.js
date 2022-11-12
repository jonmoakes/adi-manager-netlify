import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../utils/firebase/firebase.utils";

import useFireSwal from "../../hooks/use-fire-swal";

import {
  clearCustomerDetails,
  clearSubscriptionPrice,
} from "../../store/customer/customer.action";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectSubscriptionData } from "../../store/customer/customer.selector";

import { subscriptionDataNotAddedToFirestore } from "../../strings/strings";

const useAddSubscriptionDataToFirestore = () => {
  const { fireSwal } = useFireSwal();

  const currentUser = useSelector(selectCurrentUser);
  const subscriptionData = useSelector(selectSubscriptionData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearCustomerDetails());
    dispatch(clearSubscriptionPrice());

    const addSubscriptionDataToFirestore = async () => {
      const userRef = doc(db, "users", currentUser.id);
      const userSnapshot = await getDoc(userRef);

      try {
        if (!userSnapshot) return;

        await updateDoc(userRef, {
          subscriptionData: subscriptionData,
        });
      } catch (error) {
        fireSwal(
          "error",
          subscriptionDataNotAddedToFirestore,
          error.message,
          0,
          true,
          false
        );
      }
    };
    addSubscriptionDataToFirestore();
  }, [currentUser.id, subscriptionData, dispatch, fireSwal]);
};

export default useAddSubscriptionDataToFirestore;
