import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectErrorMessage } from "../../store/error/error.selector";
import { selectSubscriptionData } from "../../store/customer/customer.selector";

import FetchError from "../../components/fetch-error/fetch-error.component";
import PortalHelp from "./portal-help.component";
import PortalLink from "./portal-link.component";

import { Container } from "../../styles/container/container.styles";
import { Div } from "../../styles/div/div.styles";
import { Heading } from "../../styles/h1/h1.styles";

import { couldntGetCustomerPortalLinkMessage } from "../../strings/strings";
import { setErrorMessage } from "../../store/error/error.action";

const CustomerPortalPage = () => {
  const [portalUrl, setPortalUrl] = useState("");

  const errorMessage = useSelector(selectErrorMessage);
  const subscriptionData = useSelector(selectSubscriptionData);
  const dispatch = useDispatch();

  const { customerId } = subscriptionData;

  useEffect(() => {
    const getPortalUrl = async () => {
      try {
        const response = await fetch(
          "/.netlify/functions/get-customer-portal-url",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              customer: customerId,
            }),
          }
        );
        const data = await response.json();
        const { portalData } = data;
        setPortalUrl(portalData.url);
      } catch (error) {
        dispatch(setErrorMessage(couldntGetCustomerPortalLinkMessage));
      }
    };
    getPortalUrl();
  }, [customerId, dispatch]);

  return (
    <Container>
      <Div>
        <Heading>Customer Portal</Heading>
      </Div>

      {errorMessage ? (
        <FetchError />
      ) : (
        <>
          <Div>
            <PortalHelp />
            <PortalLink {...{ portalUrl }} />
          </Div>
        </>
      )}
    </Container>
  );
};

export default CustomerPortalPage;
