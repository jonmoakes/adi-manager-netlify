import { Outlet, Link } from "react-router-dom";

import useShouldDisplayHeaderAndToolbar from "../../hooks/use-should-display-header-and-toolbar";

import SignedOutLinks from "./signed-out-links.component";
import SignedInLinks from "./signed-in-links.component";

import { Nav } from "../../styles/div/div.styles";
import { LogoImage } from "../../styles/image/image.styles";
import Logo from "../../assets/header/adi-logo.png";

const Navigation = () => {
  const { shouldDisplayHeaderAndToolbar } = useShouldDisplayHeaderAndToolbar();

  return (
    <>
      {shouldDisplayHeaderAndToolbar && (
        <>
          <Nav>
            <Link to="/">
              <LogoImage src={Logo} alt="logo" />
            </Link>
            <SignedOutLinks />
            <SignedInLinks />
          </Nav>
        </>
      )}
      <Outlet />
    </>
  );
};

export default Navigation;
