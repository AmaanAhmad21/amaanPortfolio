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
          "0%": { opacity: "0", transform: "translateY(-20%) scaleY(0.3)" },
          "15%": { opacity: "1", transform: "translateY(0) scaleY(1)" },
          "25%": { opacity: "1" },
          "40%": { opacity: "0" },
          "100%": { opacity: "0" },
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
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "lightning-flash": "lightningFlash 4s ease-in-out infinite",
        "lightning-strike": "lightningStrike 0.5s ease-out forwards",
        "screen-flash": "screenFlash 0.5s ease-out forwards",
        "speed-blur": "speedBlur 2s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
