import { Outlet } from "react-router-dom";

import NavLogo from "./nav-logo.component";

import { Nav } from "../../styles/div/div.styles";
import SignedOutLinks from "./signed-out-links.component";

const Navigation = () => {
  return (
    <>
      <Nav>
        <NavLogo />
        <SignedOutLinks />
      </Nav>
      <Outlet />
    </>
  );
};

export default Navigation;
