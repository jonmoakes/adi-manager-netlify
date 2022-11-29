import { useState } from "react";

const useShowHide = () => {
  const [shouldShowData, setShouldShowData] = useState({
    showData: false,
    hideData: true,
  });

  const showComponent = () => {
    setShouldShowData({
      showData: true,
      hideData: false,
    });
  };

  const hideComponent = () => {
    setShouldShowData({
      showData: false,
      hideData: true,
    });
  };

  const { showData, hideData } = shouldShowData;

  return { showComponent, hideComponent, showData, hideData };
};

export default useShowHide;
