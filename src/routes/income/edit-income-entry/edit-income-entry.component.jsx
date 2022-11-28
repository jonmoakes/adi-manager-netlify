import { useSelector } from "react-redux";
import { selectErrorMessage } from "../../../store/error/error.selector";

import useHandleUpdatedIncomeEntryChange from "./use-handle-updated-income-entry-change";

import FetchError from "../../../components/fetch-error/fetch-error.component";
import EditEntryHeading from "../../../components/edit-entry-heading/edit-entry-heading.component";
import EditIncomeEntrySaveReturnButtons from "./edit-income-entry-save-return-buttons.component";
import UpdateEntryInfo from "../../../components/tables/update-entry-info.component";
import EditIncomeEntryForm from "./edit-income-entry-form.component";
// import EmailEntryButtons from "../../../components/email-entry-buttons/email-entry-buttons.component";

import { NoHeaderFooterContainer } from "../../../styles/container/container.styles";
import { DataDiv } from "../../../styles/div/div.styles";

const EditIncomeEntryPage = () => {
  const { handleChange, entry, updatedEntry } =
    useHandleUpdatedIncomeEntryChange();
  const errorMessage = useSelector(selectErrorMessage);

  // const emailBody = `Hi,%0D%0A%0D%0AHere%20Is%20Your%20Driving%20Lesson%20Receipt%20For%20${formattedIncomeDate}.%0D%0A%0D%0AName:%0D%0A${entry.name}%0D%0A%0D%0APayment%20Amount:%0D%0A£${entry.incomeReceived}%0D%0A%0D%0APart%20Of%20A%20Block%20Booking:%0D%0A${entry.blockBooking}%0D%0A%0D%0APayment%20Method:%0D%0A${entry.paymentMethod}%0D%0A%0D%0AKind%20Regards,`;

  return (
    <NoHeaderFooterContainer>
      {errorMessage ? (
        <FetchError />
      ) : (
        <>
          <EditEntryHeading />

          <DataDiv>
            <EditIncomeEntrySaveReturnButtons {...{ entry, updatedEntry }} />

            <UpdateEntryInfo />
            <EditIncomeEntryForm {...{ handleChange, entry }} />
            {/* <EmailEntryButtons {...{ entry, emailBody }} /> */}
          </DataDiv>
        </>
      )}
    </NoHeaderFooterContainer>
  );
};

export default EditIncomeEntryPage;
