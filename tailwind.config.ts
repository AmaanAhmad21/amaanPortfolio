import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        accent: "var(--accent)",
        "accent-muted": "var(--accent-muted)",
        lightning: "var(--lightning)",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        lightningFlash: {
          "0%, 100%": { opacity: "0" },
          "5%": { opacity: "0.4" },
          "10%": { opacity: "0" },
          "15%": { opacity: "0.3" },
          "20%, 100%": { opacity: "0" },
        },
        lightningStrike: {
          "0%": { opacity: "0" },
          "5%": { opacity: "1" },
          "80%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        lightningDraw: {
          "0%": { strokeDashoffset: "1" },
          "60%": { strokeDashoffset: "0" },
          "100%": { strokeDashoffset: "0" },
        },
        screenFlash: {
          "0%": { opacity: "0" },
          "20%": { opacity: "0.9" },
          "40%": { opacity: "0" },
          "100%": { opacity: "0" },
        },
        speedBlur: {
          "0%": { backgroundPosition: "200% 50%" },
          "100%": { backgroundPosition: "-200% 50%" },
        },
        electricGlow: {
          "0%, 100%": { opacity: "0.6", filter: "brightness(1)" },
          "50%": { opacity: "1", filter: "brightness(1.15)" },
        },
        electricFlicker: {
          "0%, 90%, 100%": { opacity: "1" },
          "92%": { opacity: "0.85" },
          "94%": { opacity: "1" },
          "96%": { opacity: "0.9" },
          "98%": { opacity: "1" },
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        galaxyDriftSlow: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "25%": { transform: "translate(2%, 1%) scale(1.02)" },
          "50%": { transform: "translate(-1%, 2%) scale(0.98)" },
          "75%": { transform: "translate(-2%, -1%) scale(1.01)" },
        },
        galaxyDriftMedium: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "33%": { transform: "translate(-3%, 2%)" },
          "66%": { transform: "translate(2%, -2%)" },
        },
        starFlow: {
          "0%": { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "200% 200%" },
        },
        starFlowReverse: {
          "0%": { backgroundPosition: "200% 0%" },
          "100%": { backgroundPosition: "0% 200%" },
        },
        passByRightToLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        passByLeftToRight: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "lightning-flash": "lightningFlash 4s ease-in-out infinite",
        "lightning-strike": "lightningStrike 0.5s ease-out forwards",
        "lightning-draw": "lightningDraw 0.45s ease-out forwards",
        "screen-flash": "screenFlash 0.5s ease-out forwards",
        "speed-blur": "speedBlur 2s linear infinite",
        "electric-glow": "electricGlow 2.5s ease-in-out infinite",
        "electric-flicker": "electricFlicker 3s ease-in-out infinite",
        "spin-slow": "spinSlow 55s linear infinite",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "galaxy-drift-slow": "galaxyDriftSlow 22s ease-in-out infinite",
        "galaxy-drift-medium": "galaxyDriftMedium 28s ease-in-out infinite",
        "star-flow": "starFlow 65s linear infinite",
        "star-flow-reverse": "starFlowReverse 58s linear infinite",
        "pass-by-right-to-left": "passByRightToLeft 36s linear infinite",
        "pass-by-left-to-right": "passByLeftToRight 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
