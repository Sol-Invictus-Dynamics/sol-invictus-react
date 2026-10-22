import { useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav.jsx";
import { usePageStyles, usePageTitle } from "../hooks/usePageStyles.js";
import { asset } from "../lib/asset.js";
import { teamSections, teamMentorSections } from "../data/teamData.js";
import stylesCss from "../styles/styles.css?raw";
import teamCss from "../styles/team.css?raw";
import alumniBannerCss from "../styles/team.css?raw";

// function UniSection({ section }) {
//   return (
//     <section className="uni-section">
//       <h2 className="uni-title">{section.uni}</h2>
//       <div className="team-grid">
//         {section.members.map((m, i) => (
//           <div className={`team-card ${section.cls}`} key={i}>
//             <div className="card-img-wrap">
//               <img
//                 src={asset(m.img)}
//                 alt={m.name}
//                 {...(m.imgId ? { id: m.imgId } : {})}
//               />
//             </div>
//             <div className="card-info">
//               <p className="card-name">{m.name}</p>
//               {m.role ? <p className="card-role">{m.role}</p> : null}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default function Team() {
//   usePageStyles("team", [stylesCss, teamCss]);
//   usePageTitle("Team — SOL-Invictus | Sasol Solar Car Challenge");

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <>
//       <Nav />
//       <main className="team-page">
//         <div className="team-heading">
//           <h1>
//             Meet the <span className="accent">Team</span>
//           </h1>
//         </div>

//         {teamSections.map((section, i) => (
//           <UniSection section={section} key={i} />
//         ))}

//         <div className="team-heading">
//           <h1>
//             Meet our <span className="accent">Mentors</span>
//           </h1>
//         </div>

//         {teamMentorSections.map((section, i) => (
//           <UniSection section={section} key={i} />
//         ))}
//       </main>
//     </>
//   );
// }

export default function Team() {
  usePageStyles("team", [stylesCss, teamCss, alumniBannerCss]);
  usePageTitle("Team — SOL-Invictus | Sasol Solar Car Challenge");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Nav />
      <div className="team-container">
        <div className="team-content">
          <h1 className="team-heading">
            Our team will be announced soon!
          </h1>
          <h2 className="team-subheading">Stay tuned for updates.</h2>
        </div>
      </div>
      <Link
        to="/alumni"
        className="alumni-banner"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.55)), url("${asset("pictures/alumni-picture.jpg")}")`,
        }}
      >
        <span className="alumni-banner-content">
          <span className="alumni-banner-title">Meet our <span className="accent">Alumni</span></span>
          {/* <span className="alumni-banner-cta">Discover their stories</span> */}
        </span>
      </Link>
    </>
  );
}