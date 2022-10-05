// import { useSelector } from "react-redux";

// import { selectCurrentUser } from "../../redux/user/user.selectors";

import { FooterNavigationItems  } from "../../styles/div/div.styles";
import {  AccountIcon, FeaturesIcon, PricingIcon, LoggedOutContactIcon } from "../../styles/svg/svg.styles";
import { AccountIconText, FeaturesIconText, PricingIconText, LoggedOutContactIconText } from "../../styles/text/text.styles";
import {  ImageLink} from "../../styles/link/link.styles";

import {
  featuresPath,
  pricingPath,
  aboutMePath,
  contactPath,
} from "../../strings/strings";

const ToolbarNoUser = () => {
  // const currentUser = useSelector(selectCurrentUser);

  return (
    <>
      {/* {!currentUser && ( */}
        <FooterNavigationItems>
          <ul>
            <li>
              <ImageLink to={featuresPath}>
                <FeaturesIcon />
                <FeaturesIconText>Features</FeaturesIconText>
              </ImageLink>
            </li>
            <li>
              <ImageLink to={pricingPath}>
                <PricingIcon />
                <PricingIconText>Pricing</PricingIconText>
              </ImageLink>
            </li>
            <li>
              <ImageLink to={aboutMePath}>
                <AccountIcon className="about-icon" />
                <AccountIconText className="about">About</AccountIconText>
              </ImageLink>
            </li>
            <li>
              <ImageLink to={contactPath}>
                <LoggedOutContactIcon />
                <LoggedOutContactIconText>Contact</LoggedOutContactIconText>
              </ImageLink>
            </li>
          </ul>
        </FooterNavigationItems>
      {/* )} */}
    </>
  );
};

export default ToolbarNoUser;
