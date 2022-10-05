import { useEffect } from "react";

import { LoaderDiv, LoaderIcon } from "./loader.styles";

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
