import { useEffect, useRef, useState } from "react";
import { usePageStyles, usePageTitle } from "../hooks/usePageStyles.js";
import newsletterCss from "../styles/news-letter.css?raw";

export default function Newsletter() {
  usePageStyles("newsletter", newsletterCss);
  usePageTitle("SOl Invictus - Hero & Popup");

  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const emailRef = useRef(null);
  const formRef = useRef(null);

  const openPopup = () => {
    setOpen(true);
    // Focus the email field once the modal has transitioned in.
    setTimeout(() => emailRef.current?.focus(), 300);
  };
  const closePopup = () => setOpen(false);

  // Auto-open after 5s (matches the original script.js behaviour).
  useEffect(() => {
    const t = setTimeout(openPopup, 5000);
    return () => clearTimeout(t);
  }, []);

  // Close on Escape while open.
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && open) closePopup();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const handleSignup = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      closePopup();
      setSubmitted(false);
      formRef.current?.reset();
    }, 2000);
  };

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to SOl Invictus</h1>
          <p>
            Empowering your potential through cutting-edge solutions and
            innovative thinking
          </p>

          <button className="hero-cta" id="openPopup" onClick={openPopup}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
            Get Weekly Insights
          </button>
        </div>
      </section>

      {/* Newsletter Popup */}
      <div
        className={`popup-overlay${open ? " active" : ""}`}
        id="popupOverlay"
        onClick={(e) => {
          if (e.target === e.currentTarget) closePopup();
        }}
      >
        <div className="popup-modal">
          <button className="popup-close" id="closePopup" onClick={closePopup}>
            &times;
          </button>

          <div className="popup-header">
            <h2>Stay Ahead of the Curve</h2>
            <p>
              Subscribe to our weekly newsletter and receive exclusive insights,
              tips, and updates straight to your inbox.
            </p>
          </div>

          <form className="popup-form" ref={formRef} onSubmit={handleSignup}>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              required
              aria-label="Email address"
              ref={emailRef}
            />
            <button
              type="submit"
              style={submitted ? { background: "#10b981" } : undefined}
            >
              {submitted ? "Subscribed! ✓" : "Subscribe Free"}
            </button>
          </form>

          <p
            style={{
              fontSize: "0.85rem",
              color: "#94a3b8",
              marginTop: "1rem",
            }}
          >
            By subscribing, you agree to our{" "}
            <a href="#" style={{ color: "#3b82f6", textDecoration: "none" }}>
              Privacy Policy
            </a>
            . We respect your inbox.
          </p>
        </div>
      </div>

      <footer>&copy; 2024 SOl Invictus. All rights reserved.</footer>
    </>
  );
}
