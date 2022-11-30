import { useSelector } from "react-redux";

import useHandleAddBlockBookingEntryChange from "./use-handle-add-block-booking-entry-change";

import { selectErrorMessage } from "../../../store/error/error.selector";

import FetchError from "../../../components/fetch-error/fetch-error.component";
import AddEntryHeading from "../../../components/add-entry-heading/add-entry-heading.component";

import AddBlockBookingSaveReturnButtons from "./add-block-booking-save-return-buttons.component";
import AddBlockBookingInstructions from "./add-block-booking-instructions.component";
import AddBlockBookingEntryForm from "./add-block-booking-entry-form.component";

import { NoHeaderFooterContainer } from "../../../styles/container/container.styles";
import { AddEntryDiv } from "../../../styles/div/div.styles";

const AddBlockBookingEntry = () => {
  const { entry, handleChange } = useHandleAddBlockBookingEntryChange();
  const errorMessage = useSelector(selectErrorMessage);

  return (
    <NoHeaderFooterContainer>
      <>
        {errorMessage ? (
          <FetchError />
        ) : (
          <>
            <AddEntryHeading />
            <AddBlockBookingSaveReturnButtons {...{ entry }} />
            <AddEntryDiv>
              <AddBlockBookingInstructions />
              <AddBlockBookingEntryForm {...{ handleChange }} />
            </AddEntryDiv>
          </>
        )}
      </>
    </NoHeaderFooterContainer>
  );
};

export default AddBlockBookingEntry;
