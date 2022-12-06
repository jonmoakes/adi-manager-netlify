import { useState } from "react";
import { ScrollButton } from "../../styles/buttons/buttons.styles";
import { UpArrowImage } from "../../styles/image/image.styles";

import UpArrow from "../../assets/arrow-upward.png";

const ScrollUpButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <ScrollButton
      style={{ display: visible ? "inline" : "none" }}
      onClick={scrollToTop}
    >
      <UpArrowImage src={UpArrow} alt="up arrow" />
    </ScrollButton>
  );
};

export default ScrollUpButton;
