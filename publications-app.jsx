/* global React, ReactDOM, SiteFoot */

const GROUPS = [
  {
    n: "01",
    id: "g1",
    title: "Power System Flexibility & Resilience",
    sub: "DERs, virtual power plants, P2P trading, frequency services, BESS",
    items: [
      { year: 2026, title: "Optimal Participation Design of DERs in General Frequency Shaping Services",
        authors: ["Cheng Feng", "Siyuan Wang", "H. Oliver Gao", "Fengqi You"],
        venue: "IEEE Transactions on Power Systems, 41, 682–694", badges: ["First author"] },
      { year: 2026, title: "Non-Iterative Coordination of Interconnected Power Grids via Dimension-Decomposition-Based Flexibility Aggregation",
        authors: ["Siyuan Wang", "Cheng Feng", "Fengqi You"],
        venue: "IEEE Transactions on Power Systems, 41, 705–717" },
      { year: 2025, title: "Cyber-Physical Virtual Power Plants: Modeling, Operation, and Control",
        authors: ["Cheng Feng", "Hongye Guo", "Kedi Zheng", "Qixin Chen", "Chongqing Kang"],
        venue: "Springer Book · ISBN 978-981-96-5357-7", badges: ["Book", "First author"] },
      { year: 2024, title: "Connection-Aware P2P Trading: Simultaneous Trading and Peer Selection",
        authors: ["Cheng Feng", "Kedi Zheng", "Lanqing Shan", "Hani Alers", "Qixin Chen", "Lampros Stergioulas", "Hongye Guo"],
        venue: "Applied Energy, 377: 124658", badges: ["First author"] },
      { year: 2023, title: "Provision of Contingency Frequency Services for Virtual Power Plants with Aggregated Models",
        authors: ["Cheng Feng", "Qixin Chen", "Yi Wang", "Peng-Yong Kong", "Hongchao Gao", "Songsong Chen"],
        venue: "IEEE Transactions on Smart Grid, 14(4), 2798–2811", badges: ["First author"] },
      { year: 2023, title: "Update Scheduling for ADMM-based Energy Sharing in Virtual Power Plants Considering Massive Prosumer Access",
        authors: ["Cheng Feng", "Kedi Zheng", "Yangze Zhou", "Peter Palensky", "Qixin Chen"],
        venue: "IEEE Transactions on Smart Grid, 14(5), 3961–3975", badges: ["First author"] },
      { year: 2022, title: "Frequency Regulation Service Provision for Virtual Power Plants through 5G RAN Slicing",
        authors: ["Cheng Feng", "Qixin Chen", "Yi Wang", "Jiaqi Ma", "Xuanyuan Wang"],
        venue: "IEEE Transactions on Smart Grid, 13(6), 4943–4956", badges: ["First author"] },
      { year: 2021, title: "Spatial-Temporal Energy Management of Base Stations in Cellular Networks",
        authors: ["Chenyu Zhou", "Cheng Feng (Co-first)", "Yi Wang"],
        venue: "IEEE Internet of Things Journal, 9(13), 10588–10599", badges: ["Co-first author"] },
    ],
  },
  {
    n: "02",
    id: "g2",
    title: "Data Centers, AI Infrastructure & Inverters",
    sub: "Inverter-based resources, decentralized stability, datacenter energy",
    items: [
      { year: 2026, title: "Unified Decentralized Small-Signal Stability Criterion for Grid-Connected Converters",
        authors: ["Cheng Feng", "Fengqi You"], venue: "IEEE Transactions on Power Systems, doi:10.1109/TPWRS.2024.3647533",
        badges: ["First author", "Code released"], highlight: "Code released" },
      { year: 2025, title: "Hybrid Oscillation Damping and Inertia Management for Distributed Energy Resources",
        authors: ["Cheng Feng", "Linbin Huang", "Xiuqiang He", "Yi Wang", "Florian Dörfler", "Chongqing Kang"],
        venue: "IEEE Transactions on Power Systems, 40(6), 5041–5056", badges: ["First author"] },
      { year: 2025, title: "Optimal grid-forming BESS management incorporating internal battery physics",
        authors: ["Yuanbo Chen", "Kedi Zheng", "Cheng Feng", "Junling Huang", "Hongye Guo", "Haiwang Zhong"],
        venue: "Applied Energy, 385: 125448" },
      { year: 2025, title: "Modeling Strategic Behaviors of Renewable-storage System in Low-Inertia Power System",
        authors: ["Kexin Li", "Hongye Guo", "Cheng Feng", "Yong Tang"],
        venue: "Working Paper, 2025" },
      { year: 2020, title: "Review of Energy Management for Data Centers in Energy Internet (In Chinese)",
        authors: ["Cheng Feng", "Yi Wang", "Qixin Chen", "Xuan Zhang", "Gang Luo"],
        venue: "Electric Power Automation Equipment, 40(7): 1–9", badges: ["First author"] },
    ],
  },
  {
    n: "03",
    id: "g3",
    title: "AI for Energy System Science & Engineering",
    sub: "AI-augmented modeling and control, semantic communication, edge intelligence, market design",
    items: [
      { year: 2025, title: "Precision Decarbonization for Clean Dairy Farming with Digital Twin and Edge Intelligence",
        authors: ["Cheng Feng", "Kristan F. Reed", "Julio O. Giordano", "Fengqi You"],
        venue: "Nexus, 2, 100105", badges: ["First author"] },
      { year: 2024, title: "Empowering the Grid Edge to Think: Applications of Artificial Intelligence for Virtual Power Plants in China",
        authors: ["Qixin Chen", "Xuanyuan Wang", "Cheng Feng (First student author)", "Chuyi Li", "Kedi Zheng"],
        venue: "IEEE Power and Energy Magazine, 22(6): 66–77", badges: ["First student author"] },
      { year: 2023, title: "Goal-Oriented Wireless Communication Resource Allocation for Cyber-Physical Systems",
        authors: ["Cheng Feng", "Kedi Zheng", "Yi Wang", "Kaibin Huang", "Qixin Chen"],
        venue: "IEEE Transactions on Wireless Communications, 23(11): 15768–15783", badges: ["First author"] },
      { year: 2023, title: "Latent Diffusion Model-enabled Low-Latency Semantic Communication",
        authors: ["Jianhua Pei", "Cheng Feng", "Ping Wang", "Hina Tabassum", "Dongyuan Shi"],
        venue: "IEEE Transactions on Wireless Communications, 24(5): 4055–4072" },
      { year: 2021, title: "Smart Grid Encounters Edge Computing: Opportunities and Applications",
        authors: ["Cheng Feng", "Yi Wang", "Qixin Chen", "Yi Ding", "Goran Strbac", "Chongqing Kang"],
        venue: "Advances in Applied Energy, 1: 100006", badges: ["First author", "Highly Cited"], highlight: "Highly Cited" },
      { year: 2021, title: "Device Access Optimization for Virtual Power Plants in Heterogeneous Networks",
        authors: ["Cheng Feng", "Yi Wang", "Xuanyuan Wang", "Qixin Chen"],
        venue: "IEEE Transactions on Smart Grid, 13(2), 1478–1489", badges: ["First author"] },
      { year: 2019, title: "Smart Meter Data-Driven Customizing Price Design for Retailers",
        authors: ["Cheng Feng", "Yi Wang", "Kedi Zheng", "Qixin Chen"],
        venue: "IEEE Transactions on Smart Grid, 11(3), 2043–2054", badges: ["First author"] },
    ],
  },
];

