import styled from "styled-components";

import { ReactComponent as LoaderSVG } from "../../assets/tl.svg";

export const LoaderDiv = styled.div`
 position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 30;
  background-color: black;
  opacity: 0.8;
`;

export const LoaderIcon = styled(LoaderSVG)`
  position: fixed;
  top: 50%;
  left: 50%;
  /* below makes the image in the centre not the top left in the center */
  transform: translate(-50%, -50%);
  height: 30%;
  width: 30%;
`;
