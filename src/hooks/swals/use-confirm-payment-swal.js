import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {
  cancelledMessage,
  confirmSubscribeMessage,
  areYouSureYouWishToSubscribeMessage,
} from "../../strings/strings";

import useFireSwal from "../swals/use-fire-swal";

const useConfirmPaymentSwal = () => {
  const { fireSwal } = useFireSwal();

  const swal = withReactContent(Swal);

  const confirmPaymentSwal = (createSubscription) => {
    swal
      .fire({
        icon: "question",
        title: areYouSureYouWishToSubscribeMessage,
        showCancelButton: true,
        cancelButtonColor: "red",
        confirmButtonColor: "#3085d6",
        allowOutsideClick: false,
        allowEscapeKey: false,
        reverseButtons: true,
        background: "black",
        backdrop: `
        rgba(36, 122, 252, 0.8)`,
        confirmButtonText: confirmSubscribeMessage,
        customClass: "confirm",
      })
      .then((result) => {
        if (result.isConfirmed) {
          createSubscription();
        } else if (
          result.dismiss === Swal.DismissReason.cancel ||
          Swal.DismissReason.backdrop ||
          Swal.DismissReason.backdrop.esc
        ) {
          fireSwal("info", cancelledMessage, "", 1000, false, true);
        }
      });
  };

  return { confirmPaymentSwal };
};

export default useConfirmPaymentSwal;
