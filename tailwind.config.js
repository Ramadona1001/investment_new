/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "400px",
      },
      fontFamily: {
        cairo: ["Noto Kufi Arabic"],
      },
      backgroundColor: {
        normal: "#41B06E",
      },
      colors: {
        custom: "#2A4731",
        gold: `#CDA64E`,
      },
    },
  },
  plugins: [],
};
