"use client";


export function LightningBackground() {
  return (
    <>
      {/* Base: NASA-style deep black with faint blue tint */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, #010204 0%, #020308 20%, #03050c 50%, #020308 80%, #010204 100%)",
        }}
      />
      {/* Galactic band - core structure (wider, more layered) */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 220% 55% at 50% 50%, rgba(25, 22, 45, 0.5) 0%, transparent 50%),
            radial-gradient(ellipse 180% 40% at 50% 50%, rgba(50, 45, 85, 0.35) 0%, transparent 48%),
            radial-gradient(ellipse 140% 32% at 35% 50%, rgba(70, 60, 110, 0.28) 0%, transparent 45%),
            radial-gradient(ellipse 130% 35% at 68% 52%, rgba(55, 48, 95, 0.3) 0%, transparent 45%),
            radial-gradient(ellipse 100% 25% at 50% 48%, rgba(90, 80, 130, 0.22) 0%, transparent 42%)
          `,
        }}
      />
      {/* Dust lanes - dark streaks across the band (NASA realism) */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-75"
        style={{
          background: `
            radial-gradient(ellipse 150% 8% at 50% 44%, rgba(2, 2, 8, 0.7) 0%, transparent 70%),
            radial-gradient(ellipse 120% 6% at 35% 52%, rgba(3, 3, 12, 0.5) 0%, transparent 65%),
            radial-gradient(ellipse 100% 10% at 72% 46%, rgba(2, 2, 10, 0.55) 0%, transparent 60%),
            radial-gradient(ellipse 80% 5% at 18% 50%, rgba(4, 3, 15, 0.4) 0%, transparent 55%),
            radial-gradient(ellipse 70% 6% at 88% 48%, rgba(3, 3, 12, 0.45) 0%, transparent 55%)
          `,
        }}
      />
      {/* Bright core & star clouds - hot regions in the band */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-90"
        style={{
          background: `
            radial-gradient(ellipse 60% 15% at 50% 50%, rgba(220, 215, 255, 0.12) 0%, transparent 70%),
            radial-gradient(ellipse 45% 12% at 38% 48%, rgba(240, 235, 255, 0.1) 0%, transparent 65%),
            radial-gradient(ellipse 40% 14% at 62% 52%, rgba(210, 205, 250, 0.09) 0%, transparent 60%),
            radial-gradient(ellipse 35% 10% at 25% 50%, rgba(200, 195, 240, 0.07) 0%, transparent 55%),
            radial-gradient(ellipse 30% 11% at 78% 49%, rgba(230, 225, 255, 0.06) 0%, transparent 50%),
            radial-gradient(ellipse 25% 8% at 52% 45%, rgba(255, 250, 255, 0.08) 0%, transparent 50%)
          `,
        }}
      />
      {/* Nebulae - H-II regions & dust (purple, blue, hint of pink) */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-85"
        style={{
          background: `
            radial-gradient(ellipse 55% 48% at 28% 46%, rgba(75, 45, 95, 0.45) 0%, transparent 72%),
            radial-gradient(ellipse 48% 42% at 72% 54%, rgba(50, 40, 90, 0.4) 0%, transparent 70%),
            radial-gradient(ellipse 42% 38% at 48% 38%, rgba(65, 50, 100, 0.35) 0%, transparent 68%),
            radial-gradient(ellipse 50% 45% at 12% 58%, rgba(85, 40, 85, 0.3) 0%, transparent 70%),
            radial-gradient(ellipse 38% 50% at 88% 44%, rgba(95, 65, 120, 0.32) 0%, transparent 68%),
            radial-gradient(ellipse 32% 32% at 55% 62%, rgba(110, 70, 130, 0.25) 0%, transparent 62%),
            radial-gradient(ellipse 45% 38% at 42% 50%, rgba(80, 55, 115, 0.22) 0%, transparent 62%),
            radial-gradient(ellipse 28% 35% at 68% 38%, rgba(120, 85, 145, 0.2) 0%, transparent 58%)
          `,
        }}
      />
      {/* Subtle pink/magenta (H-alpha) in denser nebula */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-70"
        style={{
          background: `
            radial-gradient(ellipse 35% 30% at 32% 48%, rgba(140, 80, 120, 0.15) 0%, transparent 65%),
            radial-gradient(ellipse 28% 28% at 58% 55%, rgba(130, 70, 110, 0.12) 0%, transparent 60%),
            radial-gradient(ellipse 22% 22% at 48% 42%, rgba(150, 90, 130, 0.1) 0%, transparent 55%)
          `,
        }}
      />
      {/* Bright stars - mix of white, blue-white, warm white (realistic color) */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-98"
        style={{
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
      {/* Medium stars - dense layer with color variation */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-92"
        style={{
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
            radial-gradient(1px 1px at 82% 38%, rgba(255,255,255,0.78), transparent),
            radial-gradient(1px 1px at 16% 58%, rgba(230,235,255,0.7), transparent),
            radial-gradient(1.5px 1.5px at 58% 68%, rgba(255,255,255,0.72), transparent),
            radial-gradient(1px 1px at 42% 12%, rgba(255,250,245,0.7), transparent),
            radial-gradient(1px 1px at 94% 48%, rgba(240,245,255,0.68), transparent),
            radial-gradient(1.5px 1.5px at 6% 18%, rgba(255,255,255,0.7), transparent),
            radial-gradient(1px 1px at 76% 92%, rgba(235,238,255,0.65), transparent)
          `,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Faint stars - depth layer */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-88"
        style={{
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
            radial-gradient(1px 1px at 74% 92%, rgba(255,250,240,0.45), transparent),
            radial-gradient(0.8px 0.8px at 24% 42%, rgba(255,255,255,0.45), transparent),
            radial-gradient(0.8px 0.8px at 56% 35%, rgba(240,245,255,0.42), transparent),
            radial-gradient(0.8px 0.8px at 82% 68%, rgba(255,255,255,0.44), transparent),
            radial-gradient(0.8px 0.8px at 38% 78%, rgba(255,248,235,0.4), transparent),
            radial-gradient(0.8px 0.8px at 62% 8%, rgba(235,240,255,0.42), transparent),
            radial-gradient(0.8px 0.8px at 4% 62%, rgba(255,255,255,0.4), transparent),
            radial-gradient(0.8px 0.8px at 98% 28%, rgba(255,252,248,0.38), transparent),
            radial-gradient(0.8px 0.8px at 18% 8%, rgba(240,245,255,0.4), transparent),
            radial-gradient(0.8px 0.8px at 86% 88%, rgba(255,255,255,0.38), transparent),
            radial-gradient(0.8px 0.8px at 52% 58%, rgba(255,255,255,0.42), transparent)
          `,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Very faint / distant stars - maximum density */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-82"
        style={{
          backgroundImage: `
            radial-gradient(0.7px 0.7px at 7% 33%, rgba(255,255,255,0.55), transparent),
            radial-gradient(0.7px 0.7px at 51% 7%, rgba(240,245,255,0.5), transparent),
            radial-gradient(0.7px 0.7px at 93% 63%, rgba(255,255,255,0.52), transparent),
            radial-gradient(0.7px 0.7px at 27% 93%, rgba(255,252,248,0.48), transparent),
            radial-gradient(0.7px 0.7px at 63% 41%, rgba(255,255,255,0.48), transparent),
            radial-gradient(0.7px 0.7px at 19% 57%, rgba(235,240,255,0.5), transparent),
            radial-gradient(0.7px 0.7px at 79% 19%, rgba(255,255,255,0.5), transparent),
            radial-gradient(0.7px 0.7px at 41% 81%, rgba(255,248,240,0.45), transparent),
            radial-gradient(0.7px 0.7px at 11% 11%, rgba(255,255,255,0.48), transparent),
            radial-gradient(0.7px 0.7px at 89% 89%, rgba(240,245,255,0.45), transparent),
            radial-gradient(0.7px 0.7px at 33% 27%, rgba(255,255,255,0.5), transparent),
            radial-gradient(0.7px 0.7px at 57% 63%, rgba(255,252,248,0.45), transparent),
            radial-gradient(0.7px 0.7px at 2% 77%, rgba(235,240,255,0.42), transparent),
            radial-gradient(0.7px 0.7px at 98% 37%, rgba(255,255,255,0.48), transparent),
            radial-gradient(0.7px 0.7px at 47% 23%, rgba(255,255,255,0.42), transparent),
            radial-gradient(0.7px 0.7px at 71% 76%, rgba(240,245,255,0.45), transparent),
            radial-gradient(0.6px 0.6px at 15% 38%, rgba(255,255,255,0.38), transparent),
            radial-gradient(0.6px 0.6px at 59% 52%, rgba(255,255,255,0.36), transparent),
            radial-gradient(0.6px 0.6px at 31% 72%, rgba(240,245,255,0.35), transparent),
            radial-gradient(0.6px 0.6px at 77% 44%, rgba(255,252,248,0.36), transparent),
            radial-gradient(0.6px 0.6px at 43% 18%, rgba(255,255,255,0.34), transparent),
            radial-gradient(0.6px 0.6px at 9% 84%, rgba(255,255,255,0.35), transparent),
            radial-gradient(0.6px 0.6px at 91% 14%, rgba(235,240,255,0.34), transparent),
            radial-gradient(0.6px 0.6px at 67% 86%, rgba(255,255,255,0.32), transparent)
          `,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      />
    </>
  );
}
