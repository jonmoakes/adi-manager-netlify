import EmailChangeDetected from "./email-change-detected.component";

import { LowercasedSpan } from "../../../styles/span/span.styles";
import useGetAndSetEmails from "../use-get-and-set-emails";

const Emails = () => {
  useGetAndSetEmails();
  const { loginEmail, billingEmail } = useGetAndSetEmails();

  return (
    <>
      {loginEmail === billingEmail && (
        <>
          <p>
            your login and billing email is:
            <br />
            <LowercasedSpan>{loginEmail}</LowercasedSpan>
          </p>
          <hr />
        </>
      )}

      {loginEmail !== billingEmail && (
        <>
          <p>
            your login email is:
            <br />
            <LowercasedSpan>{loginEmail}</LowercasedSpan>
          </p>
          <p>
            your billing email is:
            <br />
            <LowercasedSpan>{billingEmail}</LowercasedSpan>
          </p>
          <hr />
          <EmailChangeDetected />
        </>
      )}
    </>
  );
};

export default Emails;
