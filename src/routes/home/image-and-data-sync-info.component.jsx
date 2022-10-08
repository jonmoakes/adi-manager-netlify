import ProgressiveImg from "../../components/progressive-image/progressive-image.component";

import ImagePlaceHolder from "../../assets/image-placeholder.jpeg";

import { Div } from "../../styles/div/div.styles";
import { ImageDiv } from "../../styles/image/image.styles";
import { H2 } from "../../styles/h2/h2.styles";
import { Href } from "../../styles/a/a.styles";

import { incomeTable } from "../../image-links/image-links";

const ImageAndDataSyncInfo = () => (
  <Div>
    <ImageDiv>
      <a href={incomeTable}>
        <ProgressiveImg
          src={incomeTable}
          alt="Income Table"
          placeholderSrc={ImagePlaceHolder}
        />
      </a>
    </ImageDiv>

    <H2>Syncs All Your Data To Any Device!</H2>
    <p>
      For example, maybe you like to use your phone / tablet device during the
      day, then your PC at night.
    </p>
    <p>
      all of your data that you input on your phone / tablet, is immediately
      available on any other device that you log into the app with!
    </p>
    <H2>PWA Compliant:</H2>
    <p>
      the ADI Manager is a Fully{" "}
      <Href href="https://web.dev/what-are-pwas/">Progressive Web App</Href> ( PWA )
      allowing you to install the app on your phone / tablet's home screen,
      eliminating the need for the app store!
      <br />( see the bottom of the page for the simple instructions ).
    </p>
    <p>
      It can also be used on any home PC / Mac so you can keep track of your
      business at home or on the move!
    </p>
  </Div>
);

export default ImageAndDataSyncInfo;
