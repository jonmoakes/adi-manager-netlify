import { useState } from "react";

const useShowSubject = () => {
  const [showSubject, setShowSubject] = useState(false);

  const handleClick = () => {
    setShowSubject(!showSubject);
  };

  return { showSubject, handleClick };
};

export default useShowSubject;
