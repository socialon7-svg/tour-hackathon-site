import type { Config } from "tailwindcss";

// Tailwind scans these files and generates only the CSS classes used by the app.
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#162033",
        slate: "#5D6978",
        mint: "#14A88D",
        leaf: "#45B36B",
        coral: "#F26B4F",
        paper: "#F6FAF8",
      },
      boxShadow: {
        card: "0 12px 36px rgba(22, 32, 51, 0.07)",
        soft: "0 24px 70px rgba(22, 32, 51, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
