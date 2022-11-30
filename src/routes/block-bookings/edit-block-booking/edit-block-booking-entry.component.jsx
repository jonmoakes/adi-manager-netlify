import { useSelector } from "react-redux";
import { selectErrorMessage } from "../../../store/error/error.selector";

import useHandleUpdatedBlockBookingEntryChange from "./use-handle-updated-block-booking-entry-change";
import useBlockBookingEmailBody from "./use-block-booking-email-body";

import FetchError from "../../../components/fetch-error/fetch-error.component";
import EditEntryHeading from "../../../components/edit-entry-heading/edit-entry-heading.component";
import EditBlockBookingEntrySaveReturnButtons from "./edit-block-booking-entry-save-return-buttons.component";
import UpdateEntryInfo from "../../../components/tables/update-entry-info.component";
import EditBlockBookingEntryForm from "./edit-block-booking-entry-form.component";
import EmailEntryButtons from "../../../components/email-entry-buttons/email-entry-buttons.component";

import { NoHeaderFooterContainer } from "../../../styles/container/container.styles";
import { DataDiv } from "../../../styles/div/div.styles";

const EditBlockBookingEntry = () => {
  const { handleChange, entry, updatedEntry } =
    useHandleUpdatedBlockBookingEntryChange();
  const { emailBody } = useBlockBookingEmailBody();

  console.log(entry);
  const errorMessage = useSelector(selectErrorMessage);

  return (
    <NoHeaderFooterContainer>
      {errorMessage ? (
        <FetchError />
      ) : (
        <>
          <EditEntryHeading />

          <DataDiv>
            <EditBlockBookingEntrySaveReturnButtons
              {...{ entry, updatedEntry }}
            />
            <UpdateEntryInfo />

            <EditBlockBookingEntryForm {...{ handleChange, entry }} />
            <EmailEntryButtons {...{ emailBody }} />
          </DataDiv>
        </>
      )}
    </NoHeaderFooterContainer>
  );
};

export default EditBlockBookingEntry;
