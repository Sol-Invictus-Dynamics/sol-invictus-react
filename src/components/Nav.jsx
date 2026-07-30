import { Link, useLocation, useNavigate } from "react-router-dom";
import { asset } from "../lib/asset.js";

// Shared top navigation. Section links (#car, #mission, …) scroll to the
// matching section on the home page; if the user is on another route we
// navigate home first and pass the target through router state so Home can
// scroll to it once mounted.
export default function Nav() {
  const location = useLocation();
  const navigate = useNavigate();

  function goToSection(e, id) {
    e.preventDefault();
    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: id } });
    }
  }

  return (
    <nav>
      <div className="nav-inner">
        <Link
          to="/"
          className="nav-brand"
          onClick={() => {
            if (location.pathname === "/")
              window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img
            src={asset("Logo.png")}
            alt="Logo"
            className="nav-logo-img"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
          <div className="nav-logo">
            <span className="sol">SOL</span>
            <span className="invictus">INVICTUS</span>
            <span className="dynamics-tag">[Dynamics]</span>
          </div>
        </Link>
        <ul className="nav-links">
          <li>
            <a href="#car" onClick={(e) => goToSection(e, "car")}>
              The Car
            </a>
          </li>
          <li>
            <a href="#mission" onClick={(e) => goToSection(e, "mission")}>
              Our Mission
            </a>
          </li>
          <li>
            <a
              href="#universities"
              onClick={(e) => goToSection(e, "universities")}
            >
              Universities
            </a>
          </li>
          <li>
            <Link to="/team">Team</Link>
          </li>
          <li>
            <Link to="/sponsors">Sponsors</Link>
          </li>
          <li>
            <a href="#goals" onClick={(e) => goToSection(e, "goals")}>
              Goals
            </a>
          </li>
          {/* <li><Link to="/blog">Blog</Link></li> */}
          <li>
            <a href="#contact" onClick={(e) => goToSection(e, "contact")}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
