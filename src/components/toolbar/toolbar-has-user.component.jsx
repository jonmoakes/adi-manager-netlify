import { useSelector } from "react-redux";

import useLogout from "../../hooks/use-logout";

import { selectCurrentUser } from "../../store/user/user.selector";

import { FooterNavigationItems } from "../../styles/div/div.styles";
import {
  LoggedInContactIcon,
  LinksIcon,
  AccountIcon,
  LogoutIcon,
} from "../../styles/svg/svg.styles";
import {
  LoggedInContactIconText,
  LinksIconText,
  AccountIconText,
  LogoutIconText,
} from "../../styles/text/text.styles";
import { ImageLink } from "../../styles/link/link.styles";

import {
  contactPath,
  usefulLinksPath,
  myAccountPath,
} from "../../strings/strings";

const ToolbarHasUser = () => {
  const { logoutConfirmBox } = useLogout();
  const currentUser = useSelector(selectCurrentUser);

  return (
    <>
      {currentUser && (
        <FooterNavigationItems>
          <ul>
            <li>
              <ImageLink to={contactPath}>
                <LoggedInContactIcon />
                <LoggedInContactIconText>Contact</LoggedInContactIconText>
              </ImageLink>
            </li>
            <li>
              <ImageLink to={usefulLinksPath}>
                <LinksIcon />
                <LinksIconText>Links</LinksIconText>
              </ImageLink>
            </li>
            <li>
              <ImageLink to={myAccountPath}>
                <AccountIcon />
                <AccountIconText>Account</AccountIconText>
              </ImageLink>
            </li>
            <li>
              <LogoutIcon onClick={logoutConfirmBox} />
              <LogoutIconText>Logout</LogoutIconText>
            </li>
          </ul>
        </FooterNavigationItems>
      )}
    </>
  );
};

export default ToolbarHasUser;
