import { Div } from "../../styles/div/div.styles";

const SectionFive = () => (
  <Div>
    <p>5: Blocking cookies:</p>
    <p>
      5.1: Most browsers allow you to refuse to accept cookies; for example:
      <br />
      (a) in Firefox, you can block all cookies by clicking "Tools", "Options",
      "Privacy", selecting "Use custom settings for history" from the drop-down
      menu, and unticking "Accept cookies from sites";
      <br />
      and (b) in Chrome, you can block all cookies by accessing the "Overflow
      Menu" ( The 3 vertical dots in the top right ), and clicking "Settings",
      "Privacy And Security" and "Cookies And Other Site Data", and then
      selecting "Block 3rd Party Cookies" or any of the other options.
    </p>
    <p>
      5.2: Please note that the above methods may change with different versions
      of the browsers. Please seek the help section of the respective browsers
      for more information. 5.3 Blocking all cookies will have a negative impact
      upon the usability of many websites.
    </p>
  </Div>
);

export default SectionFive;
