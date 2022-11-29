import { useState } from "react";

const useToggleShowInfo = () => {
  const [showInfo, setShowInfo] = useState(false);

  const toggleShowInfo = () => {
    setShowInfo(!showInfo);
  };

  return { toggleShowInfo, showInfo };
};

export default useToggleShowInfo;
