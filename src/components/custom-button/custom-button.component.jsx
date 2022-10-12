import { Button } from "../../styles/buttons/buttons.styles";

const CustomButton = ({ children, ...otherProps }) => (
  <Button {...otherProps}>{children}</Button>
);

export default CustomButton;
