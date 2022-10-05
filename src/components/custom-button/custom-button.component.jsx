import { Button } from "./custom-button.styles";

const CustomButton = ({ children, ...otherProps }) => (
  <Button {...otherProps}>{children}</Button>
);

export default CustomButton;
