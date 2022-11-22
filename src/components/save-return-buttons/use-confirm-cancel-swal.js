import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { selectUpdatedEntry } from "../../store/entry/entry.selector";
import { clearEntry, clearUpdatedEntry } from "../../store/entry/entry.action";

import { cancelAndReturnMessage } from "../../strings/strings";

const useConfirmCancelSwal = () => {
  const swal = withReactContent(Swal);
  const updatedEntry = useSelector(selectUpdatedEntry);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const confirmCancelSwal = async () => {
    swal
      .fire({
        title: cancelAndReturnMessage,
        icon: "question",
        showCancelButton: true,
        cancelButtonColor: "red",
        cancelButtonText: "stay here",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Yes, Go Back",
        allowOutsideClick: false,
        reverseButtons: true,
        background: "black",
        backdrop: `
        rgba(36, 122, 252, 0.8)`,
        customClass: "confirm",
      })
      .then((result) => {
        if (result.isConfirmed) {
          dispatch(clearEntry());
          if (updatedEntry) {
            dispatch(clearUpdatedEntry);
          }
          navigate(-1);
        }
      });
  };

  return { confirmCancelSwal };
};

export default useConfirmCancelSwal;
