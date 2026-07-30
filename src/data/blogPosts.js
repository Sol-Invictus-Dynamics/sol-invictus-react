// Blog content extracted verbatim from the original blog/blog.html.

export const categoryLabels = {
  build: "Build Log",
  race: "Race Reports",
  tech: "Tech Deep-Dive",
  team: "Team News",
};

export const categoryClass = {
  build: "cat-build",
  race: "cat-race",
  tech: "cat-tech",
  team: "cat-team",
};

export const filters = [
  { filter: "all", label: "All Posts" },
  { filter: "build", label: "Build Log" },
  { filter: "race", label: "Race Reports" },
  { filter: "tech", label: "Tech Deep-Dive" },
  { filter: "team", label: "Team News" },
];

export const featuredPost = {
  category: "build",
  date: "25 May 2026",
  img: "blog/featured.jpg",
  title: "Chassis Assembly Complete — SOL-1 Takes Shape",
  excerpt:
    "After three months of fabrication and late nights in the workshop, the SOL-1 chassis is fully assembled. Here's how we got here and what's coming next.",
  author: { name: "Team Member", role: "Team Lead", avatar: "team/member1.jpg" },
};

export const posts = [
  {
    category: "tech",
    date: "18 May 2026",
    img: "blog/post-solar-cells.jpg",
    title: "Choosing Our Solar Cells: Why We Went with Monocrystalline",
    excerpt:
      "An engineering breakdown of the cell selection process, efficiency benchmarks, and why monocrystalline silicon was the right call for SOL-1.",
  },
  {
    category: "team",
    date: "10 May 2026",
    img: "blog/post-team-workshop.jpg",
    title: "Meet the Electrical Sub-Team: The Current Behind the Car",
    excerpt:
      "Five students. One battery management system. A lot of wire. Get to know the team responsible for SOL-1's electrical architecture.",
  },
  {
    category: "build",
    date: "28 Apr 2026",
    img: "blog/post-aero-test.jpg",
    title: "Aero Shell v2: Lessons from the Wind Tunnel",
    excerpt:
      "Our first aero shell didn't survive testing. The second one did. Here's what changed and why we rebuilt from scratch.",
  },
  {
    category: "race",
    date: "15 Apr 2026",
    img: "blog/post-sasol-prep.jpg",
    title: "Race Strategy 101: How We Plan to Tackle the Sasol Route",
    excerpt:
      "Solar racing isn't just about speed. It's about energy management, weather, and strategy. Here's our approach to the 2026 route.",
  },
  {
    category: "tech",
    date: "2 Apr 2026",
    img: "blog/post-bms.jpg",
    title: "Building a BMS from Scratch: Our Battery Management Journey",
    excerpt:
      "Off-the-shelf wasn't going to cut it. We designed a custom battery management system tailored to SOL-1's power profile.",
  },
  {
    category: "team",
    date: "20 Mar 2026",
    img: "blog/post-sponsors.jpg",
    title: "New Sponsors On Board — And What It Means for SOL-1",
    excerpt:
      "We've secured partnerships that will directly impact the car's development. Here's who joined and what they're bringing.",
  },
];
