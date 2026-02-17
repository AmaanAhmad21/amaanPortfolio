"use client";

type Props = { targetX: number; targetY: number; visible: boolean };

function buildJaggedPath(endX: number, endY: number): string {
  const startX = 50;
  const startY = 0;
  const segments = 10;
  const points: [number, number][] = [[startX, startY]];

  for (let i = 1; i < segments; i++) {
    const t = i / segments;
    const jag = (i % 2 === 0 ? 1 : -1) * (5 + Math.sin(i * 1.7) * 4);
    const x = Math.max(10, Math.min(90, startX + (endX - startX) * t + jag));
    const y = startY + (endY - startY) * Math.pow(t, 0.85);
    points.push([x, y]);
  }
  points.push([endX, endY]);

  return points.reduce((d, p, i) => d + (i === 0 ? `M ${p[0]} ${p[1]}` : ` L ${p[0]} ${p[1]}`), "");
}

export function LightningBolt({ targetX, targetY, visible }: Props) {
  if (!visible) return null;

  const pathD = buildJaggedPath(targetX, targetY);

  return (
    <div className="pointer-events-none fixed inset-0 z-20">
      <svg
        className="absolute inset-0 w-full h-full animate-lightning-strike"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="bolt-glow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e8f0ff" stopOpacity={0.4} />
            <stop offset="50%" stopColor="#fff" stopOpacity={0.95} />
            <stop offset="100%" stopColor="#c8dcff" stopOpacity={0.7} />
          </linearGradient>
          <filter id="bolt-glow-filter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0.4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* Outer glow / thicker stroke */}
        <path
          d={pathD}
          fill="none"
          stroke="url(#bolt-glow)"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="1"
          strokeDashoffset="1"
          pathLength={1}
          filter="url(#bolt-glow-filter)"
          className="animate-lightning-draw"
          style={{ opacity: 0.9 }}
        />
        {/* Core bright line */}
        <path
          d={pathD}
          fill="none"
          stroke="#fff"
          strokeWidth="0.35"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="1"
          strokeDashoffset="1"
          pathLength={1}
          className="animate-lightning-draw"
          style={{ opacity: 1 }}
        />
      </svg>
    </div>
  );
}
