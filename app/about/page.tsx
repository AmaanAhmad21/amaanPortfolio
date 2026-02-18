"use client";

import { PortfolioFrame } from "@/components/layout/PortfolioFrame";

export default function About() {
  return (
    <PortfolioFrame>
      <h2 className="font-heading text-2xl md:text-3xl tracking-wide text-[var(--text)] mb-8">
        About
      </h2>
      <div className="space-y-10 max-w-2xl">
        <p className="text-lg md:text-xl text-[var(--text-muted)] leading-relaxed">
          I’m a Computer Science student at Western, focused on AI, data systems, and building things that scale. I’ve worked on agentic AI and data wrangling at a startup, and on security and productivity tools in enterprise. I like clean systems and shipping.
        </p>
        <div>
          <h3 className="font-heading text-lg md:text-xl tracking-wide text-[var(--text)] mb-2">Education</h3>
          <p className="text-base md:text-lg text-[var(--text-muted)]">
            B.Sc Computer Science, Minor in Software Engineering — University of Western Ontario, 2022–2026. London, ON.
          </p>
        </div>
        <div>
          <h3 className="font-heading text-lg md:text-xl tracking-wide text-[var(--text)] mb-3">Skills</h3>
          <ul className="text-base md:text-lg text-[var(--text-muted)] space-y-2">
            <li><span className="text-[var(--text)]/80">Code:</span> Python, Java, C, C++, SQL, Flask, Angular, REST, Git</li>
            <li><span className="text-[var(--text)]/80">AI & data:</span> LLMs, OpenAI Agents, Hugging Face, ETL, BigQuery, prompt engineering</li>
            <li><span className="text-[var(--text)]/80">Cloud & ops:</span> Docker, CI/CD, Hetzner, DigitalOcean</li>
          </ul>
        </div>
      </div>
    </PortfolioFrame>
  );
}
