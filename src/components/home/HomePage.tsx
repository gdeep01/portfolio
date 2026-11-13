import Image from "next/image";
import Link from "next/link";
import { HomeNav } from "@/components/home/HomeNav";
import { FieldNotes } from "@/components/home/FieldNotes";
import { Reveal } from "@/components/home/Reveal";

const workflow = ["Case intake", "Assignment", "Visit plan", "Service report", "Verified closure"];

function RouteMark({ number, color = "blue" }: { number: string; color?: "blue" | "orange" | "lime" }) {
  return <span className={`route-mark route-mark-${color}`} aria-hidden="true"><i />{number}</span>;
}

function ProjectLinks({ slug, title, external }: { slug: string; title: string; external?: string }) {
  return (
    <div className="launch-links">
      <Link className="launch-link" href={`/work/${slug}`}>Explore the story <span aria-hidden="true">↗</span></Link>
      {external && <a className="launch-link launch-link-secondary" href={external} target="_blank" rel="noreferrer">Open {title} <span aria-hidden="true">↗</span></a>}
    </div>
  );
}

function RouteMapIllustration() {
  return (
    <div className="wallet-illustration" role="img" aria-label="Interface illustration of a shared trip wallet with pooled contributions and a group approval step">
      <div className="wallet-illustration-head"><span>GROUP WALLET</span><span>PRODUCT CONCEPT · INTERFACE ILLUSTRATION</span></div>
      <div className="wallet-illustration-title">Spend as a group.</div>
      <div className="wallet-balance"><span>Shared trip pool</span><strong>Contribute before the trip</strong><i>Concept flow</i></div>
      <div className="wallet-people" aria-hidden="true"><b /><b /><b /><b /></div>
      <div className="wallet-route"><span className="wallet-route-node">01</span><i /><div><b>Pool before the trip</b><small>Shared visibility for the group</small></div><span className="wallet-route-state">READY</span></div>
      <div className="wallet-route wallet-route-approval"><span className="wallet-route-node">02</span><i /><div><b>Approve as a group</b><small>Unanimous tap-to-approve concept</small></div><span className="wallet-route-state">PROPOSED</span></div>
    </div>
  );
}

