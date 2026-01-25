export default function About() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-24">
      <h1 className="font-heading text-4xl md:text-5xl text-[var(--text)] mb-12">
        About
      </h1>

      <div className="space-y-12 max-w-2xl">
        <p className="text-[var(--text-muted)]">
          I’m a Computer Science student at Western, focused on AI, data systems, and building things that scale. I’ve worked on agentic AI and data wrangling at a startup, and on security and productivity tools in enterprise. I like clean systems and shipping.
        </p>

        <div>
          <h2 className="font-heading text-lg text-[var(--text)] mb-2">Education</h2>
          <p className="text-[var(--text-muted)]">
            B.Sc Computer Science, Minor in Software Engineering — University of Western Ontario, 2022–2026. London, ON.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-lg text-[var(--text)] mb-3">Skills</h2>
          <ul className="text-[var(--text-muted)] text-sm space-y-1">
            <li><span className="text-[var(--text)]/80">Code:</span> Python, Java, C, C++, SQL, Flask, Angular, REST, Git</li>
            <li><span className="text-[var(--text)]/80">AI & data:</span> LLMs, OpenAI Agents, Hugging Face, ETL, BigQuery, prompt engineering</li>
            <li><span className="text-[var(--text)]/80">Cloud & ops:</span> Docker, CI/CD, Hetzner, DigitalOcean</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
