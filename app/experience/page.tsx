"use client";

import Link from "next/link";
import { PortfolioFrame } from "@/components/layout/PortfolioFrame";
import { projects } from "@/data/projects";

const LINKEDIN_PROFILE = "https://www.linkedin.com/in/amaan-ahmad-0260a524b";

const work = [
  { company: "T42", title: "AI Developer Intern", period: "May – Sept 2025", linkedin: LINKEDIN_PROFILE },
  { company: "Western Quantum Club", title: "Director of Software Education", period: "Oct 2025 – Present", linkedin: "https://www.linkedin.com/company/western-engineering-quantum-club" },
  { company: "Deloitte", title: "Cyber Security Intern", period: "July – Aug 2024", linkedin: "https://www.linkedin.com/company/deloitte" },
  { company: "Thryve", title: "Software Engineer", period: "Mar – May 2025", linkedin: "https://www.linkedin.com/company/thryvee" },
  { company: "OrientMCT", title: "Business Productivity Intern", period: "May – July 2024", linkedin: "https://www.linkedin.com/company/orientmct" },
];

function LinkIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export default function Experience() {
  return (
    <PortfolioFrame>
      <div className="pl-6 md:pl-10 pr-6 md:pr-10 h-full flex flex-col min-h-0">
        <h2 className="font-heading text-3xl md:text-4xl tracking-wide text-[var(--text)] shrink-0 mb-6 md:mb-8">
          Experience
        </h2>

        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 min-h-0 overflow-hidden">
          {/* Work section */}
          <section className="flex flex-col min-h-0 overflow-hidden">
            <h3 className="font-heading text-xl md:text-2xl tracking-wide text-[var(--text)] mb-5 shrink-0">
              Work
            </h3>
            <div className="flex-1 flex flex-col justify-evenly min-h-0 gap-2">
              {work.map((item, i) => (
                <div
                  key={`${item.company}-${item.title}`}
                  className="opacity-0 animate-fade-in-up py-1"
                  style={{ animationDelay: `${80 + i * 60}ms` }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-heading text-lg md:text-xl text-[var(--text)]">{item.company}</span>
                    <a
                      href={item.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--text-muted)] hover:text-[var(--lightning)] transition-colors shrink-0"
                      aria-label={`View ${item.company} on LinkedIn`}
                    >
                      <LinkIcon className="w-4 h-4" />
                    </a>
                  </div>
                  <span className="text-sm text-[var(--text-muted)]">{item.period} · {item.title}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Projects section */}
          <section className="flex flex-col min-h-0 overflow-hidden">
            <h3 className="font-heading text-xl md:text-2xl tracking-wide text-[var(--text)] mb-5 shrink-0">
              Projects
            </h3>
            <div className="flex-1 flex flex-col justify-evenly min-h-0 gap-2">
              {projects.map((item, i) => (
                <Link
                  key={item.slug}
                  href={`/projects/${item.slug}`}
                  className="block p-4 md:p-5 rounded-lg border border-[var(--border)] hover:border-[var(--lightning)] hover:bg-[var(--surface)]/50 transition-all duration-300 opacity-0 animate-fade-in-up group"
                  style={{ animationDelay: `${400 + i * 80}ms` }}
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-heading text-lg md:text-xl text-[var(--text)] group-hover:text-[var(--lightning)] transition-colors">
                      {item.name}
                    </span>
                    <span className="text-[var(--text-muted)] group-hover:text-[var(--lightning)] transition-colors shrink-0">→</span>
                  </div>
                  {item.badge && <span className="text-sm text-[var(--lightning)] mt-1 block">{item.badge}</span>}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </PortfolioFrame>
  );
}
