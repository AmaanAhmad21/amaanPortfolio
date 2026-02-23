"use client";

import { useParams } from "next/navigation";
import { PortfolioFrame } from "@/components/layout/PortfolioFrame";
import Link from "next/link";
import { projects as projectsList } from "@/data/projects";

const PROJECTS = Object.fromEntries(projectsList.map((p) => [p.slug, p]));

export default function ProjectPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const project = slug ? PROJECTS[slug] : null;

  if (!project) {
    return (
      <PortfolioFrame>
        <div className="pl-6 md:pl-10 max-w-3xl">
          <h2 className="font-heading text-3xl md:text-4xl tracking-wide text-[var(--text)] mb-6">Project not found</h2>
          <Link href="/experience" className="text-[var(--lightning)] hover:underline">
            ← Back to Experience
          </Link>
        </div>
      </PortfolioFrame>
    );
  }

  return (
    <PortfolioFrame>
      <div className="pl-6 md:pl-10 max-w-3xl">
        <Link href="/experience" className="inline-block text-[var(--text-muted)] hover:text-[var(--lightning)] transition-colors mb-6 text-sm">
          ← Back to Experience
        </Link>
        <h2 className="font-heading text-3xl md:text-4xl tracking-wide text-[var(--text)] mb-2">{project.name}</h2>
        {project.badge && (
          <span className="text-[var(--lightning)] text-lg">{project.badge}</span>
        )}
        <p className="text-[var(--text-muted)] text-base md:text-lg leading-relaxed mt-4 mb-6">{project.description}</p>
        <ul className="space-y-2 text-[var(--text-muted)]">
          {project.details.map((detail, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-[var(--lightning)]">•</span>
              {detail}
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-2 mt-6">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--lightning)] hover:underline w-fit"
            >
              View on GitHub →
            </a>
          )}
          <a
            href="https://www.linkedin.com/in/amaan-ahmad-0260a524b/details/projects/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--lightning)] hover:underline w-fit"
          >
            View on LinkedIn →
          </a>
        </div>
      </div>
    </PortfolioFrame>
  );
}
