"use client";

import { PortfolioFrame } from "@/components/layout/PortfolioFrame";

export default function About() {
  return (
    <PortfolioFrame>
      <h2 className="font-heading text-3xl md:text-4xl tracking-wide text-[var(--text)] mb-16 md:mb-20">
        About
      </h2>

      <div className="space-y-28 md:space-y-36 max-w-4xl">
        <section>
          <h3 className="font-heading text-xl md:text-2xl tracking-wide text-[var(--text)] mb-6">
            School
          </h3>
          <p className="text-[var(--text-muted)] leading-relaxed mb-5">
            I’m studying Computer Science at Western University. I’m interested in AI, data systems, and full-stack development — building things that are structured and actually useful.
          </p>
          <p className="text-[var(--text-muted)] leading-relaxed">
            B.Sc. in Computer Science, Minor in Software Engineering. Class of 2026.
          </p>
        </section>

        <section>
          <h3 className="font-heading text-xl md:text-2xl tracking-wide text-[var(--text)] mb-6">
            Powerlifting
          </h3>
          <p className="text-[var(--text-muted)] leading-relaxed mb-5">
            I train consistently. Powerlifting keeps things simple: show up, lift, track progress.
          </p>
          <p className="text-[var(--text-muted)] leading-relaxed mb-5">
            Strength doesn’t come quickly. It builds over time — through repetition, patience, and small improvements.
          </p>
          <p className="text-[var(--text-muted)] leading-relaxed">
            Squat. Bench. Deadlift.
          </p>
        </section>

        <section>
          <h3 className="font-heading text-xl md:text-2xl tracking-wide text-[var(--text)] mb-6">
            Formula 1
          </h3>
          <p className="text-[var(--text-muted)] leading-relaxed mb-5">
            I follow Formula 1 and support Ferrari.
          </p>
          <p className="text-[var(--text-muted)] leading-relaxed mb-5">
            I’m drawn to the speed, the strategy, and the pressure. Race weekends are intense — small decisions matter, and margins are thin.
          </p>
          <p className="text-[var(--text-muted)] leading-relaxed">
            Forza Ferrari.
          </p>
        </section>
      </div>
    </PortfolioFrame>
  );
}
