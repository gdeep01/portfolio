import Image from "next/image";
import Link from "next/link";
import type { FeaturedProject } from "@/data/featured-work";

function StagePill({ stage }: { stage: FeaturedProject["stage"] }) {
  return <span className={`stage-pill stage-${stage.toLowerCase().replaceAll(" ", "-")}`}>{stage}</span>;
}

function ActionLink({ href, children, external = false }: { href: string; children: string; external?: boolean }) {
  const content = <>{children}<span aria-hidden="true">↗</span></>;
  if (external) return <a className="text-link" href={href} target="_blank" rel="noreferrer">{content}</a>;
  if (href.startsWith("/")) return <Link className="text-link" href={href}>{content}</Link>;
  return <a className="text-link" href={href}>{content}</a>;
}

export function ProjectCard({ project }: { project: FeaturedProject }) {
  return (
    <article className={`project-card${project.title === "Bindaas BLR" ? " project-card-bindaas" : ""}`}>
      {project.image ? (
        <div className="project-card-image">
          <Image src={project.image} alt={project.imageAlt ?? ""} fill sizes="(max-width: 680px) 92vw, (max-width: 900px) 45vw, (max-width: 1600px) 46vw, 780px" />
        </div>
      ) : (
        <div className="concept-art" aria-hidden="true">
          <div className="wallet-sheet">
            <span className="wallet-sheet-label">Product concept · shared UPI wallet</span>
            <h4>Pool before the trip.</h4>
            <div className="wallet-member-row"><span className="wallet-avatar">01</span> Contribute together <b>Before</b></div>
            <div className="wallet-member-row"><span className="wallet-avatar">02</span> Review each request <b>Shared</b></div>
            <div className="wallet-member-row"><span className="wallet-avatar">03</span> Approve as a group <b>By design</b></div>
          </div>
        </div>
      )}
      <div className="project-card-body">
        <div className="project-meta">
          <StagePill stage={project.stage} />
          <span className="category-pill">{project.discipline}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-card-foot">
          <span>{project.stage === "Product concept" ? "Proposed feature" : project.stage}</span>
          <div className="project-card-links">
            <ActionLink href={`/work/${project.slug}`}>Case study</ActionLink>
            {project.href && <ActionLink href={project.href} external={project.href.startsWith("http")}>{project.action ?? "Open project"}</ActionLink>}
          </div>
        </div>
      </div>
    </article>
  );
}
