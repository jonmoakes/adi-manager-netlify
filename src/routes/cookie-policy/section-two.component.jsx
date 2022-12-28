import { Div } from "../../styles/div/div.styles";

const SectionTwo = () => (
  <Div>
    <p>2: About cookies:</p>
    <p>
      2.1: A cookie is a file containing an identifier (a string of letters and
      numbers) that is sent by a web server to a web browser and is stored by
      the browser. The identifier is then sent back to the server each time the
      browser requests a page from the server.
    </p>
    <p>
      2.2: Cookies may be either "persistent" cookies or "session" cookies: a
      persistent cookie will be stored by a web browser and will remain valid
      until its set expiry date, unless deleted by the user before the expiry
      date; a session cookie, on the other hand, will expire at the end of the
      user session, when the web browser is closed.
    </p>
    <p>
      2.3: Cookies do not typically contain any information that personally
      identifies a user, but personal information that we store about you may be
      linked to the information stored in and obtained from cookies.
    </p>
    <p>
      2.4: Cookies can be used by web servers to identify and track users as
      they navigate different pages on a website and identify users returning to
      a website.
    </p>
  </Div>
);

export default SectionTwo;