export function HomePage() {
  return (
    <div className="site-page launch-home" id="top">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <HomeNav />

      <main id="main-content">
        <section className="launch-hero" aria-labelledby="launch-title">
          <svg className="hero-route-line" viewBox="0 0 1600 900" preserveAspectRatio="none" aria-hidden="true">
            <path className="hero-route-base" d="M-40 650 C 170 650 150 385 360 385 S 540 690 760 645 S 950 330 1140 370 S 1395 650 1640 420" />
            <path className="hero-route-dash" d="M-40 650 C 170 650 150 385 360 385 S 540 690 760 645 S 950 330 1140 370 S 1395 650 1640 420" />
            <circle cx="360" cy="385" r="9" /><circle cx="760" cy="645" r="9" /><circle cx="1140" cy="370" r="9" />
          </svg>
          <div className="launch-hero-top site-container">
            <span className="launch-kicker"><b>GD</b> PRODUCT PORTFOLIO <i /> BENGALURU, INDIA</span>
            <span className="launch-edition">FIELD NOTES / 2026</span>
          </div>
          <div className="launch-hero-copy site-container">
            <p className="launch-pretitle"><span>Real problems.</span><span>Working ideas.</span></p>
            <h1 id="launch-title" className="launch-title" aria-label="From everyday problems to things that work.">
              <span className="launch-title-line">FROM EVERYDAY</span>
              <span className="launch-title-line launch-title-color">PROBLEMS TO</span>
              <span className="launch-title-line launch-title-last"><i>THINGS THAT</i> WORK<span className="title-period">.</span></span>
            </h1>
            <p className="launch-intro">I get close to the people living a problem, find the signal in the friction, and build a way forward.</p>
            <a className="launch-scroll" href="#work"><span className="launch-scroll-dot" /> SCROLL TO FOLLOW THE SIGNAL <span aria-hidden="true">↓</span></a>
          </div>
          <div className="launch-hero-product site-container">
            <div className="hero-screen-label"><RouteMark number="01" color="orange" /><span>BINDAAS BLR / LIVE PWA</span><span className="hero-screen-rule" /></div>
            <div className="hero-screen-frame">
              <Image src="/projects/bindaas-dashboard.png" alt="Bindaas BLR dashboard with city congestion, live corridors, and traffic trend lines" fill priority sizes="(max-width: 700px) 96vw, (max-width: 1600px) 87vw, 1520px" />
            </div>
            <div className="hero-screen-proof"><strong>3,818</strong><span>users in the first three months</span></div>
            <span className="hero-screen-caption">A city, less out of focus.</span>
          </div>
          <div className="hero-scroll-index" aria-hidden="true"><span>01</span><i />05</div>
        </section>

        <section className="launch-work-intro site-container" id="work" aria-labelledby="work-title">
          <div className="launch-intro-route"><span className="route-long-line" /><span className="route-long-node" /></div>
          <Reveal>
            <div className="launch-work-heading">
              <span className="launch-section-label">A few things I’ve made <b>↘</b></span>
              <h2 id="work-title">From the first<br /><em>signal</em> to the next step.</h2>
              <p>Different problems. Different products. One habit: stay close to what people are actually trying to do.</p>
            </div>
          </Reveal>
          <nav className="project-route-nav" aria-label="Jump to a project">
            <a href="#bindaas"><span>01</span> Bindaas BLR</a>
            <a href="#instrument"><span>02</span> Instrument Console</a>
            <a href="#inventai"><span>03</span> InventAI</a>
            <a href="#bus"><span>04</span> Where Is My Bus?</a>
            <a href="#wallet"><span>05</span> Group Wallet</a>
          </nav>
        </section>

        <section className="launch-scene scene-bindaas" id="bindaas" aria-labelledby="bindaas-title">
          <div className="scene-topline site-container"><RouteMark number="01" color="orange" /><span>LIVE PRODUCT / CIVIC INFORMATION</span><span className="scene-topline-right">BENGALURU, INDIA</span></div>
          <Reveal>
            <div className="bindaas-heading site-container">
              <h2 id="bindaas-title">The city,<br /><em>in context.</em></h2>
              <p>The 2025 RCB parade drew a much larger crowd than expected. I wondered whether people could get an indication of where Bengaluru traffic might build. That question became Bindaas BLR, with data-based congestion predictions.</p>
            </div>
          </Reveal>
          <Reveal>
            <div className="bindaas-product-wrap site-container">
              <div className="bindaas-product-image">
                <Image src="/projects/bindaas-dashboard.png" alt="Bindaas BLR dashboard: live corridor congestion, city indicators, and macro trend charts" fill sizes="(max-width: 760px) 98vw, (max-width: 1700px) 92vw, 1600px" />
              </div>
              <div className="bindaas-image-note"><span>TRAFFIC + MAPS</span><b>What people reached for first.</b></div>
              <div className="bindaas-data-stamp"><strong>408+</strong><span>weekly active users<br />10+ second sessions</span></div>
            </div>
          </Reveal>
          <div className="scene-bottomline site-container"><span>React 18 / TypeScript / Supabase Edge Functions / Leaflet</span><ProjectLinks slug="bindaas-blr" title="Bindaas BLR" external="https://bindaas-blr.vercel.app" /></div>
        </section>

        <section className="launch-scene scene-instrument" id="instrument" aria-labelledby="instrument-title">
          <div className="scene-topline site-container"><RouteMark number="02" color="orange" /><span>FLAGSHIP CASE / LOCAL WINDOWS WPF DEMO</span><span className="scene-topline-right">FICTIONAL DATA</span></div>
          <div className="instrument-editorial site-container">
            <Reveal>
              <div className="instrument-heading">
                <span className="instrument-overline">A case can’t close itself.</span>
                <h2 id="instrument-title">Close<br />the <em>loop.</em></h2>
                <p>Service cases were sometimes logged late as engineers moved between customer sites. After speaking with field engineers, I documented the workflow in a PRD and built a Windows demo to show how cases could be logged, assigned, tracked and closed.</p>
                <ProjectLinks slug="instrument-service-console" title="Instrument Service Console" />
              </div>
            </Reveal>
            <Reveal>
              <div className="instrument-art" aria-label="Interface illustration showing the Instrument Service Console workflow">
                <div className="instrument-art-top"><span>INSTRUMENT SERVICE CONSOLE</span><span>LOCAL WPF DEMO · NOT CONNECTED TO API</span></div>
                <h3>One clear path from case to closure.</h3>
                <div className="instrument-workflow" role="list" aria-label="Case workflow from intake to verified closure">
                  {workflow.map((item, index) => <div className="instrument-step" role="listitem" key={item}><b>{String(index + 1).padStart(2, "0")}</b><span>{item}</span></div>)}
                </div>
                <div className="instrument-evidence">
                  <div><strong>24</strong><span>field engineers interviewed</span></div>
                  <div><strong>6 / 10</strong><span>cases logged late in the observed group</span></div>
                  <div><strong>10</strong><span>engineers tested the prototype</span></div>
                </div>
                <p className="instrument-estimate">*Under 5 minutes is an estimate, not a measured production result. Previously reported range: 15 minutes to a day.</p>
                <span className="illustration-label">WORKFLOW INTERFACE ILLUSTRATION</span>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="launch-scene scene-inventai" id="inventai" aria-labelledby="inventai-title">
          <div className="scene-topline site-container"><RouteMark number="03" color="blue" /><span>PROTOTYPE / RETAIL FORECASTING</span><span className="scene-topline-right">VALIDATION AHEAD</span></div>
          <div className="inventai-layout site-container">
            <Reveal>
              <div className="inventai-heading">
                <span className="inventai-index">03—A</span>
                <h2 id="inventai-title">A better<br />read on<br /><em>what’s next.</em></h2>
                <p>Inventory forecasts, mandi prices from OGD India and a Gemini-powered assistant to help retailers make stock decisions.</p>
                <div className="inventai-tags"><span>7–30 day ARIMA forecasts</span><span>Backtested on Kaggle data</span></div>
                <p className="inventai-caveat">Prototype. Live retailer validation is still ahead.</p>
                <ProjectLinks slug="inventai" title="InventAI" external="https://invent-ai-gd.vercel.app" />
              </div>
            </Reveal>
            <Reveal>
              <div className="inventai-device-wrap">
                <span className="inventai-device-note">ACTUAL LANDING PAGE</span>
                <div className="inventai-device">
                  <Image src="/projects/invent.png" alt="Screenshot of the InventAI landing page describing its inventory forecasting prototype" fill sizes="(max-width: 700px) 94vw, (max-width: 1400px) 58vw, 900px" />
                </div>
                <span className="inventai-orbit inventai-orbit-one" aria-hidden="true">FORECAST</span>
                <span className="inventai-orbit inventai-orbit-two" aria-hidden="true">MARKET CONTEXT</span>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="launch-scene scene-bus" id="bus" aria-labelledby="bus-title">
          <div className="scene-topline site-container"><RouteMark number="04" color="lime" /><span>PILOT / TRANSIT INFORMATION</span><span className="scene-topline-right">SHIVAMOGGA CONDUCTOR DISCOVERY</span></div>
          <Reveal>
            <div className="bus-heading site-container">
              <div><span className="bus-kicker">Could a phone do the job?</span><h2 id="bus-title">A route to<br /><em>try another way.</em></h2></div>
              <p>A pilot using a conductor&apos;s phone to share a bus&apos;s live location, so passengers can check where their bus is.</p>
            </div>
          </Reveal>
          <Reveal>
            <div className="bus-map-stage site-container">
              <svg className="bus-route-overlay" viewBox="0 0 1200 520" preserveAspectRatio="none" aria-hidden="true"><path d="M-20 410 C 170 410 190 150 390 200 S 590 470 750 340 S 940 120 1220 185" /><circle cx="390" cy="200" r="10" /><circle cx="750" cy="340" r="10" /><circle cx="1020" cy="178" r="10" /></svg>
              <div className="bus-screen">
                <Image src="/projects/bus.png" alt="Actual Where Is My Bus? pilot interface showing a route map and bus tracking screen" fill sizes="(max-width: 760px) 98vw, (max-width: 1700px) 92vw, 1600px" />
              </div>
              <span className="bus-screen-label">ACTUAL PILOT INTERFACE</span>
              <div className="bus-cost-note"><span>DEDICATED GPS UNIT</span><strong>₹15k–25k</strong><small>per bus, as described in project research</small></div>
            </div>
          </Reveal>
          <div className="scene-bottomline site-container"><span>JavaScript / Firebase / Leaflet</span><ProjectLinks slug="where-is-my-bus" title="Where Is My Bus?" external="https://where-is-my-bus-beryl.vercel.app" /></div>
        </section>

        <section className="launch-scene scene-wallet" id="wallet" aria-labelledby="wallet-title">
          <div className="scene-topline site-container"><RouteMark number="05" color="orange" /><span>PRODUCT CONCEPT / GROUP PAYMENTS</span><span className="scene-topline-right">NOT A SHIPPED WALLET</span></div>
          <div className="wallet-layout site-container">
            <Reveal>
              <div className="wallet-heading">
                <span className="wallet-mini-label">A different moment to pay.</span>
                <h2 id="wallet-title">Make it<br /><em>ours.</em></h2>
                <p>A group-trip concept: everyone contributes to a shared pool before the trip, and spending requests need everyone’s approval.</p>
                <p className="wallet-risk-note">The concept identifies regulatory constraints and approval timeouts as risks to resolve before implementation.</p>
                <ProjectLinks slug="group-wallet" title="Group Wallet" />
              </div>
            </Reveal>
            <Reveal><RouteMapIllustration /></Reveal>
          </div>
        </section>

        <section className="engineering-chapter" id="engineering" aria-labelledby="engineering-title">
          <div className="site-container">
            <Reveal>
              <div className="engineering-heading">
                <div><span className="launch-section-label">ENGINEERING PROJECTS <b>â†˜</b></span><h2 id="engineering-title">Built in the<br /><em>physical world.</em></h2></div>
                <p>Two team engineering prototypes from Electronics &amp; Instrumentation at Ramaiah Institute of Technology. Each starts with a physical signal and turns it into useful feedback.</p>
              </div>
            </Reveal>

            <Reveal>
              <article className="engineering-peg-feature" aria-labelledby="peg-title">
                <div className="peg-copy">
                  <span className="engineering-index">ENGINEERING PROJECT / 01</span>
                  <span className="peg-award"><b aria-hidden="true">✳</b> TEAM AWARD <strong>First Runner-Up</strong><small>College Major Project Exhibition · Ramaiah Institute of Technology</small></span>
                  <h3 id="peg-title">A more human<br />way to <em>rehabilitate.</em></h3>
                  <p>An S-shaped electronic pegboard pairs magnetic pegs with eight Hall-effect sensors to explore measurable upper-limb rehabilitation exercises.</p>
                  <div className="engineering-result-row"><span><b>98.75%</b> sensor detection in prototype tests</span><span><b>45 ms</b> maximum WebSocket latency</span></div>
                  <small className="engineering-caveat">Academic team prototype. These are system test results, not clinical outcomes. Clinical validation with stroke patients has not been completed.</small>
                  <Link className="launch-link" href="/work/s-shaped-e-peg-board">Explore the team project <span aria-hidden="true">â†—</span></Link>
                </div>
                <div className="peg-visual" role="img" aria-label="Illustration of an S-shaped rehabilitation pegboard with eight Hall-effect sensor positions and a Raspberry Pi connected to session feedback">
                  <div className="peg-visual-label"><span>S-SHAPED E-PEG BOARD</span><span>ENGINEERING ILLUSTRATION</span></div>
                  <svg viewBox="0 0 760 540" aria-hidden="true" focusable="false">
                    <path className="peg-board-shadow" d="M195 92 C345 45 539 104 565 204 C596 327 438 390 299 346 C167 304 112 388 205 449 C280 499 444 442 553 466" />
                    <path className="peg-board" d="M195 92 C345 45 539 104 565 204 C596 327 438 390 299 346 C167 304 112 388 205 449 C280 499 444 442 553 466" />
                    <path className="peg-guide" d="M195 92 C345 45 539 104 565 204 C596 327 438 390 299 346 C167 304 112 388 205 449 C280 499 444 442 553 466" />
                    {[[206,91],[330,78],[450,102],[554,168],[522,279],[390,355],[235,378],[252,465]].map(([x,y], i) => <g className="peg-sensor" key={i}><circle cx={x} cy={y} r="19"/><circle cx={x} cy={y} r="5"/><text x={x+26} y={y+4}>0{i+1}</text></g>)}
                    <g className="peg-controller"><rect x="36" y="34" width="150" height="78" rx="13"/><text x="52" y="66">Raspberry Pi</text><text x="52" y="88">3B+ / LOCAL</text></g>
                    <path className="peg-signal" d="M112 112 C 98 184 119 260 166 316"/><path className="peg-signal-dash" d="M112 112 C 98 184 119 260 166 316"/>
                    <g className="peg-feedback"><rect x="514" y="35" width="212" height="72" rx="12"/><text x="532" y="64">SESSION FEEDBACK</text><text x="532" y="86">Difficulty · progress · coaching</text></g>
                    <path className="peg-feedback-line" d="M548 112 C 621 173 610 249 568 303"/>
                  </svg>
                  <div className="peg-visual-foot"><span>8 HALL-EFFECT SENSORS</span><span>MAGNETIC PEGS · MODULAR PARTS</span></div>
                </div>
              </article>
            </Reveal>

            <Reveal>
              <article className="engineering-junction" aria-labelledby="junction-title">
                <div className="junction-diagram" role="img" aria-label="Illustrated prototype flow: camera and ultrasonic distance sensors feed Raspberry Pi object detection, which triggers an LCD and buzzer alert">
                  <span className="junction-label">T-JUNCTION / SYSTEM FLOW</span>
                  <svg viewBox="0 0 780 265" aria-hidden="true" focusable="false">
                    <path className="junction-road" d="M52 209 H728 M389 209 V32"/><path className="junction-road-mark" d="M52 209 H728 M389 209 V32"/>
                    <g className="junction-node junction-camera"><rect x="42" y="38" width="148" height="86" rx="14"/><circle cx="79" cy="76" r="13"/><text x="101" y="73">CAMERA</text><text x="61" y="105">TFLite · OpenCV</text></g>
                    <g className="junction-node junction-pi"><rect x="289" y="28" width="200" height="76" rx="15"/><text x="316" y="60">RASPBERRY PI 3B+</text><text x="319" y="83">Python · object detection</text></g>
                    <g className="junction-node junction-ultra"><rect x="591" y="38" width="148" height="86" rx="14"/><path d="M619 76 q13 -17 26 0 M614 83 q18 -26 36 0"/><text x="654" y="73">DISTANCE</text><text x="608" y="105">Ultrasonic sensor</text></g>
                    <path className="junction-flow" d="M190 82 H278 M500 82 H582 M389 110 V148"/><path className="junction-alert-flow" d="M389 149 V186"/>
                    <g className="junction-alert"><rect x="278" y="149" width="222" height="78" rx="15"/><text x="307" y="181">DRIVER ALERT</text><text x="308" y="204">LCD feedback + buzzer</text></g>
                    <circle className="junction-car" cx="389" cy="202" r="9"/>
                  </svg>
                  <div className="junction-foot"><span>CAMERA + DISTANCE INPUT</span><span>DEMONSTRATED WITH TOY VEHICLES</span></div>
                </div>
                <div className="junction-copy"><span className="engineering-index">ENGINEERING PROJECT / 02 · MINI PROJECT</span><h3 id="junction-title">See around<br />the <em>blind turn.</em></h3><p>A team-built T-junction safety prototype exploring how a camera and distance sensor can surface an approaching road user to a driver.</p><span className="junction-limit">Educational prototype · toy-vehicle trials · no real-intersection deployment or accident-reduction result claimed</span><Link className="launch-link" href="/work/t-junction-blind-spot-alert">Explore the system <span aria-hidden="true">â†—</span></Link></div>
              </article>
            </Reveal>
          </div>
        </section>

        <section className="launch-approach" id="approach" aria-labelledby="approach-title">
          <div className="site-container approach-launch-grid">
            <Reveal>
              <div className="approach-launch-heading"><span className="launch-section-label">HOW I WORK <b>↘</b></span><h2 id="approach-title">Stay close<br />to the <em>signal.</em></h2></div>
            </Reveal>
            <div className="approach-launch-steps">
              <Reveal><article><RouteMark number="01" color="blue" /><div><h3>Listen where the work happens</h3><p>Interviewed field engineers for service-console discovery and spoke with conductors in Shivamogga about bus tracking on the ground.</p></div></article></Reveal>
              <Reveal><article><RouteMark number="02" color="orange" /><div><h3>Let behavior shape the priorities</h3><p>Bindaas usage showed traffic and maps leading. I left out BESCOM alerts because stale information could mislead.</p></div></article></Reveal>
              <Reveal><article><RouteMark number="03" color="lime" /><div><h3>Build small enough to learn</h3><p>Tested the service-console prototype with engineers, piloted bus tracking with friends, and backtested InventAI forecasts before live retailer validation.</p></div></article></Reveal>
            </div>
          </div>
        </section>

        <section className="launch-about" id="background" aria-labelledby="about-title">
          <div className="site-container launch-about-inner">
            <Reveal>
              <span className="launch-section-label">THE PERSON BEHIND THE BUILDS <b>↘</b></span>
              <h2 id="about-title">Field experience.<br /><em>Product perspective.</em></h2>
              <div className="launch-about-story">
                <p className="launch-about-copy">At Thermo Fisher Scientific, supporting HPLC installation and troubleshooting across 60+ customer sites put me close to the coordination gaps engineers face. That experience became the starting point for Instrument Service Console.</p>
                <figure className="launch-about-portrait">
                  <Image src="/images/gagan-deep.webp" alt="Portrait of Gagan Deep" fill sizes="(max-width: 680px) 140px, 220px" />
                  <figcaption>GAGAN DEEP <span>· BENGALURU</span></figcaption>
                </figure>
              </div>
              <div className="launch-about-facts">
                <div><span>EXPERIENCE</span><strong>Field Service Engineer I<br />Thermo Fisher Scientific · Aug 2026–present</strong></div>
                <div><span>EDUCATION</span><strong>B.E. Electronics &amp; Instrumentation Engineering<br />Ramaiah Institute of Technology · 2022–26</strong></div>
                <div><span>TEAM ACHIEVEMENT</span><strong>First Runner-Up · Major Project Exhibition<br />Ramaiah Institute of Technology</strong></div>
                <div><span>CERTIFICATIONS</span><strong>Product Management · EA / Forage<br />Project Management · Siemens / Forage</strong></div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="launch-skills" aria-labelledby="skills-title">
          <div className="site-container">
            <Reveal>
              <span className="launch-section-label">TOOLS I REACH FOR <b>↘</b></span>
              <div className="launch-skills-heading"><h2 id="skills-title">Thinking and<br /><em>making.</em></h2><p>Product skills and technical tools, learned in service of the problem at hand.</p></div>
              <div className="launch-skill-cloud" aria-label="Product and technical skills">
                {["Product discovery", "User research", "PRDs", "Feature prioritization", "Workflow design", "Product metrics", "SQL", "Excel", "Power BI", "Tableau", "Python", "JavaScript", "React", "FastAPI", "PostgreSQL", "Supabase", "Firebase", "Gemini API", "ARIMA forecasting", "API integration"].map((skill, index) => <span className={index < 10 ? "skill-product" : "skill-build"} key={skill}>{skill}</span>)}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="launch-notes" id="notes" aria-labelledby="notes-title">
          <div className="site-container">
            <Reveal>
              <div className="launch-notes-head"><div><span className="launch-section-label">FIELD NOTES <b>↘</b></span><h2 id="notes-title">The decisions<br />behind the <em>builds.</em></h2></div><Link className="launch-link" href="/blog">All field notes <span aria-hidden="true">↗</span></Link></div>
              <FieldNotes />
            </Reveal>
          </div>
        </section>

        <section className="launch-contact" id="contact" aria-labelledby="contact-title">
          <div className="site-container launch-contact-inner">
            <RouteMark number="→" color="lime" />
            <span className="launch-section-label">HAVE A THOUGHTFUL PROBLEM?</span>
            <h2 id="contact-title">Let’s make<br /><em>something useful.</em></h2>
            <div className="launch-contact-bottom">
              <p>I’m interested in ideas that begin with a real person, a real workflow, and room to make it better.</p>
              <div>
                <a className="launch-contact-button" href="https://www.linkedin.com/in/gagan-deep-755130296" target="_blank" rel="noreferrer">Find me on LinkedIn <span aria-hidden="true">↗</span></a>
                <a className="launch-contact-email" href="mailto:gdeepg19@gmail.com">gdeepg19@gmail.com <span aria-hidden="true">↗</span></a>
                <a className="launch-contact-github" href="https://github.com/gdeep01" target="_blank" rel="noreferrer">GitHub ↗</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="launch-footer site-container"><span>© {new Date().getFullYear()} Gagan Deep</span><span>From real life, to real products.</span><a href="#top">Back to top ↑</a></footer>
    </div>
  );
}
