import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import {
  featuresPath,
  aboutMePath,
  pricingPath,
  contactPath,
  loginPath,
  signUpPath,
} from "../../strings/strings";

const useShouldDisplayFooter = () => {
  const [shouldDisplayFooter, setShouldDisplayFooter] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname === "/" ||
      location.pathname === loginPath ||
      location.pathname === signUpPath ||
      location.pathname === featuresPath ||
      location.pathname === pricingPath ||
      location.pathname === aboutMePath ||
      location.pathname === contactPath
    ) {
      setShouldDisplayFooter(true);
    } else {
      setShouldDisplayFooter(false);
    }
  }, [location.pathname]);

  return { shouldDisplayFooter };
};

export default useShouldDisplayFooter;
