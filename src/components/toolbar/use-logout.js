import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import useLogoutAndClearRedux from "./use-logout-and-clear-redux";

import {
  confirmLogoutMessage,
  signOutSuccessMessage,
} from "../../strings/strings";

import "../../styles/confirm.css";

const useLogout = () => {
  const { logoutAndClearRedux } = useLogoutAndClearRedux();

  const navigate = useNavigate();
  const swal = withReactContent(Swal);

  const logout = async () => {
    return [
      await logoutAndClearRedux(),
      await swal.fire({
        title: signOutSuccessMessage,
        background: "black",
        backdrop: `
        rgba(36, 122, 252, 0.8)`,
        icon: "success",
        iconColor: "#09ed0d",
        showConfirmButton: false,
        timer: 2000,
        customClass: "confirm",
      }),
      navigate("/"),
    ];
  };

  function logoutConfirmBox() {
    swal
      .fire({
        title: confirmLogoutMessage,
        icon: "question",
        showCancelButton: true,
        cancelButtonColor: "red",
        cancelButtonText: "Stay Logged In.",
        confirmButtonText: "Yes, Log Out!",
        allowOutsideClick: false,
        reverseButtons: true,
        confirmButtonColor: "#3085d6",
        background: "black",
        backdrop: `
        rgba(36, 122, 252, 0.8)`,
        customClass: "confirm",
      })
      .then((result) => {
        if (result.isConfirmed) {
          logout();
        }
      });
  }

  return { logoutConfirmBox };
};

export default useLogout;
