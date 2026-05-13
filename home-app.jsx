/* global React, ReactDOM, SITE, NEWS, DIRECTIONS, EDUCATION, Avatar, EmailLink, SiteNav, SiteFoot, TweaksPanel, TweakRadio, useTweaks */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "font": "serif"
} /*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  React.useEffect(() => {
    document.documentElement.setAttribute("data-font-mode", t.font);
  }, [t.font]);
  return (
    <TweaksPanel title="Tweaks">
      <TweakRadio
        label="Typeface"
        value={t.font}
        onChange={(v) => setTweak("font", v)}
        options={[{ value: "serif", label: "Serif" }, { value: "sans", label: "Sans" }]} />
      
    </TweaksPanel>);

}

// Nav, avatar, foot, tweaks ─────────────────────────────────
ReactDOM.createRoot(document.getElementById("nav")).render(<SiteNav active="home" />);
ReactDOM.createRoot(document.getElementById("avatar")).render(<Avatar size={160} />);
ReactDOM.createRoot(document.getElementById("foot")).render(<SiteFoot />);
ReactDOM.createRoot(document.getElementById("tweaks-root")).render(<App />);

// Links row ─────────────────────────────────────────────────
ReactDOM.createRoot(document.getElementById("links")).render(
  <>
    <EmailLink />
    {SITE.links.map((l, i) =>
    <a key={i} href={l.href} target="_blank" rel="noreferrer">{l.label} ↗</a>
    )}
  </>
);

// News: featured + ticker ───────────────────────────────────
const featured = NEWS.find((n) => n.featured);
const rest = NEWS.filter((n) => !n.featured);

ReactDOM.createRoot(document.getElementById("feature")).render(
  <article className="feature">
    <div className="fig"><img src={featured.figure} alt="" /></div>
    <div className="body">
      <div className="kicker">
        <span className="tag">{featured.tag}</span>
        <span className="date">{featured.date}</span>
      </div>
      <h3>{featured.title}</h3>
      {featured.venue && <div className="venue">{featured.venue}</div>}
      {featured.body && <p className="summary">{featured.body}</p>}
      {featured.links &&
      <div className="actions">
          {featured.links.map((l, i) =>
        <a key={i} href={l.href} target="_blank" rel="noreferrer">{l.label} ↗</a>
        )}
        </div>
      }
    </div>
  </article>
);

ReactDOM.createRoot(document.getElementById("ticker")).render(
  <>{rest.map((n, i) =>
    <div className="item" key={i}>
      <span className="date">{n.date}</span>
      <span className="tag">{n.tag}</span>
      <div>
        <div className="title">{n.title}</div>
        {n.venue && <div className="venue">{n.venue}</div>}
        {n.body && <div style={{ color: "var(--ink-2)", fontSize: 14, marginTop: 4 }}>{n.body}</div>}
      </div>
    </div>
    )}</>
);

// Research directions ────────────────────────────────────────
ReactDOM.createRoot(document.getElementById("research")).render(
  <>{DIRECTIONS.map((d) =>
    <a key={d.n} href={`research.html#dir-${d.n}`} className="dir">
      <div className="n">{d.n}</div>
      <div>
        <h3 className="dir-title">{d.title}</h3>
        <p className="dir-blurb">{d.blurb}</p>
        <div className="kw">{d.keywords.map((k, i) => <span key={i}>{k}</span>)}</div>
        <div className="more">Read in depth →</div>
      </div>
      <div className="dir-fig"><img src={d.figure} alt="" /></div>
    </a>
    )}</>
);

// Education ──────────────────────────────────────────────────
ReactDOM.createRoot(document.getElementById("edu")).render(
  <>{EDUCATION.map((e, i) =>
    <div className="edu-row" key={i}>
      <div className="edu-period">{e.period}</div>
      <div>
        <div className="edu-role">{e.role}</div>
        <div className="edu-where">{e.where}</div>
      </div>
    </div>
    )}</>
);