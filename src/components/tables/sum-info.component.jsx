import useToggleShowInfo from "../../hooks/use-toggle-show-info.component";

import {
  BounceInDiv,
  FlexColumnCenteredDiv,
} from "../../styles/div/div.styles";
import {
  InfoButton,
  ClearAndReloadButton,
} from "../../styles/buttons/buttons.styles";

const SumInfo = () => {
  const { toggleShowInfo, showInfo } = useToggleShowInfo();

  const reload = () => {
    window.location.reload();
  };

  return (
    <>
      <hr />
      <FlexColumnCenteredDiv>
        <p>Tap to toggle help.</p>
        <InfoButton onClick={toggleShowInfo} />

        {showInfo && (
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
        <ClearAndReloadButton onClick={reload}>
          clear selected entries
        </ClearAndReloadButton>
      </FlexColumnCenteredDiv>
    </>
  );
};

export default SumInfo;
