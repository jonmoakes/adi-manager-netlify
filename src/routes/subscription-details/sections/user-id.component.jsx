import { useSelector } from "react-redux";

import { selectCurrentUser } from "../../../store/user/user.selector";

import { HighlightText } from "../../../styles/span/span.styles";

const UserId = () => {
  const currentUser = useSelector(selectCurrentUser);
  return (
    <>
      <p>
        Your User Id is:
        <br />
        <HighlightText className="truncate">{currentUser.id}</HighlightText>
      </p>
      <hr />
    </>
  );
};

export default UserId;
