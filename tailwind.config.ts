import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#050D18",
          900: "#0A1628",
          800: "#0F1E35",
          700: "#1A2E4A",
          600: "#243D5F",
        },
        gold: {
          DEFAULT: "#C9A84C",
          light: "#D4B86A",
          dark: "#A8892E",
        },
        cream: {
          DEFAULT: "#F5F0E8",
        },
        slate: {
          agency: "#8A9BB5",
        },
      },
      fontFamily: {
        cormorant: ["var(--font-cormorant)", "Georgia", "serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        "spin-slow": "spin 28s linear infinite",
        "spin-reverse": "spin-reverse 18s linear infinite",
        "float": "float 7s ease-in-out infinite",
        "float-b": "float 7s ease-in-out 2.3s infinite",
        "float-c": "float 7s ease-in-out 4.6s infinite",
        "ticker": "ticker 32s linear infinite",
        "orbit": "orbit 14s linear infinite",
        "orbit-b": "orbit 9s linear infinite reverse",
        "pulse-subtle": "pulse-subtle 3s ease-in-out infinite",
        "glow-pulse": "glow-pulse 4s ease-in-out infinite",
      },
      keyframes: {
        "spin-reverse": {
          from: { transform: "rotate(360deg)" },
          to: { transform: "rotate(0deg)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-14px) rotate(0.8deg)" },
        },
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        orbit: {
          from: { transform: "rotate(0deg) translateX(148px) rotate(0deg)" },
          to: { transform: "rotate(360deg) translateX(148px) rotate(-360deg)" },
        },
        "pulse-subtle": {
          "0%,100%": { boxShadow: "0 0 0 0 rgba(201,168,76,0)" },
          "50%": { boxShadow: "0 0 0 10px rgba(201,168,76,0.07)" },
        },
        "glow-pulse": {
          "0%,100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
