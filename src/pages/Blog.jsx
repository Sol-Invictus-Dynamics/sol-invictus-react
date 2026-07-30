import { useEffect, useState } from "react";
import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";
import { usePageStyles, usePageTitle } from "../hooks/usePageStyles.js";
import { asset } from "../lib/asset.js";
import {
  filters,
  featuredPost,
  posts,
  categoryLabels,
  categoryClass,
} from "../data/blogPosts.js";
import blogCss from "../styles/blog.css?raw";

// Blog post links pointed at blog-post.html in the original, which does not
// exist — they were dead links. We keep the cards clickable-looking but prevent
// navigation so the single-page app doesn't reload into a 404.
const noNavigate = (e) => e.preventDefault();

export default function Blog() {
  usePageStyles("blog", blogCss);
  usePageTitle("Blog — SOL-Invictus | Sasol Solar Car Challenge");

  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isVisible = (category) =>
    activeFilter === "all" || category === activeFilter;

  return (
    <>
      <Nav />

      <header className="blog-hero">
        <div className="blog-hero-bg"></div>
        <div className="blog-hero-content">
          <span className="section-tag">Dispatches from the Workshop</span>
          <h1>
            The <span className="sol">SOL</span> Journal
          </h1>
          <p>
            Build updates, race reports, engineering deep-dives, and team news
            from the SOLINVICTUS [Dynamics] crew.
          </p>
        </div>
      </header>

      <div className="filter-bar">
        <div className="filter-inner">
          {filters.map((f) => (
            <button
              key={f.filter}
              className={`filter-btn${activeFilter === f.filter ? " active" : ""}`}
              data-filter={f.filter}
              onClick={() => setActiveFilter(f.filter)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <section className="featured-section">
        <div className="section-center">
          <a
            href="blog-post.html"
            className="featured-card"
            data-category={featuredPost.category}
            onClick={noNavigate}
            style={{ display: isVisible(featuredPost.category) ? "" : "none" }}
          >
            <div className="featured-img">
              <img
                src={asset(featuredPost.img)}
                alt="SOL-1 chassis assembly"
                onError={(e) =>
                  e.currentTarget.parentElement.classList.add("no-img")
                }
              />
              <span className="featured-badge">Latest</span>
            </div>
            <div className="featured-body">
              <div className="post-meta-row">
                <span
                  className={`post-category ${categoryClass[featuredPost.category]}`}
                >
                  {categoryLabels[featuredPost.category]}
                </span>
                <span className="post-date">{featuredPost.date}</span>
              </div>
              <h2>{featuredPost.title}</h2>
              <p>{featuredPost.excerpt}</p>
              <div className="post-author">
                <div className="author-avatar">
                  <img
                    src={asset(featuredPost.author.avatar)}
                    alt="Author"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
                <div>
                  <span className="author-name">{featuredPost.author.name}</span>
                  <span className="author-role">{featuredPost.author.role}</span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>

      <section className="posts-section">
        <div className="section-center">
          <div className="posts-grid">
            {posts.map((post, i) => (
              <a
                key={i}
                href="blog-post.html"
                className="post-card"
                data-category={post.category}
                onClick={noNavigate}
                style={{ display: isVisible(post.category) ? "" : "none" }}
              >
                <div className="post-card-img">
                  <img
                    src={asset(post.img)}
                    alt={post.title}
                    onError={(e) =>
                      e.currentTarget.parentElement.classList.add("no-img")
                    }
                  />
                </div>
                <div className="post-card-body">
                  <div className="post-meta-row">
                    <span
                      className={`post-category ${categoryClass[post.category]}`}
                    >
                      {categoryLabels[post.category]}
                    </span>
                    <span className="post-date">{post.date}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="load-more-wrap">
            <button className="load-more-btn">Load More Posts</button>
          </div>
        </div>
      </section>

      <section className="newsletter-section">
        <div className="section-center">
          <div className="newsletter-card">
            <div className="newsletter-text">
              <h2>Stay in the Loop</h2>
              <p>
                Build updates, race results, and team announcements — straight to
                your inbox. No spam, just solar.
              </p>
            </div>
            <div className="newsletter-form">
              <input type="email" placeholder="your@email.com" />
              <button type="button">Subscribe</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
