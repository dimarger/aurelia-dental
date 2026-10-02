import { useState } from 'react';

const cases = [
  { title: 'Case 01', desc: 'Composite restoration', before: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=900&q=80', after: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80' },
  { title: 'Case 02', desc: 'Smile rehabilitation', before: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80', after: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&w=900&q=80' },
  { title: 'Case 03', desc: 'Implant restoration', before: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=900&q=80', after: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80' },
];

export default function BeforeAfter() {
  const [active, setActive] = useState(0);
  const [position, setPosition] = useState(52);
  const item = cases[active];
  return (
    <section className="section-pad results-section" aria-labelledby="results-title">
      <div className="section-heading split"><div><span className="eyebrow">Results</span><h2 id="results-title">Subtle, aesthetic outcomes.</h2></div><p>Examples focus on natural-looking changes and individual planning rather than exaggerated promises.</p></div>
      <div className="results-grid">
        <div className="ba-card">
          <div className="ba-slider" style={{ '--pos': `${position}%` }}>
            <img src={item.before} alt={`${item.desc} before`} />
            <img className="after" src={item.after} alt={`${item.desc} after`} />
            <div className="handle" />
            <input aria-label="Before and after comparison" type="range" min="15" max="85" value={position} onChange={(e) => setPosition(e.target.value)} />
          </div>
          <div className="ba-caption"><strong>{item.title}</strong><span>{item.desc}</span></div>
        </div>
        <div className="case-list">{cases.map((c, i) => <button className={i === active ? 'active' : ''} key={c.title} onClick={() => setActive(i)}><span>{c.title}</span>{c.desc}</button>)}</div>
      </div>
    </section>
  );
}
