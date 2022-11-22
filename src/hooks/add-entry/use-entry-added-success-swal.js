import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";

import { addedEntryMessage } from "../../strings/strings";

const useEntryAddedSuccessSwal = () => {
  const swal = withReactContent(Swal);
  const navigate = useNavigate();

  const entryAddedSuccessSwal = () => {
    swal
      .fire({
        title: addedEntryMessage,
        icon: "success",
        iconColor: "#09ed0d",
        showConfirmButton: false,
        timer: 1500,
        allowOutsideClick: true,
        background: "black",
        backdrop: `
        rgba(36, 122, 252, 0.8)`,
        customClass: "confirm",
      })
      .then(navigate(-1));
  };

  return { entryAddedSuccessSwal };
};

export default useEntryAddedSuccessSwal;
