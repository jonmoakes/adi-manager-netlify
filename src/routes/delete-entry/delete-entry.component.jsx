import { useSelector } from "react-redux";

import { selectErrorMessage } from "../../store/error/error.selector";

import FetchError from "../../components/fetch-error/fetch-error.component";
import DeleteEntryHeading from "./delete-entry-heading.component";
import DeleteEntryButtons from "./delete-entry-buttons.component";

import { NoHeaderFooterContainer } from "../../styles/container/container.styles";

const DeleteEntryPage = () => {
  const errorMessage = useSelector(selectErrorMessage);

  return (
    <NoHeaderFooterContainer>
      {errorMessage ? (
        <FetchError />
      ) : (
        <>
          <DeleteEntryHeading />
          <DeleteEntryButtons />
        </>
      )}
    </NoHeaderFooterContainer>
  );
};

export default DeleteEntryPage;
