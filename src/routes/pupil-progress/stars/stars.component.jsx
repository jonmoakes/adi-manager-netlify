import OneStar from "./one-star.component";
import TwoStars from "./two-stars.component";
import ThreeStars from "./three-stars.component";
import FourStars from "./four-stars.component";
import FiveStars from "./five-stars.component";

import { StarsDiv } from "../../../styles/div/div.styles";

const Stars = ({ grade }) => {
  return (
    <StarsDiv>
      {grade === "1" && <OneStar />}
      {grade === "2" && <TwoStars />}
      {grade === "3" && <ThreeStars />}
      {grade === "4" && <FourStars />}
      {grade === "5" && <FiveStars />}
    </StarsDiv>
  );
};
export default Stars;
