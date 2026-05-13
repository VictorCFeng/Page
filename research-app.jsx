/* global React, ReactDOM, DIRECTIONS, SiteNav, SiteFoot */

// Extended research data: questions + representative papers per direction.
const DETAIL = {
  "01": {
    questions: [
      { q: "How do we identify and aggregate flexibility?",
        d: "Where flexibility actually lives across the modern grid, and how to surface it from millions of distributed energy resources." },
      { q: "How do we secure flexibility across massive numbers of devices through communication?",
        d: "Communication-aware aggregation, 5G slicing for grid services, and scheduling for ADMM-based coordination at scale." },
      { q: "How do we use market mechanisms to put flexibility to work?",
        d: "Peer-to-peer trading, contingency frequency services, and pricing designs that draw out the latent flexibility." },
    ],
    papers: [
      { year: "2025", title: "Optimal Participation Design of DERs in General Frequency Shaping Services", venue: "IEEE TPWRS" },
      { year: "2024", title: "Connection-Aware P2P Trading: Simultaneous Trading and Peer Selection", venue: "Applied Energy" },
      { year: "2023", title: "Provision of Contingency Frequency Services for Virtual Power Plants with Aggregated Models", venue: "IEEE TSG" },
      { year: "2023", title: "Update Scheduling for ADMM-based Energy Sharing in Virtual Power Plants", venue: "IEEE TSG" },
    ],
  },
  "02": {
    questions: [
      { q: "What regulation and grid-planning strategy fit data centers and AI infrastructure?",
        d: "How load, generation, and policy meet for the AI build-out, and how the grid should plan around it." },
      { q: "What control technology keeps a converter-dominated grid plug-and-play stable?",
        d: "Decentralized stability criteria from local measurements; hybrid oscillation damping and inertia management for grid-forming inverters." },
      { q: "What market incentives align hyperscale loads and inverter-based resources with system needs?",
        d: "Pricing data-center flexibility and inverter dispatch so private incentives match grid-wide reliability." },
    ],
    papers: [
      { year: "2025", title: "Unified Decentralized Small-Signal Stability Criterion for Grid-Connected Converters", venue: "IEEE TPWRS", links: [{ label: "IEEE", href: "https://ieeexplore.ieee.org/document/11314535" }, { label: "Code", href: "https://github.com/PEESEgroup/Unified-Decentralized-Small-Signal-Stability-Criterion-for-Grid-Connected-Converters" }] },
      { year: "2025", title: "Hybrid Oscillation Damping and Inertia Management for Distributed Energy Resources", venue: "IEEE TPWRS 40(6)" },
      { year: "2025", title: "Optimal Grid-Forming BESS Management Incorporating Internal Battery Physics", venue: "Applied Energy 385" },
    ],
  },
  "03": {
    questions: [
      { q: "How can AI break the disciplinary boundaries of energy systems?",
        d: "Bringing hydrology, climate, and operational data into a single learnable substrate for energy decision-making." },
      { q: "How can AI improve the performance and accuracy of power-system models?",
        d: "Learning-augmented forecasting and control; foundation-model methods for grid-scale prediction and dispatch." },
      { q: "How can AI understand and interact with markets and users?",
        d: "Generative agents for retail and customer-facing operations; semantic communication for human and grid interfaces." },
    ],
    papers: [
      { year: "2024", title: "Empowering the Grid Edge to Think: AI for Virtual Power Plants in China", venue: "IEEE Power & Energy Magazine 22(6)" },
      { year: "2023", title: "Latent Diffusion Model-enabled Low-Latency Semantic Communication", venue: "IEEE TWC 24(5)" },
      { year: "2023", title: "Goal-Oriented Wireless Communication Resource Allocation for Cyber-Physical Systems", venue: "IEEE TWC 23(11)" },
      { year: "2022", title: "Frequency Regulation Service Provision for VPPs through 5G RAN Slicing", venue: "IEEE TSG 13(6)" },
      { year: "2021", title: "Smart Grid Encounters Edge Computing: Opportunities and Applications", venue: "Advances in Applied Energy (Highly Cited)" },
    ],
  },
};

// Inject nav (active=research)
ReactDOM.createRoot(document.getElementById("nav")).render(
  <header className="site-nav">
    <a className="brand" href="index.html">Cheng Feng <em>冯成</em></a>
    <ul>
      <li><a href="index.html">Home</a></li>
      <li><a href="research.html" className="is-active">Research</a></li>
      <li><a href="publications.html">Publications</a></li>
      <li><a href="cv.html">CV</a></li>
    </ul>
  </header>
);

ReactDOM.createRoot(document.getElementById("foot")).render(<SiteFoot />);

// TOC
ReactDOM.createRoot(document.getElementById("toc")).render(
  <>{DIRECTIONS.map((d) => (
    <a key={d.n} href={`#dir-${d.n}`}>
      <div className="n">DIRECTION · {d.n}</div>
      <div className="t">{d.title}</div>
    </a>
  ))}</>
);

// Direction blocks
function DirBlock({ d }) {
  const x = DETAIL[d.n] || { questions: [], papers: [] };
  return (
    <section id={`dir-${d.n}`} className="dir-block">
      <div className="dir-head">
        <div className="n">{d.n}</div>
        <div>
          <h2>{d.title}</h2>
          <p className="blurb">{d.blurb}</p>
        </div>
      </div>

      <div className="dir-body">
        <div>
          <h3>Key questions</h3>
          <ol className="q-list">
            {x.questions.map((q, i) => (
              <li key={i}>
                <div className="qt">{q.q}</div>
                <div className="qd">{q.d}</div>
              </li>
            ))}
          </ol>

          <h3>Representative papers</h3>
          <div className="papers">
            {x.papers.map((p, i) => (
              <div className="paper" key={i}>
                <div className="year">{p.year}</div>
                <div>
                  <div className="title">{p.title}</div>
                  <div className="meta">{p.venue}</div>
                  {p.links && (
                    <div className="links">
                      {p.links.map((l, j) => <a key={j} href={l.href} target="_blank" rel="noreferrer">{l.label} ↗</a>)}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="fig"><img src={d.figure} alt="" /></div>
      </div>
    </section>
  );
}

ReactDOM.createRoot(document.getElementById("directions")).render(
  <>{DIRECTIONS.map((d) => <DirBlock key={d.n} d={d} />)}</>
);
