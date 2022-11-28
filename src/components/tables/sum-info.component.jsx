import { useState } from "react";
import {
  BounceInDiv,
  SelectedEntriesInfoDiv,
} from "../../styles/div/div.styles";
import {
  InfoButton,
  ClearAndReloadButton,
} from "../../styles/buttons/buttons.styles";

const SumInfo = () => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <>
      <hr />
      <SelectedEntriesInfoDiv>
        <InfoButton onClick={() => setShowInfo(!showInfo)} />
        {showInfo === true && (
          <BounceInDiv>
            <p>
              if you have multiple entries selected and you want to clear them,
              you can either uncheck each one individually ( this will update
              the combined amount total as you do it ), or press the clear
              selected entries button below which reloads the page & clears all
              selected entries.
            </p>
          </BounceInDiv>
        )}
        <ClearAndReloadButton onClick={() => window.location.reload()}>
          clear selected entries
        </ClearAndReloadButton>
      </SelectedEntriesInfoDiv>
    </>
  );
};

export default SumInfo;
