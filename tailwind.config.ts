import type { Config } from "tailwindcss";

// Tailwind scans these files and generates only the CSS classes used by the app.
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B1F3A",
        navy: "#082A52",
        slate: "#54657A",
        sky: "#2F80ED",
        skySoft: "#BEE4FF",
        mint: "#2F80ED",
        leaf: "#2A9D8F",
        coral: "#F59E0B",
        paper: "#F5F9FD",
        line: "#DCE8F5",
      },
      boxShadow: {
        button: "0 12px 28px rgba(47, 128, 237, 0.22)",
        card: "0 14px 34px rgba(8, 42, 82, 0.07)",
        soft: "0 26px 72px rgba(8, 42, 82, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
