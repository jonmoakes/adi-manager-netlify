import AddIconWhite from "../../assets/add-icon-white.png";

import { AddButton } from "../../styles/buttons/buttons.styles";
import { AddIcon } from "../../styles/image/image.styles";

const FloatingAddButton = () => (
  <>
    <AddButton>
      <AddIcon src={AddIconWhite} />
    </AddButton>
  </>
);

export default FloatingAddButton;
