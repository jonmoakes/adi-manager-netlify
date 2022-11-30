import { PhoneDiv } from "../../../styles/div/div.styles";
import { PhoneIcon, TextIcon, EmailIcon } from "../../../styles/svg/svg.styles";

const PhoneTextEmail = ({ primaryPhoneNumber, emailAddress }) => {
  const callNumber = `tel:${primaryPhoneNumber}`;
  const textNumber = `sms:${primaryPhoneNumber}`;

  return (
    <>
      {primaryPhoneNumber !== "" && emailAddress === "" && (
        <PhoneDiv>
          <figure>
            <a href={callNumber}>
              <PhoneIcon />
            </a>
            <figcaption>Call</figcaption>
          </figure>

          <figure>
            <a href={textNumber}>
              <TextIcon />
            </a>
            <figcaption>Text</figcaption>
          </figure>
        </PhoneDiv>
      )}
      {primaryPhoneNumber === "" && emailAddress !== "" && (
        <PhoneDiv>
          <figure>
            <a href={`mailto:${emailAddress}?subject=Driving%20Lessons`}>
              <EmailIcon />
            </a>
            <figcaption>Email</figcaption>
          </figure>
        </PhoneDiv>
      )}
      {primaryPhoneNumber !== "" && emailAddress !== "" && (
        <PhoneDiv>
          <figure>
            <a href={callNumber}>
              <PhoneIcon />
            </a>
            <figcaption>Call</figcaption>
          </figure>

          <figure>
            <a href={textNumber}>
              <TextIcon />
            </a>
            <figcaption>Text</figcaption>
          </figure>

          <figure>
            <a href={`mailto:${emailAddress}?subject=Driving%20Lessons`}>
              <EmailIcon />
            </a>
            <figcaption>Email</figcaption>
          </figure>
        </PhoneDiv>
      )}
    </>
  );
};

export default PhoneTextEmail;
