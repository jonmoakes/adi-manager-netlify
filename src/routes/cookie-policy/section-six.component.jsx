import { Div } from "../../styles/div/div.styles";
import { Href } from "../../styles/a/a.styles";

const SectionSix = () => (
  <Div>
    <p>6: Deleting cookies:</p>
    <p>
      6.1: You can delete cookies already stored on your computer; for example:
      <br />
      (a) in Internet Explorer, you must manually delete cookie files (you can
      find instructions for doing so{" "}
      <Href href="http://windows.microsoft.com/en-gb/internet-explorer/delete-manage-cookies#ie=ie-11">
        here
      </Href>{" "}
      )<br />
      (b) in Firefox, you can delete cookies by clicking "Tools", "Options" and
      "Privacy", then selecting "Use custom settings for history" from the
      drop-down menu, clicking "Show Cookies", and then clicking "Remove All
      Cookies";
      <br />
      and (c) in Chrome, you can delete all cookies by accessing the "Overflow
      Menu" ( The 3 vertical dots in the top right ), and clicking "Settings",
      "Privacy And Security", then "clear browsing data". then select "cookies
      and other site data" and then click "clear data".
    </p>
    <p>
      6.2: Please note that the above methods may change with different versions
      of the browsers. Please seek the help section of the respective browsers
      for more information.
    </p>
    <p>
      6.3: Deleting cookies will have a negative impact on the usability of many
      websites.
    </p>
  </Div>
);

export default SectionSix;
