import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { caseStudies, getCaseStudy } from "@/data/case-studies";
import { HomeNav } from "@/components/home/HomeNav";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return { title: "Case study not found" };
  return {
    title: `${study.title} — Gagan Deep`,
    description: study.summary,
    alternates: { canonical: `/work/${study.slug}` },
    openGraph: { title: `${study.title} — Gagan Deep`, description: study.summary, type: "article" },
  };
}

function InstrumentConsoleVisual() {
  return (
    <div className="instrument-console-art" role="img" aria-label="Interface illustration, not a screenshot, showing a fictional local service case, a submitted report, and the customer review and vendor handoff steps">
      <div className="instrument-console-art-label"><span>INTERFACE ILLUSTRATION</span><span>LOCAL WINDOWS DEMO · FICTIONAL DATA</span></div>
      <div className="instrument-console-window">
        <div className="instrument-console-titlebar"><span className="instrument-console-appmark">IS</span><strong>Instrument Service Console</strong><span className="instrument-console-local">LOCAL DEMO</span><span className="instrument-console-window-dots" aria-hidden="true"><i /><i /><i /></span></div>
        <div className="instrument-console-layout">
          <nav className="instrument-console-nav" aria-label="Illustrated demo navigation">
            <span className="instrument-console-nav-label">WORKSPACE</span>
            <span className="instrument-console-nav-item is-active"><i />Case queue</span>
            <span className="instrument-console-nav-item"><i />Instruments</span>
            <span className="instrument-console-nav-item"><i />Service reports</span>
            <span className="instrument-console-user"><b>DF</b><span>Demo Field Engineer<small>Fictional profile</small></span></span>
          </nav>
          <section className="instrument-console-main" aria-label="Illustrated case review">
            <div className="instrument-console-crumb"><span>VENDOR WORKSPACE</span><span>›</span><span>CASE QUEUE</span></div>
            <div className="instrument-console-case-heading"><div><span className="instrument-console-kind">BREAKDOWN CASE</span><h2>UV detector</h2><p>Demo Pharma · Hyderabad</p></div><span className="instrument-console-status"><i />Report submitted</span></div>
            <div className="instrument-console-progress" aria-label="Case progress">
              <div className="is-done"><b>01</b><span>Case raised</span></div><i />
              <div className="is-done"><b>02</b><span>Visit complete</span></div><i />
              <div className="is-current"><b>03</b><span>Report review</span></div>
            </div>
            <div className="instrument-console-report"><span className="instrument-console-file-icon" aria-hidden="true">PDF</span><span><small>SERVICE REPORT</small><strong>Example-Service-Report.pdf</strong></span><span className="instrument-console-report-state">READY TO REVIEW</span></div>
          </section>
          <aside className="instrument-console-next"><span className="instrument-console-nav-label">UP NEXT</span><div className="instrument-console-next-step"><b>1</b><span>Customer reviews report</span></div><div className="instrument-console-next-step"><b>2</b><span>Vendor closes with handoff code</span></div><p>The PM date moves forward after the case is closed.</p></aside>
        </div>
      </div>
    </div>
  );
}

function WalletVisual() {
  return (
    <div className="case-wallet-visual" role="img" aria-label="Group Wallet product concept illustration showing contributions pooled before a trip and spending requests approved together">
      <div className="case-wallet-top"><span>GROUP WALLET</span><span>PRODUCT CONCEPT · ILLUSTRATION</span></div>
      <p>Move the payment moment before the trip.</p>
      <div className="case-wallet-pool"><span>SHARED TRIP POOL</span><strong>Contribute before you go</strong><div aria-hidden="true"><i /><i /><i /><i /></div></div>
      <div className="case-wallet-request"><span>SPENDING REQUEST</span><strong>Everyone reviews. Everyone approves.</strong><small>Unanimous tap-to-approve proposal</small></div>
      <div className="case-wallet-bottom"><span>Not a shipped wallet</span><span>No payment integration</span></div>
    </div>
  );
}

