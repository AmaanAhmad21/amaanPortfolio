"use client";

export function Background() {
  return (
    <>
      {/* Base: deep space */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, #010204 0%, #020308 20%, #03050c 50%, #020308 80%, #010204 100%)",
        }}
      />

      {/* Milky Way disk – main band (blues, purples, subtle warm core) */}
      <div
        className="fixed inset-0 z-0 pointer-events-none animate-galaxy-drift-slow"
        style={{
          animationDelay: "-12s",
          background: `
            radial-gradient(ellipse 200% 50% at 50% 50%, rgba(35, 30, 60, 0.55) 0%, transparent 48%),
            radial-gradient(ellipse 160% 38% at 50% 50%, rgba(45, 40, 85, 0.4) 0%, transparent 46%),
            radial-gradient(ellipse 120% 28% at 48% 48%, rgba(70, 55, 110, 0.35) 0%, transparent 44%),
            radial-gradient(ellipse 90% 22% at 50% 50%, rgba(95, 75, 130, 0.28) 0%, transparent 42%),
            radial-gradient(ellipse 65% 18% at 50% 50%, rgba(120, 95, 150, 0.22) 0%, transparent 40%),
            radial-gradient(ellipse 45% 12% at 50% 50%, rgba(180, 160, 220, 0.12) 0%, transparent 38%),
            radial-gradient(ellipse 28% 8% at 50% 50%, rgba(220, 200, 255, 0.08) 0%, transparent 35%)
          `,
        }}
      />

      {/* Milky Way – dust lanes and structure */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-80 animate-galaxy-drift-medium"
        style={{
          animationDelay: "-18s",
          background: `
            radial-gradient(ellipse 180% 6% at 50% 46%, rgba(2, 2, 6, 0.75) 0%, transparent 65%),
            radial-gradient(ellipse 140% 5% at 38% 52%, rgba(4, 3, 10, 0.55) 0%, transparent 60%),
            radial-gradient(ellipse 130% 8% at 64% 44%, rgba(3, 2, 8, 0.6) 0%, transparent 58%),
            radial-gradient(ellipse 90% 4% at 22% 50%, rgba(5, 4, 12, 0.45) 0%, transparent 52%),
            radial-gradient(ellipse 85% 5% at 78% 48%, rgba(3, 3, 10, 0.5) 0%, transparent 50%),
            radial-gradient(ellipse 70% 6% at 50% 42%, rgba(2, 2, 8, 0.5) 0%, transparent 48%)
          `,
        }}
      />

      {/* Milky Way – color variation (blue, purple, faint magenta/orange) */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-88 animate-galaxy-drift-slow"
        style={{
          animationDelay: "-30s",
          background: `
            radial-gradient(ellipse 55% 42% at 30% 48%, rgba(50, 45, 95, 0.4) 0%, transparent 70%),
            radial-gradient(ellipse 50% 38% at 70% 52%, rgba(55, 48, 100, 0.38) 0%, transparent 68%),
            radial-gradient(ellipse 42% 35% at 50% 40%, rgba(75, 55, 115, 0.32) 0%, transparent 65%),
            radial-gradient(ellipse 38% 40% at 15% 55%, rgba(90, 45, 95, 0.28) 0%, transparent 68%),
            radial-gradient(ellipse 40% 45% at 88% 46%, rgba(65, 50, 105, 0.3) 0%, transparent 66%),
            radial-gradient(ellipse 32% 30% at 52% 58%, rgba(110, 75, 135, 0.22) 0%, transparent 60%),
            radial-gradient(ellipse 28% 28% at 42% 52%, rgba(130, 85, 145, 0.2) 0%, transparent 58%),
            radial-gradient(ellipse 25% 22% at 58% 38%, rgba(95, 60, 120, 0.24) 0%, transparent 55%),
            radial-gradient(ellipse 22% 20% at 50% 50%, rgba(255, 235, 220, 0.06) 0%, transparent 45%)
          `,
        }}
      />

      {/* Warm core hint + H-alpha (Milky Way center glow) */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-75 animate-galaxy-drift-slow"
        style={{
          animationDelay: "-8s",
          background: `
            radial-gradient(ellipse 35% 25% at 50% 50%, rgba(255, 245, 235, 0.07) 0%, transparent 60%),
            radial-gradient(ellipse 28% 20% at 50% 50%, rgba(255, 230, 210, 0.05) 0%, transparent 55%),
            radial-gradient(ellipse 20% 14% at 48% 48%, rgba(140, 85, 120, 0.12) 0%, transparent 50%),
            radial-gradient(ellipse 18% 12% at 52% 52%, rgba(120, 70, 110, 0.1) 0%, transparent 48%)
          `,
        }}
      />

      {/* Passing stars – right to left */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-90 animate-pass-by-right-to-left"
        style={{
          animationDelay: "-15s",
          backgroundImage: `
            radial-gradient(1.5px 1.5px at 0% 0%, rgba(255,255,255,0.9), transparent),
            radial-gradient(1px 1px at 10% 20%, rgba(255,255,255,0.7), transparent),
            radial-gradient(1.5px 1.5px at 20% 5%, rgba(240,245,255,0.8), transparent),
            radial-gradient(1px 1px at 30% 25%, rgba(255,255,255,0.6), transparent),
            radial-gradient(1px 1px at 40% 10%, rgba(255,252,245,0.75), transparent),
            radial-gradient(1px 1px at 50% 30%, rgba(255,255,255,0.65), transparent),
            radial-gradient(1px 1px at 60% 15%, rgba(235,240,255,0.7), transparent),
            radial-gradient(1px 1px at 70% 35%, rgba(255,255,255,0.55), transparent),
            radial-gradient(1.5px 1.5px at 80% 8%, rgba(255,255,255,0.8), transparent),
            radial-gradient(1px 1px at 90% 28%, rgba(240,245,255,0.6), transparent),
            radial-gradient(1px 1px at 5% 40%, rgba(255,255,255,0.5), transparent),
            radial-gradient(1px 1px at 15% 55%, rgba(255,248,235,0.65), transparent),
            radial-gradient(1px 1px at 25% 45%, rgba(255,255,255,0.55), transparent),
            radial-gradient(1px 1px at 35% 60%, rgba(230,235,255,0.5), transparent),
            radial-gradient(1.5px 1.5px at 45% 50%, rgba(255,255,255,0.6), transparent),
            radial-gradient(1px 1px at 55% 65%, rgba(255,255,255,0.45), transparent),
            radial-gradient(1px 1px at 65% 42%, rgba(240,245,255,0.55), transparent),
            radial-gradient(1.5px 1.5px at 75% 58%, rgba(255,255,255,0.5), transparent),
            radial-gradient(1px 1px at 85% 48%, rgba(255,252,248,0.6), transparent),
            radial-gradient(1px 1px at 95% 62%, rgba(235,240,255,0.45), transparent)
          `,
          backgroundSize: "50% 50%",
          backgroundRepeat: "repeat",
          animationDuration: "36s",
        }}
      />

      {/* Passing stars – left to right */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-60 animate-pass-by-left-to-right"
        style={{
          animationDelay: "-30s",
          backgroundImage: `
            radial-gradient(0.8px 0.8px at 5% 80%, rgba(255,255,255,0.5), transparent),
            radial-gradient(1px 1px at 25% 10%, rgba(255,255,255,0.4), transparent),
            radial-gradient(0.8px 0.8px at 45% 70%, rgba(240,245,255,0.45), transparent),
            radial-gradient(1px 1px at 65% 25%, rgba(255,255,255,0.35), transparent),
            radial-gradient(0.8px 0.8px at 85% 55%, rgba(255,252,248,0.4), transparent),
            radial-gradient(1px 1px at 15% 40%, rgba(235,240,255,0.45), transparent),
            radial-gradient(0.8px 0.8px at 55% 90%, rgba(255,255,255,0.3), transparent),
            radial-gradient(1px 1px at 95% 15%, rgba(255,255,255,0.4), transparent),
            radial-gradient(0.8px 0.8px at 35% 60%, rgba(240,245,255,0.35), transparent),
            radial-gradient(1px 1px at 75% 35%, rgba(255,255,255,0.38), transparent)
          `,
          backgroundSize: "40% 40%",
          backgroundRepeat: "repeat",
          animationDuration: "40s",
        }}
      />

      {/* Diagonal star flow */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-50 animate-star-flow"
        style={{
          animationDelay: "-20s",
          backgroundImage: `
            radial-gradient(1px 1px at 20% 20%, rgba(255,255,255,0.4), transparent),
            radial-gradient(1px 1px at 60% 60%, rgba(255,255,255,0.35), transparent),
            radial-gradient(1px 1px at 80% 30%, rgba(240,245,255,0.4), transparent),
            radial-gradient(1px 1px at 40% 80%, rgba(255,255,255,0.3), transparent)
          `,
          backgroundSize: "30% 30%",
          backgroundRepeat: "repeat",
          animationDuration: "52s",
        }}
      />

      {/* Bright star layer */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-98 animate-galaxy-drift-slow"
        style={{
          animationDelay: "-8s",
          backgroundImage: `
            radial-gradient(2.5px 2.5px at 22% 28%, rgba(255,255,255,0.98), transparent),
            radial-gradient(2px 2px at 62% 18%, rgba(230,235,255,0.95), transparent),
            radial-gradient(2.5px 2.5px at 78% 48%, rgba(255,252,245,0.92), transparent),
            radial-gradient(2px 2px at 18% 78%, rgba(255,255,255,0.95), transparent),
            radial-gradient(2.5px 2.5px at 52% 88%, rgba(220,228,255,0.9), transparent),
            radial-gradient(2px 2px at 88% 82%, rgba(255,255,255,0.92), transparent),
            radial-gradient(2px 2px at 38% 42%, rgba(255,248,235,0.88), transparent),
            radial-gradient(2.5px 2.5px at 92% 12%, rgba(240,245,255,0.95), transparent),
            radial-gradient(2px 2px at 8% 52%, rgba(255,255,255,0.9), transparent),
            radial-gradient(2px 2px at 44% 32%, rgba(235,240,255,0.88), transparent),
            radial-gradient(2.5px 2.5px at 68% 72%, rgba(255,250,240,0.9), transparent)
          `,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Medium stars */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-92 animate-galaxy-drift-medium"
        style={{
          animationDelay: "-22s",
          backgroundImage: `
            radial-gradient(1.5px 1.5px at 20% 30%, rgba(255,255,255,0.9), transparent),
            radial-gradient(1px 1px at 40% 70%, rgba(225,230,255,0.85), transparent),
            radial-gradient(1.5px 1.5px at 60% 20%, rgba(255,252,245,0.88), transparent),
            radial-gradient(1px 1px at 80% 50%, rgba(255,255,255,0.8), transparent),
            radial-gradient(1.5px 1.5px at 15% 80%, rgba(235,240,255,0.88), transparent),
            radial-gradient(1px 1px at 90% 15%, rgba(255,255,255,0.82), transparent),
            radial-gradient(1.5px 1.5px at 55% 90%, rgba(255,248,235,0.8), transparent),
            radial-gradient(1px 1px at 70% 65%, rgba(255,255,255,0.9), transparent),
            radial-gradient(1.5px 1.5px at 5% 45%, rgba(230,235,255,0.8), transparent),
            radial-gradient(1px 1px at 35% 15%, rgba(255,255,255,0.85), transparent),
            radial-gradient(1.5px 1.5px at 95% 85%, rgba(255,250,240,0.75), transparent),
            radial-gradient(1px 1px at 25% 55%, rgba(240,245,255,0.88), transparent),
            radial-gradient(1px 1px at 12% 22%, rgba(255,255,255,0.8), transparent),
            radial-gradient(1.5px 1.5px at 88% 72%, rgba(225,230,255,0.78), transparent),
            radial-gradient(1px 1px at 50% 45%, rgba(255,255,255,0.75), transparent),
            radial-gradient(1.5px 1.5px at 72% 8%, rgba(255,252,245,0.82), transparent),
            radial-gradient(1px 1px at 8% 92%, rgba(235,240,255,0.75), transparent),
            radial-gradient(1px 1px at 45% 38%, rgba(255,255,255,0.82), transparent),
            radial-gradient(1.5px 1.5px at 28% 62%, rgba(255,248,235,0.8), transparent),
            radial-gradient(1px 1px at 82% 38%, rgba(255,255,255,0.78), transparent)
          `,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Faint stars */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-88 animate-galaxy-drift-slow"
        style={{
          animationDelay: "-35s",
          backgroundImage: `
            radial-gradient(1px 1px at 18% 35%, rgba(255,255,255,0.6), transparent),
            radial-gradient(1px 1px at 42% 65%, rgba(240,245,255,0.55), transparent),
            radial-gradient(1px 1px at 58% 25%, rgba(255,252,248,0.58), transparent),
            radial-gradient(1px 1px at 78% 55%, rgba(255,255,255,0.52), transparent),
            radial-gradient(1px 1px at 22% 75%, rgba(230,235,255,0.6), transparent),
            radial-gradient(1px 1px at 85% 22%, rgba(255,255,255,0.55), transparent),
            radial-gradient(1px 1px at 48% 88%, rgba(255,248,240,0.5), transparent),
            radial-gradient(1px 1px at 65% 58%, rgba(255,255,255,0.58), transparent),
            radial-gradient(1px 1px at 10% 50%, rgba(240,245,255,0.52), transparent),
            radial-gradient(1px 1px at 92% 42%, rgba(255,255,255,0.5), transparent),
            radial-gradient(1px 1px at 30% 12%, rgba(255,252,248,0.55), transparent),
            radial-gradient(1px 1px at 75% 78%, rgba(235,240,255,0.52), transparent),
            radial-gradient(1px 1px at 14% 68%, rgba(255,255,255,0.48), transparent),
            radial-gradient(1px 1px at 66% 52%, rgba(255,255,255,0.52), transparent),
            radial-gradient(1px 1px at 44% 8%, rgba(240,243,255,0.5), transparent),
            radial-gradient(1px 1px at 96% 58%, rgba(255,248,245,0.48), transparent),
            radial-gradient(1px 1px at 6% 18%, rgba(255,255,255,0.5), transparent),
            radial-gradient(1px 1px at 54% 72%, rgba(230,235,255,0.48), transparent),
            radial-gradient(1px 1px at 36% 48%, rgba(255,255,255,0.52), transparent),
            radial-gradient(1px 1px at 74% 92%, rgba(255,250,240,0.45), transparent)
          `,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Core & star clouds */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-90 animate-galaxy-drift-medium"
        style={{
          animationDelay: "-10s",
          background: `
            radial-gradient(ellipse 55% 14% at 50% 50%, rgba(220, 215, 255, 0.12) 0%, transparent 68%),
            radial-gradient(ellipse 40% 10% at 38% 48%, rgba(240, 235, 255, 0.1) 0%, transparent 62%),
            radial-gradient(ellipse 38% 12% at 62% 52%, rgba(210, 205, 250, 0.09) 0%, transparent 58%),
            radial-gradient(ellipse 32% 9% at 25% 50%, rgba(200, 195, 240, 0.07) 0%, transparent 52%),
            radial-gradient(ellipse 28% 10% at 78% 49%, rgba(230, 225, 255, 0.06) 0%, transparent 48%),
            radial-gradient(ellipse 22% 7% at 52% 45%, rgba(255, 250, 255, 0.08) 0%, transparent 45%)
          `,
        }}
      />

      {/* Pink/magenta nebula */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-70 animate-galaxy-drift-slow"
        style={{
          animationDelay: "-25s",
          background: `
            radial-gradient(ellipse 35% 30% at 32% 48%, rgba(140, 80, 120, 0.15) 0%, transparent 65%),
            radial-gradient(ellipse 28% 28% at 58% 55%, rgba(130, 70, 110, 0.12) 0%, transparent 60%),
            radial-gradient(ellipse 22% 22% at 48% 42%, rgba(150, 90, 130, 0.1) 0%, transparent 55%)
          `,
        }}
      />
    </>
  );
}
