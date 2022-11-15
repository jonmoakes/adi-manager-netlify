import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { selectSubscriptionData } from "../../../store/customer/customer.selector";
import { selectCurrentUser } from "../../../store/user/user.selector";
import { setErrorMessage } from "../../../store/error/error.action";

import EmailChangeDetected from "./email-change-detected.component";

import { LowercasedSpan } from "../../../styles/span/span.styles";

const Emails = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [billingEmail, setBillingEmail] = useState("");

  const currentUser = useSelector(selectCurrentUser);
  const subscriptionData = useSelector(selectSubscriptionData);

  const { customerId } = subscriptionData;

  useEffect(() => {
    if (!currentUser) return;

    const fetchAndSetEmails = async () => {
      try {
        setLoginEmail(currentUser.email);
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
      } catch (error) {
        setErrorMessage(error.message);
      }
    };
    fetchAndSetEmails();
  }, [customerId, currentUser]);

  return (
    <>
      {loginEmail === billingEmail ? (
        <>
          <p>
            your login and billing email is:
            <br />
            <LowercasedSpan>{loginEmail}</LowercasedSpan>
          </p>
          <hr />
        </>
      ) : (
        loginEmail !== billingEmail && (
          <>
            <p>
              your login email is:
              <br />
              <LowercasedSpan>{loginEmail}</LowercasedSpan>
            </p>
            <p>
              your billing email is:
              <br />
              <LowercasedSpan>{billingEmail}</LowercasedSpan>
            </p>
            <hr />
            <EmailChangeDetected />
          </>
        )
      )}
    </>
  );
};

export default Emails;