function EngineeringVisual({ slug }: { slug: string }) {
  if (slug === "s-shaped-e-peg-board") {
    return (
      <div className="engineering-case-visual peg-case-visual" role="img" aria-label="Illustration of an S-shaped rehabilitation board, its eight Hall-effect sensor positions, and the team’s prototype award">
        <span className="engineering-case-tag">ACADEMIC TEAM PROTOTYPE</span>
        <svg viewBox="0 0 760 390" aria-hidden="true" focusable="false">
          <path className="peg-board-shadow" d="M180 70 C320 20 480 74 515 155 C554 252 420 298 290 266 C160 234 108 306 194 347 C269 382 418 333 536 360" />
          <path className="peg-board" d="M180 70 C320 20 480 74 515 155 C554 252 420 298 290 266 C160 234 108 306 194 347 C269 382 418 333 536 360" />
          <path className="peg-guide" d="M180 70 C320 20 480 74 515 155 C554 252 420 298 290 266 C160 234 108 306 194 347 C269 382 418 333 536 360" />
          {[[191,69],[303,54],[415,68],[504,127],[484,233],[366,280],[220,280],[241,357]].map(([x,y], i) => <g className="peg-sensor" key={i}><circle cx={x} cy={y} r="16"/><circle cx={x} cy={y} r="4"/><text x={x+21} y={y+4}>0{i+1}</text></g>)}
        </svg>
        <div className="engineering-case-award"><span>TEAM AWARD</span><strong>First Runner-Up</strong><small>College Major Project Exhibition · Ramaiah Institute of Technology</small></div>
        <span className="engineering-case-caption">8 Hall-effect sensors · magnetic pegs · modular board</span>
      </div>
    );
  }
  return (
    <div className="engineering-case-visual junction-case-visual" role="img" aria-label="System illustration showing camera and ultrasonic sensor input processed by a Raspberry Pi to trigger an LCD and buzzer alert">
      <span className="engineering-case-tag">EDUCATIONAL PROTOTYPE · TOY-VEHICLE TRIALS</span>
      <svg viewBox="0 0 820 310" aria-hidden="true" focusable="false">
        <path className="junction-road" d="M40 254 H780 M410 254 V25"/><path className="junction-road-mark" d="M40 254 H780 M410 254 V25"/>
        <g className="junction-node junction-camera"><rect x="30" y="46" width="170" height="91" rx="14"/><circle cx="73" cy="84" r="13"/><text x="98" y="81">CAMERA</text><text x="51" y="116">TFLite · OpenCV</text></g>
        <g className="junction-node junction-pi"><rect x="310" y="31" width="200" height="81" rx="15"/><text x="337" y="66">RASPBERRY PI 3B+</text><text x="341" y="91">Python · object detection</text></g>
        <g className="junction-node junction-ultra"><rect x="620" y="46" width="170" height="91" rx="14"/><path d="M649 85 q13 -18 26 0 M644 93 q18 -27 36 0"/><text x="685" y="81">DISTANCE</text><text x="638" y="116">Ultrasonic sensor</text></g>
        <path className="junction-flow" d="M200 91 H295 M510 91 H610 M410 118 V157"/><path className="junction-alert-flow" d="M410 157 V193"/>
        <g className="junction-alert"><rect x="294" y="193" width="232" height="76" rx="15"/><text x="326" y="226">DRIVER ALERT</text><text x="325" y="250">LCD feedback + buzzer</text></g>
      </svg>
      <span className="engineering-case-caption">Concept for an obstructed T-junction · no real-intersection deployment</span>
    </div>
  );
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <div className="site-page case-page" id="top">
      <a className="skip-link" href="#case-content">Skip to case study</a>
      <HomeNav />
      <main id="case-content" className="case-main">
        <header className="case-hero site-container">
          <Link className="case-back-link" href="/#work"><span aria-hidden="true">←</span> Selected work</Link>
          <div className="case-hero-copy">
            <div className="project-meta">
              <span className={`stage-pill stage-${study.stage.toLowerCase().replaceAll(" ", "-")}`}>{study.stage}</span>
              <span className="category-pill">{study.discipline}</span>
            </div>
            <h1 className="case-title">{study.title}</h1>
            <p className="case-summary">{study.summary}</p>
            <dl className="case-credits">
              <div><dt>My part</dt><dd>{study.role}</dd></div>
              {study.timeframe && <div><dt>When</dt><dd>{study.timeframe}</dd></div>}
            </dl>
          </div>
          <div className={`case-visual${study.slug === "bindaas-blr" ? " case-visual-wide" : ""}${study.slug === "instrument-service-console" ? " case-visual-console" : ""}`}>
            {study.image ? <Image src={study.image} alt={study.imageAlt ?? ""} fill priority sizes="(max-width: 760px) 92vw, (max-width: 1500px) 78vw, 1260px" /> : study.slug === "instrument-service-console" ? <InstrumentConsoleVisual /> : study.stage === "Academic prototype" ? <EngineeringVisual slug={study.slug} /> : study.slug === "group-wallet" ? <WalletVisual /> : null}
            {study.image && <span className="case-visual-caption">{study.imageCaption ?? `${study.title} · ${study.stage}`}</span>}
          </div>
        </header>

        {study.evidence.length > 0 && (
          <section className={`case-evidence site-container${study.evidence.length > 4 ? " case-evidence-five" : ""}`} aria-label="Project evidence">
            {study.evidence.map((item) => <div className="case-evidence-item" key={item.label}><strong>{item.value}</strong><span>{item.label}</span>{item.note && <small>{item.note}</small>}</div>)}
          </section>
        )}

        <div className="case-body site-container">
          <nav className="case-index" aria-label="On this page">
            <span className="eyebrow">On this page</span>
            {study.sections.map((section, index) => <a href={`#case-section-${index + 1}`} key={section.label}>{section.label.split(" · ")[1]}</a>)}
          </nav>
          <div className="case-sections">
            {study.sections.map((section, index) => (
              <section className="case-section" id={`case-section-${index + 1}`} key={section.label}>
                <span className="eyebrow">{section.label}</span>
                <h2>{section.title}</h2>
                {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </section>
            ))}
            <section className="case-stack" aria-labelledby="case-stack-heading">
              <span className="eyebrow">In the work</span>
              <h2 id="case-stack-heading">Tools and methods</h2>
              <div className="skills-line">{study.stack.map((item) => <span className="skill-chip" key={item}>{item}</span>)}</div>
            </section>
          </div>
        </div>

        <footer className="case-end site-container">
          <div><span className="eyebrow">Keep exploring</span><h2>More work, more questions.</h2></div>
          <div className="case-end-links">
            {study.productUrl && <a className="text-link" href={study.productUrl} target="_blank" rel="noreferrer">Open {study.title} <span aria-hidden="true">↗</span></a>}
            <Link className="button-primary" href="/#work">Back to selected work <span aria-hidden="true">↑</span></Link>
          </div>
        </footer>
      </main>
      <footer className="site-container site-footer"><span>© {new Date().getFullYear()} Gagan Deep</span><span>Built from real work, with care.</span><Link href="/#top">Back to top ↑</Link></footer>
    </div>
  );
}
