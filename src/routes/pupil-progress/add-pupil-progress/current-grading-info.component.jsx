import { SliderInstructions } from "../../../styles/span/span.styles";
import { Label } from "../../../styles/form/form.styles";

const CurrentGradingInfo = () => (
  <Label className="grading">
    Current Grading:{" "}
    <SliderInstructions>( Adjust the slider )</SliderInstructions>
  </Label>
);
export default CurrentGradingInfo;
