import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";
import { usePageStyles, usePageTitle } from "../hooks/usePageStyles.js";
import { asset } from "../lib/asset.js";
import { contactMethods } from "../data/contactMethods.js";
import stylesCss from "../styles/styles.css?raw";
import newsletterCss from "../styles/news-letter.css?raw";

const hideOnError = (e) => {
  e.currentTarget.style.display = "none";
};

export default function Home() {
  // Home originally linked styles.css and news-letter.css (in that order).
  usePageStyles("home", [stylesCss, newsletterCss]);
  usePageTitle("Home - SOL-Invictus | Sasol Solar Car Challenge");

  const location = useLocation();

  // When we arrive from another page via a section link, scroll to it once
  // mounted. Otherwise start at the top.
  useEffect(() => {
    const id = location.state?.scrollTo;
    if (id) {
      const t = setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 60);
      return () => clearTimeout(t);
    }
    window.scrollTo(0, 0);
    // Run once on mount.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Nav />

      <section id="hero">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <img
            src={asset("Logo.png")}
            alt="SOLINVICTUS Logo"
            className="hero-logo-large"
            onError={hideOnError}
          />
          <div className="hero-eyebrow">Sasol Solar Car Challenge 2026</div>
          <h1 className="hero-title">
            <span className="sol">SOL</span>
            <span className="invictus">INVICTUS</span>
            <br />
            <span className="dynamics-tag">[Dynamics]</span>
          </h1>
          <p className="hero-sub">
            Unconquered by the Sun. Driven by High-Performance Engineering.
          </p>
          <a
            href="#car"
            className="hero-cta"
            onClick={(e) => scrollToSection(e, "car")}
          >
            Discover Our Journey
          </a>
        </div>
      </section>

      <section id="car">
        <div className="car-bg"></div>
        <div className="car-inner section-center">
          <div className="car-img-wrap">
            <img
              src={asset("pictures/SOL-1.jpg")}
              alt="SOL-1 Solar Race Car"
              id="car-image"
              onError={(e) => {
                e.currentTarget.style.background = "#e8e8e8";
                e.currentTarget.style.height = "340px";
                e.currentTarget.alt = "SOL-1 — Car image coming soon";
              }}
            />
          </div>
          <div className="car-info">
            <span className="section-tag">Our Machine</span>
            <h2>
              Meet
              <br />
              SOL-1
            </h2>
            <p>
              SOL-1 is a purpose-built solar-electric race car engineered by the
              students of SOLINVICTUS [Dynamics]. Every component has been
              designed, tested, and refined to push the boundaries of what
              student-led engineering can achieve.
            </p>
            <div className="car-specs">
              <div className="spec">
                <div className="spec-val">Solar</div>
                <div className="spec-label">Power Source</div>
              </div>
              <div className="spec">
                <div className="spec-val">Student</div>
                <div className="spec-label">Built &amp; Designed</div>
              </div>
              <div className="spec">
                <div className="spec-val">100%</div>
                <div className="spec-label">Renewable Energy</div>
              </div>
              <div className="spec">
                <div className="spec-val">2026</div>
                <div className="spec-label">Competition Year</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="mission">
        <div className="section-center">
          <div className="section-header">
            <span className="section-tag">What We Stand For</span>
            <h2>Our Mission</h2>
            <p>
              We are united by a commitment to sustainable innovation, academic
              excellence, and high-performance engineering leadership.
            </p>
            <div className="divider"></div>
          </div>
          <div className="pillars">
            <div className="pillar">
              <div className="pillar-num">01</div>
              <h3>Sustainable Innovation</h3>
              <p>
                We believe in building a cleaner future through renewable energy
                technology, proving that sustainable transport is achievable
                today.
              </p>
            </div>
            <div className="pillar">
              <div className="pillar-num">02</div>
              <h3>Academic Excellence</h3>
              <p>
                Every challenge we face on the track mirrors the rigor we apply
                in the classroom. Real-world engineering begins here.
              </p>
            </div>
            <div className="pillar">
              <div className="pillar-num">03</div>
              <h3>Collaborative Spirit</h3>
              <p>
                Across disciplines and universities, we work as one team united
                by a common goal — to win and to inspire.
              </p>
            </div>
            <div className="pillar">
              <div className="pillar-num">04</div>
              <h3>Student Empowerment</h3>
              <p>
                We equip students with hands-on experience, leadership skills,
                and industry exposure that no lecture hall can replicate.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="universities">
        <div className="uni-bg"></div>
        <div className="section-center">
          <div className="section-header">
            <span className="section-tag">Our Consortium</span>
            <h2>Participating Institutions</h2>
            <p>
              SOLINVICTUS [Dynamics] is a proud multi-university collaboration,
              bringing together the brightest minds across South African
              academic institutions.
            </p>
            <div className="divider"></div>
          </div>
          <div className="uni-grid">
            <a
              href="https://www.belgiumcampus.ac.za/"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="uni-card">
                <img
                  src={asset("pictures/belgium-campus-logo.webp")}
                  alt="Belgium Campus iTversity"
                />
                <h3>
                  <span className="university-links">
                    Belgium Campus iTversity
                  </span>
                </h3>
              </div>
            </a>
            <a
              href="https://www.ctutraining.ac.za/"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="uni-card">
                <img
                  src={asset("pictures/ctu-logo.png")}
                  alt="CTU Training Solutions"
                />
                <h3>
                  <span className="university-links">CTU</span>
                </h3>
              </div>
            </a>
            <a
              href="https://www.openwindow.co.za/"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="uni-card">
                <img
                  src={asset("pictures/open-window-logo.png")}
                  alt="Open Window"
                />
                <h3>
                  <span className="university-links">Open Window</span>
                </h3>
              </div>
            </a>
            <a
              href="https://www.imm.ac.za/"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="uni-card">
                <img src={asset("pictures/imm-logo.png")} alt="IMM" />
                <h3>
                  <span className="university-links">IMM</span>
                </h3>
              </div>
            </a>
            <div className="uni-card">
              <img src={asset("pictures/uxi-logo.png")} alt="UXI" />
              <h3>
                <a className="university-links" href="" target="_blank" rel="noreferrer">
                  UXI
                </a>
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section id="goals">
        <div className="section-center">
          <div className="section-header">
            <span className="section-tag">Looking Ahead</span>
            <h2>Strategic Objectives</h2>
            <p>
              Beyond the race, we are committed to creating lasting impact for
              students, institutions, and the engineering community.
            </p>
            <div className="divider"></div>
          </div>
          <div className="goals-grid">
            <div className="goal">
              <div className="goal-num">01</div>
              <div className="goal-text">
                <h3>Race &amp; Win</h3>
                <p>
                  Compete at the highest level of the Sasol Solar Car Challenge.
                </p>
              </div>
            </div>
            <div className="goal">
              <div className="goal-num">02</div>
              <div className="goal-text">
                <h3>Inspire Next Gen</h3>
                <p>
                  Show younger students that engineering is impactful and within
                  reach.
                </p>
              </div>
            </div>
            <div className="goal">
              <div className="goal-num">03</div>
              <div className="goal-text">
                <h3>Clean Energy Research</h3>
                <p>
                  Apply findings to real research contributing to renewable
                  energy.
                </p>
              </div>
            </div>
            <div className="goal">
              <div className="goal-num">04</div>
              <div className="goal-text">
                <h3>Industry Bridges</h3>
                <p>
                  Connect students with partners for internships and
                  opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="section-center">
          <div className="section-header">
            <span className="section-tag">Get in Touch</span>
            <h2>Contact Us</h2>
            <p>
              Reach out through any of our communication channels. We'd love to
              hear from you.
            </p>
            <div className="divider"></div>
          </div>
          <div id="contact-methods" className="contact-grid">
            {contactMethods.map((method, i) => (
              <div className="contact-method" key={i}>
                <div className="contact-icon">{method.icon}</div>
                <div className="contact-title">{method.title}</div>
                <div className="contact-value">{method.value}</div>
                <a
                  href={method.action}
                  className={method.buttonClass}
                  {...(method.target ? { target: method.target } : {})}
                >
                  {method.buttonText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
