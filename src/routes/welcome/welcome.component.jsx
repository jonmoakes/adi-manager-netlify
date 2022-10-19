import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../utils/firebase/firebase.utils";

import useFireSwal from "../../hooks/use-fire-swal";

import { selectSubscriptionData } from "../../store/customer/customer.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import {
  clearCustomerDetails,
  clearSubscriptionPrice,
} from "../../store/customer/customer.action";

import Intro from "./sections/intro.component";
import Navigation from "./sections/navigation.component";
import InstructionsForUse from "./sections/instructions-for-use.component";
import Pwa from "./sections/pwa.component";
import Contact from "./sections/contact.component";

import { NoHeaderFooterContainer } from "../../styles/container/container.styles";
import { Div } from "../../styles/div/div.styles";
import { Heading } from "../../styles/h1/h1.styles";

import { subscriptionDataNotAddedToFirestore } from "../../strings/strings";

const WelcomePage = () => {
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

  return (
    <NoHeaderFooterContainer>
      <Div>
        <Heading>Welcome!</Heading>
      </Div>
      <Intro />
      <Navigation />
      <InstructionsForUse />
      <Pwa />
      <Contact />
    </NoHeaderFooterContainer>
  );
};

export default WelcomePage;
