/* global React, ReactDOM, DIRECTIONS, SiteNav, SiteFoot */

// Extended research data: questions + representative papers per direction.
const DETAIL = {
  "01": {
    questions: [
      { q: "Who causes and who pays for data-center-driven grid costs?",
        d: "Estimating effects on wholesale prices, transmission costs, and household energy burdens." },
      { q: "What do host communities gain and lose?",
        d: "Linking electricity costs with tax incentives, jobs, and local income." },
      { q: "What rules should govern large digital loads?",
        d: "Interconnection requirements and market designs that keep costs with the facilities that cause them." },
    ],
    papers: [
      { year: "2026", title: "Data Centres Asymmetrically Exacerbate Energy Burdens through Wholesale Price Increases and Regressive Grid Cost Shifting", venue: "Nature Energy (accepted)", links: [{ label: "Code & data", href: "https://github.com/PEESEgroup/Data-Center-Equality" }] },
      { year: "2020", title: "Review of Energy Management for Data Centers in Energy Internet (In Chinese)", venue: "Electric Power Automation Equipment 40(7)" },
    ],
  },
  "02": {
    questions: [
      { q: "How can clean, firm power be secured for growing digital loads?",
        d: "Combining hydrology, reservoir operation, and machine learning to assess firm hydropower." },
      { q: "How do weather and climate shape grid risk?",
        d: "Separating system-wide adequacy risk from local infrastructure damage." },
      { q: "How can AI connect models across sectors?",
        d: "Aligning physical models and sparse data so uncertainty reaches the final decision." },
    ],
    papers: [
      { year: "2024", title: "Empowering the Grid Edge to Think: AI for Virtual Power Plants in China", venue: "IEEE Power & Energy Magazine 22(6)" },
      { year: "2021", title: "Smart Grid Encounters Edge Computing: Opportunities and Applications", venue: "Advances in Applied Energy (Highly Cited)" },
      { year: "2019", title: "Smart Meter Data-Driven Customizing Price Design for Retailers", venue: "IEEE TSG 11(3)" },
    ],
  },
  "03": {
    questions: [
      { q: "How can many small devices act as one grid resource?",
        d: "Aggregate models and distributed algorithms for virtual power plants." },
      { q: "Which messages matter for the grid?",
        d: "Goal-oriented communication that allocates network resources by each message's value to the control task." },
      { q: "Can these methods work in the field?",
        d: "Edge controllers and aggregation platforms developed with industry partners." },
    ],
    papers: [
      { year: "2026", title: "Goal-Oriented Communications for Future Cyber–Physical Systems", venue: "Nature Reviews Electrical Engineering 3(8) · Cover" },
      { year: "2025", title: "Connection-Aware P2P Trading: Simultaneous Trading and Peer Selection", venue: "Applied Energy" },
      { year: "2024", title: "Goal-Oriented Wireless Communication Resource Allocation for Cyber-Physical Systems", venue: "IEEE TWC 23(11)" },
      { year: "2023", title: "Provision of Contingency Frequency Services for Virtual Power Plants with Aggregated Models", venue: "IEEE TSG" },
      { year: "2023", title: "Update Scheduling for ADMM-based Energy Sharing in Virtual Power Plants", venue: "IEEE TSG" },
      { year: "2022", title: "Frequency Regulation Service Provision for VPPs through 5G RAN Slicing", venue: "IEEE TSG 13(6)" },
    ],
  },
  "04": {
    questions: [
      { q: "How can grid stability be certified from local information?",
        d: "Decentralized stability criteria that protect proprietary controller models." },
      { q: "How should damping, inertia, and frequency response be procured?",
        d: "Joint allocation and performance-based services for dynamic grid support." },
    ],
    papers: [
      { year: "2026", title: "Unified Decentralized Small-Signal Stability Criterion for Grid-Connected Converters", venue: "IEEE TPWRS", links: [{ label: "IEEE", href: "https://ieeexplore.ieee.org/document/11314535" }, { label: "Code", href: "https://github.com/PEESEgroup/Unified-Decentralized-Small-Signal-Stability-Criterion-for-Grid-Connected-Converters" }] },
      { year: "2025", title: "Optimal Participation Design of DERs in General Frequency Shaping Services", venue: "IEEE TPWRS" },
      { year: "2025", title: "Hybrid Oscillation Damping and Inertia Management for Distributed Energy Resources", venue: "IEEE TPWRS 40(6)" },
      { year: "2025", title: "Optimal Grid-Forming BESS Management Incorporating Internal Battery Physics", venue: "Applied Energy 385" },
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
      <div className="n">{d.n} · {d.tag}</div>
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
          <div className="tag">{d.tag}</div><h2>{d.title}</h2><div className="sub">{d.sub}</div>
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

        
      </div>
    </section>
  );
}

ReactDOM.createRoot(document.getElementById("directions")).render(
  <>{DIRECTIONS.map((d) => <DirBlock key={d.n} d={d} />)}</>
);
