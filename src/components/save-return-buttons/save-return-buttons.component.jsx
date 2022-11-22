import useConfirmCancelSwal from "./use-confirm-cancel-swal";

import { SaveButton, ReturnButton } from "../../styles/buttons/buttons.styles";

const SaveReturnButtons = ({ confirmBox }) => {
  const { confirmCancelSwal } = useConfirmCancelSwal();

  return (
    <>
      <SaveButton type="button" onClick={confirmBox}>
        Save
      </SaveButton>

      <ReturnButton type="button" onClick={confirmCancelSwal}>
        Back
      </ReturnButton>
    </>
  );
};

export default SaveReturnButtons;
