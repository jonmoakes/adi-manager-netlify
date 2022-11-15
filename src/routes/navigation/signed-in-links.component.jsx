import { useSelector } from "react-redux";

import { selectCurrentUser } from "../../store/user/user.selector";

import { HeaderNavigationItems } from "../../styles/div/div.styles";
import {
  DiaryIcon,
  LessonsIcon,
  ExpensesIcon,
  PupilsIcon,
  DiaryIconText,
  LessonsIconText,
  ExpensesIconText,
  PupilsIconText,
} from "../../styles/svg/svg.styles";
import { ImageLink } from "../../styles/link/link.styles";

import {
  diaryPath,
  lessonsPath,
  moneyPath,
  pupilOptionsPath,
} from "../../strings/strings";

const SignedInLinks = () => {
  const currentUser = useSelector(selectCurrentUser);

  return (
    <>
      {currentUser && (
        <HeaderNavigationItems>
          <ul>
            <li>
              <ImageLink to={diaryPath}>
                <DiaryIcon />
                <DiaryIconText>Diary</DiaryIconText>
              </ImageLink>
            </li>
            <li>
              <ImageLink to={lessonsPath}>
                <LessonsIcon />
                <LessonsIconText>Lessons</LessonsIconText>
              </ImageLink>
            </li>
            <li>
              <ImageLink to={moneyPath}>
                <ExpensesIcon />
                <ExpensesIconText>Money</ExpensesIconText>
              </ImageLink>
            </li>
            <li>
              <ImageLink to={pupilOptionsPath}>
                <PupilsIcon />
                <PupilsIconText>Pupils</PupilsIconText>
              </ImageLink>
            </li>
          </ul>
        </HeaderNavigationItems>
      )}
    </>
  );
};

export default SignedInLinks;
