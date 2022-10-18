import { useState } from "react";

import { InfoButton } from "../../styles/buttons/buttons.styles";
import { BounceInDiv, Div } from "../../styles/div/div.styles";
import { Href } from "../../styles/a/a.styles";

const CreateLoginDetailsPassAdvice = () => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <Div>
      <p>thank you!</p>
      <p>
        Now lets create the details you will use to sign into the app with.
        please complete the following fields:
      </p>
      <p>
        you can tap the info button below for suggestions on good security
        practices.
      </p>
      <InfoButton onClick={() => setShowInfo(!showInfo)} />
      {showInfo && (
        <BounceInDiv>
          <p>
            following good security practices for your password, We recommend
            using 12 characters or more. It can be any combination of letters,
            numbers, and symbols.
          </p>
          <p>however the minimum acceptable password length is 6 characters.</p>
          <p>
            I recommend the use of a password manager like{" "}
            <Href href="https://www.lastpass.com/">LastPass</Href> to safely
            store long complex passwords without having to remember them.
          </p>
          <p>
            I use LastPass myself and can vouch for how good it is - please Note
            that the link is NOT an affiliate link, just a personal
            recommendation from someone who is passionate about online security!
            :)
          </p>
        </BounceInDiv>
      )}
    </Div>
  );
};

export default CreateLoginDetailsPassAdvice;
