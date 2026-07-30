import { useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav.jsx";
import { usePageStyles, usePageTitle } from "../hooks/usePageStyles.js";
import { asset } from "../lib/asset.js";
import { mentorsPageSections } from "../data/teamData.js";
import stylesCss from "../styles/styles.css?raw";
import teamCss from "../styles/team.css?raw";
import mentorCss from "../styles/mentorstyle.css?raw";

export default function Mentors() {
  usePageStyles("mentors", [stylesCss, teamCss, mentorCss]);
  usePageTitle("Team — SOL-Invictus | Sasol Solar Car Challenge");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Nav />
      <main className="team-page">
        <div className="team-heading">
          <h1>
            Meet our<span className="accent"> Mentors</span>
          </h1>
        </div>

        {mentorsPageSections.map((section, i) => (
          <section className="uni-section" key={i}>
            <h2 className="uni-title">{section.uni}</h2>
            {section.tba ? (
              <h1>TBA</h1>
            ) : (
              <div className="team-grid">
                {section.members.map((m, j) => (
                  <div className={`team-card ${section.cls}`} key={j}>
                    <div className="card-img-wrap">
                      <img src={asset(m.img)} alt={m.name} />
                    </div>
                    <div className="card-info">
                      <p className="card-name">{m.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        ))}

        <div className="team-heading">
          <h1>
            Meet our{" "}
            <Link to="/team" className="team-link">
              <span className="accent">Team</span>
            </Link>
          </h1>
        </div>
      </main>
    </>
  );
}
