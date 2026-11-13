import Link from "next/link";

const workflow = ["Case intake", "Assignment", "Visit plan", "Service report", "Verified closure"];

export function InstrumentConsoleFeature() {
  return (
    <article className="instrument-feature" id="instrument-console">
      <div className="instrument-copy">
        <div className="project-meta">
          <span className="stage-pill">Prototype · engineer-tested</span>
          <span className="category-pill">Thermo Fisher · service workflow</span>
        </div>
        <h3>Instrument Service Console</h3>
        <p>
          A service workflow shaped by a pattern I saw in the field: cases could stay unlogged while engineers moved between customer sites. I interviewed field engineers, wrote the PRD, designed the flow, and built a prototype for them to test.
        </p>
        <Link className="text-link instrument-case-link" href="/work/instrument-service-console">Explore the case study <span aria-hidden="true">↗</span></Link>
        <ul className="instrument-stats" aria-label="Discovery and prototype evidence">
          <li><strong>24</strong><span>field engineers interviewed</span></li>
          <li><strong>6 of 10</strong><span>service cases logged late in the observed group</span></li>
          <li><strong>10</strong><span>engineers tested the prototype</span></li>
          <li><strong>&lt;5 min*</strong><span>estimated closure flow, versus 15 minutes to a day</span></li>
        </ul>
      </div>
      <div className="instrument-visual">
        <div className="console-window" role="img" aria-label="Illustration of the documented service case workflow from intake through verified closure">
          <div className="console-window-head"><span>INSTRUMENT SERVICE CONSOLE</span><span className="window-dots" aria-hidden="true"><i /><i /><i /></span></div>
          <div className="console-title">One clear path from case to closure</div>
          <div className="workflow">
            {workflow.map((step, index) => (
              <div className="workflow-step" key={step}>
                <b>{String(index + 1).padStart(2, "0")}</b>
                <span>{step}</span>
              </div>
            ))}
          </div>
          <div className="console-foot"><span>*Estimated flow; not a measured production result.</span><strong>Prototype · 10 engineer testers</strong></div>
        </div>
      </div>
    </article>
  );
}
