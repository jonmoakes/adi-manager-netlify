import { SubjectButtonElement } from "../../styles/buttons/buttons.styles";

const SubjectButton = ({ children, ...otherProps }) => (
  <SubjectButtonElement type="button" {...otherProps}>
    {children}
  </SubjectButtonElement>
);

export default SubjectButton;
