/* global window, React */
// Shared data + small components used by all 3 home variants.

const SITE = {
  name: "Cheng Feng",
  nameCn: "冯成",
  role: "Eric & Wendy Schmidt Science Postdoctoral Fellow",
  affiliation: "College of Engineering, Cornell University",
  pi: "Prof. Fengqi You",
  // Email split to deter naive scrapers. Assembled at runtime via JS.
  emailUser: "chengfeng",
  emailDomain: "cornell.edu",
  links: [
  { label: "Google Scholar", href: "https://scholar.google.com/citations?user=IYYhpdUAAAAJ&hl" },
  { label: "ResearchGate", href: "https://www.researchgate.net/profile/Cheng-Feng-7" },
  { label: "GitHub", href: "https://github.com/VictorCFeng" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/cheng-feng-592847272/" }]

};

const NEWS = [
{
  date: "2026 · 10",
  tag: "Paper accepted",
  title: "Data Centres Asymmetrically Exacerbate Energy Burdens through Wholesale Price Increases and Regressive Grid Cost Shifting",
  venue: "Nature Energy",
  body: "Formally accepted in Nature Energy. The study quantifies how data-centre load growth raises wholesale electricity prices, shifts transmission costs across customer classes, and changes household energy burdens and distributional outcomes across the United States. Data and code are openly available.",
  figure: "https://raw.githubusercontent.com/PEESEgroup/Data-Center-Equality/main/results/icon.png",
  links: [
  { label: "Code & data on GitHub", href: "https://github.com/PEESEgroup/Data-Center-Equality" }],

  featured: true
},
{
  date: "2026 · 08",
  tag: "Cover article",
  title: "Cover of Nature Reviews Electrical Engineering, August 2026",
  venue: "Nature Reviews Electrical Engineering · 3, 475–492 (2026)",
  body: "Our review, \"Goal-oriented communications for future cyber–physical systems,\" is the cover story of the August 2026 issue. It argues that the bottleneck in future cyber-physical systems is not raw throughput but the mismatch between what the network transmits and what the physical task requires, and builds a unified framework across networked sensing and control, decision-making, distributed intelligence, and multimodal intelligence. Cover image and design: Karen Moore.",  figure: "pictures/nree-cover.png",
  links: [
  { label: "Read the paper", href: "https://doi.org/10.1038/s44287-026-00303-9" }]
},
{
  date: "2026 · 08",
  tag: "Paper published",
  title: "Goal-Oriented Communications for Future Cyber–Physical Systems",
  venue: "Nature Reviews Electrical Engineering, 3, 475–492",
  body: "The review shows that task-level metrics such as control error, inference accuracy, and decision utility, rather than bit-level metrics, govern reliable operation, and that goal-oriented communication can cut transmitted data by two to three orders of magnitude."
},
{
  date: "2026 · 03",
  tag: "Seminar",
  title: "The first Cornell AI for Sustainability (AI4S) Seminar",
  body: "The AI4S Seminar series held its first session at Cornell. I serve as a coordinator and host of the series. Everyone is welcome to attend.",
  links: [
  { label: "Seminar page", href: "https://sustainability.ai.cornell.edu/seminars/" }]
},
{
  date: "2025 · 11",
  tag: "Paper accepted",
  title: "Unified Decentralized Small-Signal Stability Criterion for Grid-Connected Converters",
  venue: "IEEE Transactions on Power Systems",
  body: "A decentralized, plug-and-play criterion that lets each grid-connected converter certify system stability from local measurements, with no need for a global system model.",
  figure: "pictures/news-paper.png",
  links: [
  { label: "IEEE Xplore", href: "https://ieeexplore.ieee.org/document/11314535" },
  { label: "Code on GitHub", href: "https://github.com/PEESEgroup/Unified-Decentralized-Small-Signal-Stability-Criterion-for-Grid-Connected-Converters" }]
},
{
  date: "2025 · 09",
  tag: "New role",
  title: "Joined the Cornell AI for Sustainability Initiative",
  body: "Joined the Cornell AI for Sustainability Initiative as a Schmidt AI in Science Postdoctoral Fellow, working with Prof. Fengqi You (energy systems engineering), Prof. Carla Gomes (computational sustainability), and Prof. Alexander Flecker (ecology and evolutionary biology)."
},
{
  date: "2025 · 06",
  tag: "Paper accepted",
  title: "Optimal Participation Design of DERs in General Frequency Shaping Services",
  venue: "IEEE Transactions on Power Systems",
  body: "The paper proposes a generalized frequency-shaping service that coordinates heterogeneous DERs against one desired system frequency trajectory, reducing reserve costs by up to 60% in test cases."
},
{
  date: "2025 · 04",
  tag: "Book",
  title: "Cyber-Physical Virtual Power Plants: Modeling, Operation, and Control",
  venue: "Springer · ISBN 978-981-96-5357-7",
  body: "The book is based on my Ph.D. thesis at Tsinghua University, which received the university's Excellent Doctoral Thesis award. It covers the modeling, operation, and control of virtual power plants as cyber-physical systems."
}];


const DIRECTIONS = [
{
  n: "01",
  tag: "Affordability",
  sub: "Integrating computing loads, onsite energy assets, and market obligations into the physical grid",
  title: "Data Centers and Large Digital Loads",
  summary: "Who causes and who pays for the grid costs of AI data centers, and what connection and market rules can integrate large digital loads without shifting costs and risks to other users.",
  blurb: "AI data centers are a new class of grid participant that combines computing load with onsite energy assets. I study how they affect electricity prices, households, and host communities, and design connection and market rules that integrate them fairly.",
  keywords: ["Societal impacts", "Host communities", "Energy burden", "Cost allocation", "Interconnection & market rules"]
},
{
  n: "02",
  tag: "Sustainability",
  sub: "Fusing data with physical models of energy, water, and climate",
  title: "Physics-Guided AI for Cross-Sector Decisions",
  summary: "Physics-guided AI that corrects physical models, preserves their constraints, and carries uncertainty into energy decisions that span water, climate, and digital infrastructure.",
  blurb: "I develop physics-guided AI that combines data with physical models of energy, water, and climate, and carries their uncertainty into planning and operating decisions.",
  keywords: ["Physics-guided machine learning", "Uncertainty quantification", "Energy, water & climate", "Generative downscaling"]
},
{
  n: "03",
  tag: "Flexibility",
  sub: "Co-designing communication networks and device control for distributed resources",
  title: "DER Flexibility, Coordination & Communication",
  summary: "Communication and control that turn batteries, vehicles, buildings, and flexible loads into virtual power plants that operators can quantify, price, and schedule.",
  blurb: "I model virtual power plants as cyber-physical systems and design communication and control methods that turn distributed devices into flexibility the grid can rely on.",
  keywords: ["Virtual power plants", "Distributed optimization", "Goal-oriented communication", "Field deployment"]
},
{
  n: "04",
  tag: "Reliability",
  sub: "Certifying digital controllers embedded in physical power networks",
  title: "Stability of Power-Electronic Grids",
  summary: "Decentralized stability certificates and performance-based services that let programmable power electronics connect safely and support the grid.",
  blurb: "I develop stability certificates and grid services for power-electronic grids, so that programmable converters can connect safely and support the system.",
  keywords: ["Decentralized stability", "Grid-forming inverters", "Frequency shaping services", "Grid codes"]
}];


const EDUCATION = [
{ period: "2025.09 — Present", role: "Eric & Wendy Schmidt Science Postdoctoral Fellow", where: "PEESE Lab, Cornell University", country: "US" },
{ period: "2024.09 — 2025.08", role: "Ezra Postdoctoral Associate, Energy System Engineering", where: "PEESE Lab, Cornell University", country: "US" },
{ period: "2023.02 — 2023.08", role: "Visiting Scholar", where: "Automatic Control Lab (ifA), ETH Zürich", country: "CH" },
{ period: "2019.09 — 2024.06", role: "Ph.D., Electrical Engineering", where: "Energy Intelligence Lab, Tsinghua University", country: "CN" },
{ period: "2015.09 — 2019.06", role: "B.E., Electrical Engineering", where: "Huazhong University of Science and Technology", country: "CN" }];


// ── Reusable atoms ───────────────────────────────────────────

function Avatar({ size = 220, className = "" }) {
  return (
    <div
      className={"avatar avatar-photo " + className}
      style={{ width: size, height: size, lineHeight: 0 }}>
      
      <img
        src="pictures/cheng-feng.png"
        alt="Cheng Feng"
        style={{ width: "100%", height: "auto", display: "block" }} />
      
    </div>);

}

// ── EmailLink ─────────────────────────────────────────────────
// Email obfuscation: parts join at runtime, '@' built from char code so the
// literal string "chengfeng@cornell.edu" never appears in any source artifact.
function EmailLink({ children, style }) {
  const [addr, setAddr] = React.useState("");
  React.useEffect(() => {
    setAddr(SITE.emailUser + String.fromCharCode(64) + SITE.emailDomain);
  }, []);
  if (!addr) {
    return <span style={style}>{children || "email"}</span>;
  }
  return <a href={"mailto:" + addr} style={style}>{children || addr}</a>;
}

function Eyebrow({ children, style }) {
  return <div className="eyebrow" style={style}>{children}</div>;
}

function PaperLinks({ links }) {
  if (!links || !links.length) return null;
  return (
    <div style={{ display: "flex", gap: 14, flexWrap: "wrap", fontFamily: "var(--sans)", fontSize: 13 }}>
      {links.map((l, i) =>
      <a key={i} href={l.href} target="_blank" rel="noreferrer">
          {l.label} <span aria-hidden style={{ opacity: 0.55 }}>↗</span>
        </a>
      )}
    </div>);

}

function SiteNav({ active = "home" }) {
  const items = [
  { id: "home", label: "Home", href: "index.html" },
  { id: "research", label: "Research", href: "research.html" },
  { id: "publications", label: "Publications", href: "publications.html" },
  { id: "cv", label: "CV", href: "cv.html" }];

  return (
    <nav className="site-nav">
      <a className="brand" href="index.html">
        Cheng Feng <em>冯成</em>
      </a>
      <ul>
        {items.map((it) =>
        <li key={it.id}>
            <a href={it.href} className={active === it.id ? "is-active" : ""}>{it.label}</a>
          </li>
        )}
      </ul>
    </nav>);

}

function SiteFoot() {
  return (
    <footer className="site-foot">
      <span>© 2026 Cheng Feng</span>
      <span>Last updated · May 2026</span>
    </footer>);

}

Object.assign(window, {
  SITE, NEWS, DIRECTIONS, EDUCATION,
  Avatar, Eyebrow, EmailLink, PaperLinks, SiteNav, SiteFoot
});