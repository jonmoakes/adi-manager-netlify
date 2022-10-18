import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import "../styles/confirm.css";

const useFireSwal = () => {
  const swal = withReactContent(Swal);

  const fireSwal = (
    icon,
    title,
    text,
    timer,
    showConfirmButton,
    allowOutsideClick
  ) => {
    swal.fire({
      icon,
      title,
      text,
      timer,
      showConfirmButton,
      allowOutsideClick,
      confirmButtonColor: "#3085d6",
      background: "black",
      backdrop: `
      rgba(36, 122, 252, 0.8)`,
      customClass: "confirm",
    });
  };

  return { fireSwal };
};
export default useFireSwal;
