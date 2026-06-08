import type { Config } from "tailwindcss";

// Tailwind scans these files and generates only the CSS classes used by the app.
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#17202A",
        mint: "#1B998B",
        leaf: "#48A868",
        coral: "#F2674A",
        paper: "#F7F6F1",
      },
      boxShadow: {
        soft: "0 20px 60px rgba(23, 32, 42, 0.14)",
      },
    },
  },
  plugins: [],
};

export default config;
