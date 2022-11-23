import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { welcomePath } from "../strings/strings";

const useShouldDisplayHeaderAndToolbar = () => {
  const [shouldDisplayHeaderAndToolbar, setShouldDisplayHeaderAndToolbar] =
    useState(false);
  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname === welcomePath ||
      location.pathname.includes("/add") ||
      location.pathname.includes("/edit") ||
      location.pathname.includes("delete-entry")
    ) {
      setShouldDisplayHeaderAndToolbar(false);
    } else {
      setShouldDisplayHeaderAndToolbar(true);
    }
  }, [location.pathname]);

  return { shouldDisplayHeaderAndToolbar };
};

export default useShouldDisplayHeaderAndToolbar;
