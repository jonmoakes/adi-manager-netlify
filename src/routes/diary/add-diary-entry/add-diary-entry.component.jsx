import { useSelector } from "react-redux";

import useHandleAddDiaryEntryChange from "./use-handle-add-diary-entry-change";

import { selectErrorMessage } from "../../../store/error/error.selector";

import FetchError from "../../../components/fetch-error/fetch-error.component";
import AddEntryHeading from "../../../components/add-entry-heading/add-entry-heading.component";
import AddDiarySaveReturnButtons from "./add-diary-save-return-buttons.component";
import AddDiaryEntryInstructions from "./add-diary-entry-instructions.component";
import AddDiaryEntryForm from "./add-diary-entry-form.component";

import { Container } from "../../../styles/container/container.styles";
import { AddEntryDiv } from "../../../styles/div/div.styles";

const AddDiaryEntry = () => {
  const { entry, handleChange } = useHandleAddDiaryEntryChange();
  const errorMessage = useSelector(selectErrorMessage);
  const { id } = entry;

  return (
    <Container>
      <>
        {errorMessage ? (
          <FetchError />
        ) : (
          <>
            <AddEntryHeading />
            <AddDiarySaveReturnButtons entry={entry} />
            <AddEntryDiv>
              <AddDiaryEntryInstructions />
              <AddDiaryEntryForm id={id} handleChange={handleChange} />
            </AddEntryDiv>
          </>
        )}
      </>
    </Container>
  );
};

export default AddDiaryEntry;
