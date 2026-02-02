"use client";

import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { LightningBackground } from "@/components/home/LightningBackground";
import { LightningBolt } from "@/components/home/LightningBolt";
import { ContactIcons } from "@/components/home/ContactIcons";

type Strike = { href: string; x: number } | null;

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
] as const;

export default function Home() {
  const router = useRouter();
  const [strike, setStrike] = useState<Strike>(null);
  const [flash, setFlash] = useState(false);

  const handleStrikeClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (href === "/") return; // Don't navigate if already home
      e.preventDefault();
      const rect = e.currentTarget.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      setStrike({ href, x });
      setFlash(true);
      setTimeout(() => setFlash(false), 520);
      setTimeout(() => {
        router.push(href);
        setStrike(null);
      }, 480);
    },
    [router]
  );

  return (
    <div className="fixed inset-0 z-50 bg-[var(--bg)] overflow-hidden">
      <LightningBackground />

      {/* Screen flash overlay on strike */}
      {flash && (
        <div
          className="fixed inset-0 z-[60] pointer-events-none animate-screen-flash"
          style={{ backgroundColor: "var(--flash)" }}
        />
      )}

      <LightningBolt x={strike?.x ?? 0} visible={strike !== null} />

      {/* Border frame */}
      <div className="absolute inset-4 md:inset-8 border border-[var(--border)] z-10">
        {/* Top-left: Name + Nav */}
        <div className="absolute top-8 md:top-12 left-6 md:left-10">
          <h1 className="font-heading text-4xl md:text-5xl text-[var(--text)] mb-4 animate-fade-in tracking-wide">
            Amaan Ahmad
          </h1>
          <div
            className="w-full max-w-[220px] md:max-w-[280px] h-1 md:h-1.5 mb-6 md:mb-8 rounded-full overflow-hidden animate-speed-blur"
            style={{
              background: "linear-gradient(90deg, transparent 0%, var(--border) 20%, var(--lightning) 50%, var(--border) 80%, transparent 100%)",
              backgroundSize: "200% 100%",
            }}
          />
          <nav className="flex flex-col gap-4 md:gap-5">
            {nav.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => handleStrikeClick(e, href)}
                className={`font-heading text-lg md:text-xl transition-colors tracking-wide ${
                  href === "/"
                    ? "text-[var(--text)]"
                    : "text-[var(--text-muted)] hover:text-[var(--lightning)] cursor-pointer"
                }`}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom-right: Contact */}
        <div className="absolute bottom-6 md:bottom-10 right-6 md:right-10">
          <ContactIcons />
        </div>

        {/* AZA integrated into bottom-center border */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex items-center bg-[var(--bg)] px-3">
          <span className="text-base md:text-lg font-heading tracking-[0.4em] text-[var(--text-muted)]">
            AZA
          </span>
        </div>

        {/* Bottom-left: Location with pin icon */}
        <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 flex items-center gap-2">
          <svg className="w-5 h-5 shrink-0 text-[var(--text-muted)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <p className="text-base md:text-lg text-[var(--text-muted)] font-body tracking-wide">Toronto, Canada</p>
        </div>
      </div>
    </div>
  );
}
