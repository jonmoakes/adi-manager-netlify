import { Outlet } from "react-router-dom";

import SignedOutLinks from "./signed-out-links.component";

import { Nav } from "../../styles/div/div.styles";
import { LogoImage } from "../../styles/image/image.styles";
import Logo from "../../assets/header/adi-logo.png";

const Navigation = () =>  (
    <>
      <Nav>
      <LogoImage src={Logo} alt="logo" />
        <SignedOutLinks />
      </Nav>
      <Outlet />
    </>
  );


export default Navigation;
