import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import {
  cancelAndReturnMessage,
  goBackMessage,
  stayHereMessage,
} from "../../strings/strings";

const useConfirmCancelSwal = () => {
  const swal = withReactContent(Swal);
  const navigate = useNavigate();

  const confirmCancelSwal = async () => {
    swal
      .fire({
        title: cancelAndReturnMessage,
        icon: "question",
        showCancelButton: true,
        cancelButtonColor: "red",
        cancelButtonText: stayHereMessage,
        confirmButtonColor: "#3085d6",
        confirmButtonText: goBackMessage,
        allowOutsideClick: false,
        reverseButtons: true,
        background: "black",
        backdrop: `
        rgba(36, 122, 252, 0.8)`,
        customClass: "confirm",
      })
      .then((result) => {
        if (result.isConfirmed) {
          navigate(-1);
        }
      });
  };

  return { confirmCancelSwal };
};

export default useConfirmCancelSwal;
