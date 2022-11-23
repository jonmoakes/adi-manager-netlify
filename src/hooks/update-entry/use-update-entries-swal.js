import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import useFireSwal from "../use-fire-swal";

import { clearEntry } from "../../store/entry/entry.action";

import {
  confirmUpdateEntryMessage,
  updateEntryMessage,
  entrySavedMessage,
} from "../../strings/strings";

const useUpdateEntriesSwal = () => {
  const { fireSwal } = useFireSwal();
  const swal = withReactContent(Swal);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const updateEntriesSwal = () => {
    swal
      .fire({
        title: confirmUpdateEntryMessage,
        icon: "question",
        showCancelButton: true,
        cancelButtonColor: "red",
        confirmButtonText: updateEntryMessage,
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
          navigate(-1);
          fireSwal("success", entrySavedMessage, "", 1500, false, true);
          dispatch(clearEntry());
        }
      });
  };

  return { updateEntriesSwal };
};

export default useUpdateEntriesSwal;
