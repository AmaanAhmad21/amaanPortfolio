export default function Work() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-24">
      <h1 className="font-heading text-4xl md:text-5xl text-[var(--text)] mb-12">
        Work
      </h1>

      <div className="space-y-16">
        <section>
          <h2 className="font-heading text-lg text-[var(--text-muted)] mb-6">Experience</h2>
          <ul className="space-y-10">
            <li>
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <span className="font-medium text-[var(--text)]">T42</span>
                <span className="text-sm text-[var(--text-muted)]">May – Sept 2025 · AI Developer Intern</span>
              </div>
              <p className="text-sm text-[var(--text-muted)]">Data-wrangling agent with OpenAI Agents SDK; 100+ functions optimized, ~65% less manual preprocessing. Fine-tuned Hugging Face models for natural-language → SQL/BigQuery. Remote.</p>
            </li>
            <li>
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <span className="font-medium text-[var(--text)]">Deloitte</span>
                <span className="text-sm text-[var(--text-muted)]">July – Aug 2024 · Cyber Security Intern</span>
              </div>
              <p className="text-sm text-[var(--text-muted)]">Emerging Tech Team, Abu Dhabi. OT and cybersecurity modernization, client proposals, stakeholder presentations.</p>
            </li>
            <li>
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <span className="font-medium text-[var(--text)]">OrientMCT</span>
                <span className="text-sm text-[var(--text-muted)]">May – July 2024 · Business Productivity Intern</span>
              </div>
              <p className="text-sm text-[var(--text-muted)]">PowerApps prototypes, SharePoint and Microsoft Lists; ~40% less manual data entry. Abu Dhabi.</p>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-lg text-[var(--text-muted)] mb-6">Projects</h2>
          <ul className="space-y-10">
            <li>
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <span className="font-medium text-[var(--text)]">WQC Quantum Computing Hackathon</span>
                <span className="text-sm text-[var(--text-muted)]">1st place</span>
              </div>
              <p className="text-sm text-[var(--text-muted)]">R-based quantum optimization for Toronto Tangerine bike redistribution; ~20% better station utilization.</p>
            </li>
            <li>
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <span className="font-medium text-[var(--text)]">Spotify Wrapped Stats Analyzer</span>
              </div>
              <p className="text-sm text-[var(--text-muted)]">Full-stack Flask app: Spotify API, playback analytics, caching, ChatGPT for summaries and recommendations.</p>
            </li>
            <li>
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <span className="font-medium text-[var(--text)]">Thermal Detection for Autonomous Vehicle Safety</span>
              </div>
              <p className="text-sm text-[var(--text-muted)]">Python, OpenCV, YOLO on thermal video; 90%+ accuracy. Deployed on Raspberry Pi 5 for embedded inference.</p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
