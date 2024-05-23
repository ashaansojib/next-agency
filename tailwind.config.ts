import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary": "#f0fa2a",
        "secondary": "#db1a61",
        "accent": "#fff"
      },
      backgroundColor: {
        "primary": "#0160E7",
        "secondary": "#FE4C1C",
        "accent": "#fff"
      }
    },
  },
  plugins: [],
};
export default config;
