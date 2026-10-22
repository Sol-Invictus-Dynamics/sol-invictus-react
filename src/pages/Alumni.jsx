import { useEffect } from "react";
import Nav from "../components/Nav.jsx";
import { usePageStyles, usePageTitle } from "../hooks/usePageStyles.js";
import { asset } from "../lib/asset.js";
import { teamSections, teamMentorSections } from "../data/teamData.js";
import stylesCss from "../styles/styles.css?raw";
import teamCss from "../styles/alumni.css?raw";

function AlumniGrid({ members }) {
  return (
    <div className="team-grid">
      {members.map((member) => (
        <article className="team-card" key={member.name}>
          <div className="card-img-wrap">
            <img
              src={asset(member.img)}
              alt={member.name}
              {...(member.imgId ? { id: member.imgId } : {})}
            />
          </div>
          <div className="card-info">
            <h3 className="card-name">{member.name}</h3>
            {member.nickname ? (
              <p className="alumni-nickname">“{member.nickname}”</p>
            ) : null}
            {member.role ? <p className="card-role">{member.role}</p> : null}
            {member.tripContext ? (
              <p className="alumni-context">{member.tripContext}</p>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
}

export default function Team() {
  usePageStyles("team", [stylesCss, teamCss]);
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
            Meet the <span className="accent">Alumni</span>
          </h1>
        </div>

        <AlumniGrid members={teamSections} />

        <div className="team-heading">
          <h1>
            Meet our <span className="accent">Mentors</span>
          </h1>
        </div>

        <AlumniGrid members={teamMentorSections} />
      </main>
    </>
  );
}
