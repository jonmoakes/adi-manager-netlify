import { Outlet, Link } from "react-router-dom";

import SignedOutLinks from "./signed-out-links.component";

import { Nav } from "../../styles/div/div.styles";
import { LogoImage } from "../../styles/image/image.styles";
import Logo from "../../assets/header/adi-logo.png";

const Navigation = () =>  (
    <>
      <Nav>
      <Link to="/"><LogoImage src={Logo} alt="logo" /></Link>
        <SignedOutLinks />
      </Nav>
      <Outlet />
    </>
  );


export default Navigation;