ReactDOM.createRoot(document.getElementById("nav")).render(
  <header className="site-nav">
    <a className="brand" href="index.html">Cheng Feng <em>冯成</em></a>
    <ul>
      <li><a href="index.html">Home</a></li>
      <li><a href="research.html">Research</a></li>
      <li><a href="publications.html" className="is-active">Publications</a></li>
      <li><a href="cv.html">CV</a></li>
    </ul>
  </header>
);

ReactDOM.createRoot(document.getElementById("foot")).render(<SiteFoot />);

const total = GROUPS.reduce((s, g) => s + g.items.length, 0);
ReactDOM.createRoot(document.getElementById("count")).render(
  <span>{}</span>
);

function PubRow({ p }) {
  // Render authors with bold "Cheng Feng" (and variants)
  const renderAuthors = () => {
    return p.authors.map((a, i) => {
      const last = i === p.authors.length - 1;
      const sep = last ? "" : (i === p.authors.length - 2 ? ", " : ", ");
      const isMe = a.startsWith("Cheng Feng");
      return (
        <React.Fragment key={i}>
          {isMe ? <b>{a}</b> : <span>{a}</span>}{sep}
        </React.Fragment>
      );
    });
  };
  return (
    <div className="pub">
      <span className="year">{p.year}</span>
      <div className="body">
        <div className="title">{p.title}</div>
        <div className="authors">{renderAuthors()}</div>
        <div className="venue">{p.venue}</div>
        {p.badges && (
          <div className="badges">
            {p.badges.map((b, i) => <span key={i} className={b === p.highlight ? "h" : ""}>{b}</span>)}
          </div>
        )}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("groups")).render(
  <>{GROUPS.map((g) => (
    <section key={g.n} id={g.id} className="group">
      <header className="group-head">
        <div className="n">{g.n}</div>
        <h2>{g.title}<span className="sub">{g.sub}</span></h2>
      </header>
      <div>{g.items.map((p, i) => <PubRow key={i} p={p} />)}</div>
    </section>
  ))}</>
);
