import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#080808",
          900: "#141414",
          800: "#1C1C1C",
          700: "#222222",
          600: "#2A2A2A",
        },
        gold: {
          300: "#B5E8DA",
          400: "#7FCAB5",
          500: "#7FCAB5",
          600: "#5AAB8E",
          700: "#3A7D66",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #5AAB8E 0%, #7FCAB5 50%, #5AAB8E 100%)",
        "navy-gradient": "linear-gradient(180deg, #080808 0%, #141414 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
