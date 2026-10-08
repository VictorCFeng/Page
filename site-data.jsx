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
  title: "Started as Schmidt Science Postdoctoral Fellow at Cornell",
  body: "Joined the PEESE Lab with Prof. Fengqi You, working on energy system and data centers."
},
{
  date: "2025 · 06",
  tag: "Paper accepted",
  title: "Optimal Participation Design of DERs in General Frequency Shaping Services",
  venue: "IEEE Transactions on Power Systems"
},
{
  date: "2025 · 04",
  tag: "Book",
  title: "Cyber-Physical Virtual Power Plants: Modeling, Operation, and Control",
  venue: "Springer · ISBN 978-981-96-5357-7"
}];


const DIRECTIONS = [
{
  n: "01",
  title: "Data Centers, AI Infrastructure & Inverters",
  blurb:
  "The energy questions raised by hyperscale data centers and AI infrastructure, and the plug-and-play inverter-based resources that connect them to the grid. Spans regulation and strategy, control, and market incentives.",
  figure: "research-2.svg",
  keywords: ["Data centers", "AI infrastructure", "Inverter-based resources", "Plug-and-play control"]
},
{
  n: "02",
  title: "AI for Energy System Science & Engineering",
  blurb:
  "Using AI to bridge disciplinary boundaries in energy science, lift the accuracy of power-system models, and enable richer understanding of markets and users.",
  figure: "research-3.svg",
  keywords: ["Cross-disciplinary modeling", "AI-augmented control & forecasting", "Markets & users"]
},
{
  n: "03",
  title: "DER Flexibility, Coordination & Communication",
  blurb:
  "Where flexibility lives across the modern grid, and how to actually reach it at scale. Spans DER identification and aggregation, communication for millions of devices (5G slicing, goal-oriented and semantic communication, ADMM scheduling), and market mechanisms that put that flexibility to work.",
  figure: "research-1.svg",
  keywords: ["DER identification & aggregation", "Communication for massive devices", "5G & semantic communication", "Market mechanisms"]
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