import LogoAndHeading from "./logo-and-heading.component";
import Intro from "./intro.component";
import ImageAndDataSyncInfo from "./image-and-data-sync-info.component";
import Features from "./features.component";

import { Container } from "../../styles/container/container.styles";

const Home = () => (
  <Container>
    <LogoAndHeading />
    <Intro />
     <ImageAndDataSyncInfo /> 
    <Features />
  </Container>
);

export default Home;
