import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import useLogoutAndClearRedux from "./use-logout-and-clear-redux";

import { selectCurrentUser } from "../store/user/user.selector";
import { selectSubscriptionData } from "../store/customer/customer.selector";

import { subscriptionExpiredMessage } from "../strings/strings";

const useSubscriptionExpiredCheck = () => {
  const { logoutAndClearRedux } = useLogoutAndClearRedux();

  const currentUser = useSelector(selectCurrentUser);
  const subscriptionData = useSelector(selectSubscriptionData);

  const swal = withReactContent(Swal);
  const navigate = useNavigate();

  const { subscriptionId } = subscriptionData;

  useEffect(() => {
    const subscriptionExpiredCheck = async () => {
      if (!currentUser || !subscriptionId) return;

      try {
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

        if (subscription === undefined) return;
        if (subscription.status === "incomplete_expired") {
          logoutAndClearRedux();
          swal.fire({
            title: subscriptionExpiredMessage,
            showCancelButton: false,
            confirmButtonColor: "#3085d6",
            background: "black",
            backdrop: `
            rgba(36, 122, 252, 0.8)`,
            icon: "success",
            iconColor: "#09ed0d",
            timer: 5000,
            allowOutsideClick: true,
            customClass: "confirm",
          });
          navigate("/");
        }
      } catch (error) {
        console.log(error);
        return;
      }
    };
    subscriptionExpiredCheck();
  }, [currentUser, subscriptionId, logoutAndClearRedux, navigate, swal]);
};

export default useSubscriptionExpiredCheck;
