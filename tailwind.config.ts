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
        paper: "#F4F8FC",
        line: "#DCE8F5",
      },
      boxShadow: {
        button: "0 10px 22px rgba(47, 128, 237, 0.24)",
        card: "0 12px 36px rgba(8, 42, 82, 0.08)",
        soft: "0 24px 70px rgba(8, 42, 82, 0.14)",
      },
    },
  },
  plugins: [],
};

export default config;
