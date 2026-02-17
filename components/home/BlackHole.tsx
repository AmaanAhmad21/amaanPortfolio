"use client";

export function BlackHole() {
  return (
    <div
      className="fixed top-4 right-4 md:top-8 md:right-8 z-0 pointer-events-none w-28 h-28 md:w-40 md:h-40 opacity-100"
      aria-hidden
    >
      <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
        <defs>
          {/* Accretion disk - brighter warm/orange */}
          <radialGradient id="bh-disk" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#000" stopOpacity="1" />
            <stop offset="25%" stopColor="#000" stopOpacity="1" />
            <stop offset="35%" stopColor="#6b3010" stopOpacity="1" />
            <stop offset="45%" stopColor="#b85c1a" stopOpacity="0.95" />
            <stop offset="55%" stopColor="#e89a4a" stopOpacity="0.85" />
            <stop offset="70%" stopColor="#a04a18" stopOpacity="0.6" />
            <stop offset="85%" stopColor="#5c2a0a" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#1a0d02" stopOpacity="0" />
          </radialGradient>
          {/* Doppler bright side */}
          <linearGradient id="bh-disk-tint" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#2d1808" stopOpacity="0.5" />
            <stop offset="45%" stopColor="transparent" stopOpacity="0" />
            <stop offset="55%" stopColor="transparent" stopOpacity="0" />
            <stop offset="100%" stopColor="#ffc078" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        {/* Accretion disk (ellipse, tilted for 3D feel) */}
        <ellipse
          cx="50"
          cy="50"
          rx="42"
          ry="14"
          fill="url(#bh-disk)"
          transform="rotate(-25 50 50)"
        />
        {/* Bright side overlay for rotation effect */}
        <ellipse
          cx="50"
          cy="50"
          rx="42"
          ry="14"
          fill="url(#bh-disk-tint)"
          transform="rotate(-25 50 50)"
        />
        {/* Event horizon - black hole with movie-style border (photon sphere ring) */}
        <circle cx="50" cy="50" r="12" fill="#000" />
        <circle
          cx="50"
          cy="50"
          r="12"
          fill="none"
          stroke="rgba(220, 150, 80, 0.95)"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}
