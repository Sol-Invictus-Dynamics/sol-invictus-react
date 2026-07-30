import { useEffect } from "react";
import Nav from "../components/Nav.jsx";
import { usePageStyles, usePageTitle } from "../hooks/usePageStyles.js";
import stylesCss from "../styles/styles.css?raw";
import sponsorCss from "../styles/sponsor.css?raw";

export default function Sponsors() {
  usePageStyles("sponsors", [stylesCss, sponsorCss]);
  usePageTitle("Sponsors — SOL-Invictus | Sasol Solar Car Challenge");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Nav />
      <div className="sponsor-container">
        <div className="sponsor-content">
          <h1 className="sponsor-heading">
            Our sponsors will be announced soon!
          </h1>
          <h2 className="sponsor-subheading">Stay tuned for updates.</h2>
        </div>
      </div>
    </>
  );
}
