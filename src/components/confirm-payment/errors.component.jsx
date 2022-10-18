import { ErrorDiv, WarningDiv } from "../../styles/div/div.styles";

const Errors = ({ warning, error }) => (
  <>
    {warning ? (
      <WarningDiv>
        <p>{warning}</p>
      </WarningDiv>
    ) : (
      error && (
        <ErrorDiv>
          <p>{error}</p>
        </ErrorDiv>
      )
    )}
  </>
);

export default Errors;
