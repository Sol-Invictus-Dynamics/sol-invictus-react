import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Team from "./pages/Team.jsx";
import Mentors from "./pages/Mentors.jsx";
import Sponsors from "./pages/Sponsors.jsx";
import Blog from "./pages/Blog.jsx";
import Newsletter from "./pages/Newsletter.jsx";

// HashRouter is used so the app works on any static host (e.g. GitHub Pages)
// without server-side rewrites — deep links and refreshes always resolve.
export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/mentors" element={<Mentors />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}
