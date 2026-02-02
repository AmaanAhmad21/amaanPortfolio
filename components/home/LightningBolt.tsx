"use client";

type Props = { x: number; visible: boolean };

export function LightningBolt({ x, visible }: Props) {
  if (!visible) return null;
  return (
    <div
      className="pointer-events-none fixed inset-0 z-20 animate-lightning-strike"
      style={{ left: 0, right: 0 }}
    >
      <svg
        className="absolute w-12 h-[100vh]"
        style={{
          left: `${x}px`,
          transform: "translateX(-50%)",
          filter: "drop-shadow(0 0 8px rgba(230,240,255,0.8))",
        }}
        viewBox="0 0 48 400"
        fill="none"
      >
        <path
          d="M24 0 L18 140 L26 140 L14 280 L30 280 L10 400 L38 200 L24 200 L32 80 L24 80 Z"
          fill="url(#bolt)"
          stroke="rgba(255,255,255,0.5)"
          strokeWidth="0.5"
        />
        <defs>
          <linearGradient id="bolt" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e8f0ff" stopOpacity={0.3} />
            <stop offset="50%" stopColor="#e8f0ff" stopOpacity={0.9} />
            <stop offset="100%" stopColor="#c8dcff" stopOpacity={0.5} />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
