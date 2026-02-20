"use client";

import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";
import { LightningBackground } from "@/components/home/LightningBackground";
import { ContactIcons } from "@/components/home/ContactIcons";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
] as const;

type PortfolioFrameProps = {
  children?: React.ReactNode;
};

export function PortfolioFrame({ children }: PortfolioFrameProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (href === pathname) return;
      e.preventDefault();
      router.push(href);
    },
    [router, pathname]
  );

  return (
    <div className="fixed inset-0 z-50 bg-[var(--bg)] overflow-hidden">
      <LightningBackground />

      <div className="absolute inset-4 md:inset-8 z-10 flex flex-col">
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Left edge at x=0.5 so 1px stroke isn't clipped; rest of border on the frame edge */}
          <path
            d="M 0.5 0 L 100 0 L 100 100 L 58 100 M 42 100 L 0.5 100 L 0.5 0"
            fill="none"
            stroke="var(--border-frame)"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        <div className="absolute top-8 md:top-12 left-6 md:left-10 right-6 md:right-10 bottom-20 md:bottom-24 flex flex-col md:flex-row md:gap-12">
          <div className="shrink-0">
            <h1 className="font-heading text-4xl md:text-5xl text-[var(--text)] mb-4 animate-fade-in tracking-wide">
              Amaan Ahmad
            </h1>
            <div
              className="w-full max-w-[220px] md:max-w-[280px] h-1 md:h-1.5 mb-6 md:mb-8 rounded-full overflow-hidden animate-speed-blur"
              style={{
                background: "linear-gradient(90deg, transparent 0%, var(--border) 18%, var(--lightning) 48%, var(--lightning) 52%, var(--border) 82%, transparent 100%)",
                backgroundSize: "200% 100%",
                boxShadow: "0 0 6px 0 rgba(232, 240, 255, 0.12)",
              }}
            />
            <nav className="flex flex-col gap-4 md:gap-5">
              {nav.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  className={`font-heading text-lg md:text-xl transition-colors tracking-wide ${
                    href === pathname
                      ? "text-[var(--text)]"
                      : "text-[var(--text-muted)] hover:text-[var(--lightning)] cursor-pointer"
                  }`}
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {children != null && (
            <div className="scrollbar-frame flex-1 min-h-0 overflow-y-auto overflow-x-hidden mt-8 md:mt-0 -mr-6 md:-mr-10 pr-3">
              {children}
            </div>
          )}
        </div>

        <div className="absolute bottom-6 md:bottom-10 right-6 md:right-10">
          <ContactIcons />
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex items-center">
          <span className="text-base md:text-lg font-heading tracking-[0.4em] text-[var(--text-muted)]">
            AZA
          </span>
        </div>

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
