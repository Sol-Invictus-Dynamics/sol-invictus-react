// Rosters extracted verbatim from the original teampage/team.html and
// teampage/mentors.html. Image paths are relative to /public.

// ── /team page: team members grouped by university ──────────────────────────
export const teamSections = [
  {
    uni: "Belgium Campus iTversity",
    cls: "uni-belgium",
    members: [
      { name: "Fourie van der Walt", role: "Software Engineer", img: "pictures/mugshots/Fourie Van der Walt.png" },
      { name: "Michael van der Berg", role: "Software Engineer", img: "pictures/mugshots/Michael van der Berg.jpeg" },
      { name: "Mpho Maaga", role: "Software Engineer", img: "pictures/mugshots/Mpho Maaga.png" },
      { name: "Henning Coetzer", role: "Software Engineer", img: "pictures/mugshots/Henning Coetzer.jpg" },
      { name: "Schalk van den Berg", role: "Software Engineer", img: "pictures/mugshots/Schalk van den Berg.jpg" },
      { name: "Tshego Mashego", role: "Software Engineer", img: "pictures/mugshots/Tshego Mashego.jpg" },
      { name: "Reitumetse Given Moreke", role: "Software Engineer", img: "pictures/mugshots/Reitumetse Given Moreke.jpeg" },
    ],
  },
  {
    uni: "CTU Training Solutions",
    cls: "uni-ctu",
    members: [
      { name: "Tyler Davel", role: "Software Engineer", img: "pictures/mugshots/Tyler Davel.jpg" },
      { name: "Dewald van Jaarsveld", role: "Software Engineer", img: "pictures/mugshots/Dewald van Jaarsveld.jpg" },
      { name: "Aneesah Rehman", role: "Software Engineer", img: "pictures/mugshots/Aneesah Rehman.jpg" },
      { name: "Paul Dolski", role: "Mechanical Engineer", img: "pictures/mugshots/Paul Dolski.jpg" },
      { name: "Monde Msomi", role: "Mechanical Engineer", img: "pictures/mugshots/Monde Msomi.jpg" },
      { name: "Unarine Netshivhale", role: "Electrical Engineer", img: "pictures/mugshots/Unarine Netshivhale.jpg", imgId: "Unarine" },
      { name: "Altus Smit", role: "Project Manager", img: "pictures/mugshots/Altus Smit.jpg" },
    ],
  },
];

// ── Mentors shown at the bottom of the /team page ───────────────────────────
export const teamMentorSections = [
  {
    uni: "Belgium Campus iTversity",
    cls: "uni-belgium",
    members: [
      { name: "Francois Venter", img: "pictures/mugshots/mentor-mugshots/Francois Venter.webp" },
      { name: "Prof. HB Klopper", img: "pictures/mugshots/mentor-mugshots/Prof. HB Klopper.jpg" },
      { name: "Prof. Japie Greeff", img: "pictures/mugshots/mentor-mugshots/Prof Japie Greeff.webp" },
      { name: "Jacqui Muller", img: "pictures/mugshots/mentor-mugshots/Jacqui Muller.jpg" },
      { name: "Richard Du Plessis", img: "pictures/mugshots/mentor-mugshots/Richard Du Plessis.jpg" },
    ],
  },
];

// ── /mentors page ───────────────────────────────────────────────────────────
export const mentorsPageSections = [
  {
    uni: "Belgium Campus IT Versity",
    cls: "uni-belgium",
    tba: false,
    members: [
      { name: "Francois Venter", img: "pictures/mugshots/mentor-mugshots/Francois Venter.webp" },
      { name: "Prof. HB Klopper", img: "pictures/mugshots/mentor-mugshots/Prof. HB Klopper.jpg" },
      { name: "Prof. Japie Greeff", img: "pictures/mugshots/mentor-mugshots/Prof Japie Greeff.webp" },
      { name: "Jacqui Muller", img: "pictures/mugshots/mentor-mugshots/Jacqui Muller.jpg" },
      { name: "Richard du Plessis", img: "pictures/mugshots/mentor-mugshots/temp stock image.png" },
    ],
  },
  { uni: "Open Window", cls: "uni-openwindow", tba: true, members: [] },
  { uni: "IMM", cls: "uni-imm", tba: true, members: [] },
];
