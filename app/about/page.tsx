"use client";

import Image from "next/image";
import { PortfolioFrame } from "@/components/layout/PortfolioFrame";

export default function About() {
  return (
    <PortfolioFrame>
      <div className="pl-6 md:pl-10 max-w-5xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl tracking-wide text-[var(--text)] mb-4 md:mb-5">
          About
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6">
        {/* School */}
        <section className="flex flex-col items-center md:items-start gap-3 opacity-0 animate-fade-in-up">
          <div className="w-40 h-40 md:w-48 md:h-48 relative rounded-lg overflow-hidden shrink-0 transition-transform duration-300 hover:scale-105">
            <Image
              src="/images/WesternLogo.png"
              alt="Western University"
              fill
              className="object-contain"
            />
          </div>
          <div className="text-center md:text-left">
            <h3 className="font-heading text-xl md:text-2xl tracking-wide text-[var(--text)] mb-2">
              School
            </h3>
            <p className="text-[var(--text-muted)] leading-relaxed text-sm md:text-base mb-2">
              I’m studying Computer Science at Western University. I’m interested in AI, data systems, and full-stack development — building things that are structured and actually useful.
            </p>
            <p className="text-[var(--text-muted)] leading-relaxed text-sm md:text-base">
              B.Sc. in Computer Science, Minor in Software Engineering. Class of 2026.
            </p>
          </div>
        </section>

        {/* Powerlifting */}
        <section className="flex flex-col items-center md:items-start gap-3 opacity-0 animate-fade-in-up" style={{ animationDelay: "120ms" }}>
          <div className="w-40 h-40 md:w-48 md:h-48 relative rounded-lg overflow-hidden shrink-0 transition-transform duration-300 hover:scale-105">
            <Image
              src="/images/powerlifting.jpeg"
              alt="Powerlifting"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-center md:text-left">
            <h3 className="font-heading text-xl md:text-2xl tracking-wide text-[var(--text)] mb-2">
              Powerlifting
            </h3>
            <p className="text-[var(--text-muted)] leading-relaxed text-sm md:text-base mb-2">
              I train consistently. Powerlifting keeps things simple: show up, lift, track progress.
            </p>
            <p className="text-[var(--text-muted)] leading-relaxed text-sm md:text-base mb-2">
              Strength doesn’t come quickly. It builds over time — through repetition, patience, and small improvements.
            </p>
            <p className="text-[var(--text-muted)] leading-relaxed text-sm md:text-base">
              Squat. Bench. Deadlift.
            </p>
          </div>
        </section>

        {/* Formula 1 */}
        <section className="flex flex-col items-center md:items-start gap-3 opacity-0 animate-fade-in-up" style={{ animationDelay: "240ms" }}>
          <div className="w-40 h-40 md:w-48 md:h-48 relative rounded-lg overflow-hidden shrink-0 transition-transform duration-300 hover:scale-105">
            <Image
              src="/images/ferrariImg.png"
              alt="Ferrari"
              fill
              className="object-cover object-center"
            />
          </div>
          <div className="text-center md:text-left">
            <h3 className="font-heading text-xl md:text-2xl tracking-wide text-[var(--text)] mb-2">
              Formula 1
            </h3>
            <p className="text-[var(--text-muted)] leading-relaxed text-sm md:text-base mb-2">
              I follow Formula 1 and support Ferrari.
            </p>
            <p className="text-[var(--text-muted)] leading-relaxed text-sm md:text-base mb-2">
              I’m drawn to the speed, the strategy, and the pressure. Race weekends are intense — small decisions matter, and margins are thin.
            </p>
            <p className="text-[var(--text-muted)] leading-relaxed text-sm md:text-base">
              Forza Ferrari.
            </p>
          </div>
        </section>
        </div>
      </div>
    </PortfolioFrame>
  );
}
