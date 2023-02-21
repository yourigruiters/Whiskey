/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      white: "#fff",
      black: "#000",
      islands: {
        default: "#D71E44",
        hover: "#9E1B34",
      },
      islay: {
        default: "#A5238E",
        hover: "#6E2671",
      },
      highlands: {
        default: "#563494",
        hover: "#322773",
      },
      lowlands: {
        default: "#0663AE",
        hover: "#174272",
      },
      speyside: {
        default: "#1AB467",
        hover: "#007B46",
      },
      campbeltown: {
        default: "#F3B41B",
        hover: "#D29D2A",
      },
    },
  },
  plugins: [],
};
