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
        primary: {
          50: "#e4d3ff",
          100: "#d7beff",
          200: "#cba8ff",
          300: "#ae87e4",
          400: "#9069c3",
          500: "#7851a9",
          600: "#673f96",
          700: "#562e83",
          800: "#461c71",
          900: "#37065e",
          950: "#2c004f",
        },
        accent: {
          50: "#ffebe6",
          100: "#ffdcd2",
          200: "#fed4c8",
          300: "#ffbcaa",
          400: "#ffa38b",
          500: "#ff886a",
          600: "#ff6b45",
          700: "#ff4602",
          800: "#e23c00",
          900: "#c73300",
          950: "#ab2b00",
        },
      },
    },
  },

  plugins: [],
};
export default config;
