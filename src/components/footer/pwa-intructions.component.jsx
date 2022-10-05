import { useState } from "react";

import IosInstructions from "./ios-instructions";
import AndroidInstructions from "./android-instructions";

import { InstructionsButton } from "../../styles/buttons/buttons.styles";
import { PwaBottomHr } from "../../styles/hr/hr.styles";

const PwaInstructions = () => {
  const [showIos, setShowIos] = useState(false);
  const [showAndroid, setShowAndroid] = useState(false);

  return (
    <>
      <p>
        Add This Website To Your Device's Home Screen for the best full screen
        experience!
      </p>
      <p>no app store needed!</p>

      {!showIos && (
        <InstructionsButton onClick={() => setShowIos(true)}>
          show apple instructions
        </InstructionsButton>
      )}
      {showIos && <IosInstructions {...{ setShowIos }} />}

      {!showAndroid && (
        <InstructionsButton onClick={() => setShowAndroid(true)}>
          show android instructions
        </InstructionsButton>
      )}
      {showAndroid && <AndroidInstructions {...{ setShowAndroid }} />}

      <PwaBottomHr />
    </>
  );
};

export default PwaInstructions;
