import { useState } from "react";

const useHandleIsProcessing = () => {
  const [isProcessing, setIsProcessing] = useState(false);

  const startIsProcessing = () => {
    setIsProcessing(true);
  };

  const startIsNotProcessing = () => {
    setIsProcessing(false);
  };

  return { isProcessing, startIsProcessing, startIsNotProcessing };
};

export default useHandleIsProcessing;
