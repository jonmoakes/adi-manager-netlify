import { useEffect } from "react";

import { LoaderDiv } from "../../styles/div/div.styles";
import { LoaderIcon } from "../../styles/svg/svg.styles";

const Loader = () => {
  useEffect(() => {
    document.getElementById("loader").hidden = false;
    return () => {};
  });

  return (
    <LoaderDiv id="loader">
      <LoaderIcon />
    </LoaderDiv>
  );
};

export default Loader;
