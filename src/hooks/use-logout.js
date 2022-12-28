import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";

import useLogoutAndClearRedux from "./use-logout-and-clear-redux";

import {
  confirmLogoutMessage,
  signOutSuccessMessage,
} from "../strings/strings";

const useLogout = () => {
  const { logoutAndClearRedux } = useLogoutAndClearRedux();

  const swal = withReactContent(Swal);
  const navigate = useNavigate();

  const logoutConfirmBox = () => {
    swal
      .fire({
        title: confirmLogoutMessage,
        icon: "question",
        showCancelButton: true,
        cancelButtonColor: "red",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "yes, logout!",
        allowOutsideClick: false,
        reverseButtons: true,
        background: "black",
        backdrop: `
        rgba(36, 122, 252, 0.8)`,
        customClass: "confirm",
      })
      .then((result) => {
        if (result.isConfirmed) {
          return [
            logoutAndClearRedux(),
            swal.fire({
              title: signOutSuccessMessage,
              showCancelButton: false,
              confirmButtonColor: "#3085d6",
              confirmButtonText: "yes, logout!",
              reverseButtons: true,
              background: "black",
              backdrop: `
              rgba(36, 122, 252, 0.8)`,
              icon: "success",
              iconColor: "#09ed0d",
              showConfirmButton: false,
              timer: 2000,
              allowOutsideClick: true,
              customClass: "confirm",
            }),
            navigate("/"),
          ];
        }
      });
  };

  return { logoutConfirmBox };
};

export default useLogout;
