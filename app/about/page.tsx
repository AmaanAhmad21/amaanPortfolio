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
              I’m studying Computer Science at Western University. I’m particularly interested in AI, specifically agentic AI and anything development-related.
            </p>
            <p className="text-[var(--text-muted)] leading-relaxed text-sm md:text-base">
              B.Sc. in Computer Science, Minor in Software Engineering. Class of 2026.
            </p>
          </div>
        </section>

        {/* Powerlifting */}
        <section className="flex flex-col items-center md:items-start gap-3 opacity-0 animate-fade-in-up" style={{ animationDelay: "120ms" }}>
          <div className="relative shrink-0">
            <div className="relative z-10 w-40 h-40 md:w-48 md:h-48 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <Image
                src="/images/powerlifting.jpeg"
                alt="Powerlifting"
                fill
                className="object-cover"
              />
            </div>
            {/* Straight arrow from photo to text (behind photo so hover scale hides it) */}
            <svg
              className="absolute left-full top-[4%] z-0 w-[44px] h-[28px] md:w-[48px] md:h-[30px] text-[var(--text-muted)] opacity-0 animate-fade-in-up"
              style={{ filter: "opacity(0.85)", animationDelay: "550ms" }}
              viewBox="0 0 44 28"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              aria-hidden
            >
              <path
                d="M 0 20 L 40 0"
                markerEnd="url(#powerlifting-arrow)"
              />
              <defs>
                <marker
                  id="powerlifting-arrow"
                  markerWidth="6"
                  markerHeight="6"
                  refX="4"
                  refY="3"
                  orient="auto"
                >
                  <path d="M 0 0 L 6 3 L 0 6 Z" fill="currentColor" />
                </marker>
              </defs>
            </svg>
            <span className="absolute left-full top-0 z-0 -translate-y-full -mt-1 md:-mt-1.5 text-xs text-[var(--text-muted)] italic whitespace-nowrap pl-[38px] md:pl-[42px] opacity-0 animate-fade-in-up" style={{ animationDelay: "550ms" }}>
              (this is me btw)
            </span>
          </div>
          <div className="text-center md:text-left">
            <h3 className="font-heading text-xl md:text-2xl tracking-wide text-[var(--text)] mb-2">
              Powerlifting
            </h3>
            <p className="text-[var(--text-muted)] leading-relaxed text-sm md:text-base mb-2">
              I train powerlifting.
            </p>
            <p className="text-[var(--text-muted)] leading-relaxed text-sm md:text-base mb-2">
              It’s simple: show up, lift heavy things, repeat. Progress is slow, numbers go up (eventually), and your ego gets checked regularly.
            </p>
            <p className="text-[var(--text-muted)] leading-relaxed text-sm md:text-base">
              Squat. Bench. Deadlift.
              <br />
              No shortcuts. Unfortunately.
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
              It’s a character-building experience.
            </p>
            <p className="text-[var(--text-muted)] leading-relaxed text-sm md:text-base mb-2">
              Every race weekend starts with hope and ends with “next year.” Still, I watch every race. Loyalty to Ferrari is a commitment.
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
