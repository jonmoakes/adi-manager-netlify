import { useSelector } from "react-redux";

import useHandleAddPupilEntryChange from "./use-handle-add-pupil-entry-change";

import { selectErrorMessage } from "../../../store/error/error.selector";

import FetchError from "../../../components/fetch-error/fetch-error.component";
import AddEntryHeading from "../../../components/add-entry-heading/add-entry-heading.component";

import AddPupilsSaveReturnButtons from "./add-pupil-save-return-buttons.component";
import AddPupilInstructions from "./add-pupil-instructions";
import AddPupilEntryForm from "./add-pupil-entry-form.component";

import { NoHeaderFooterContainer } from "../../../styles/container/container.styles";
import { AddEntryDiv } from "../../../styles/div/div.styles";

const AddPupilEntryPage = () => {
  const { entry, handleChange } = useHandleAddPupilEntryChange();
  const errorMessage = useSelector(selectErrorMessage);
  const { theoryTestPassed } = entry;

  return (
    <NoHeaderFooterContainer>
      <>
        {errorMessage ? (
          <FetchError />
        ) : (
          <>
            <AddEntryHeading />
            <AddPupilsSaveReturnButtons {...{ entry }} />
            <AddEntryDiv>
              <AddPupilInstructions />
              <AddPupilEntryForm {...{ theoryTestPassed, handleChange }} />
            </AddEntryDiv>
          </>
        )}
      </>
    </NoHeaderFooterContainer>
  );
};

export default AddPupilEntryPage;
