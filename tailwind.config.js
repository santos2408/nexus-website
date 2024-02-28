/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1320px",
    },
    extend: {
      fontFamily: {
        sans: ["Roboto", "Inter Tight", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "brand-blue-100": "#1A73E9",
        "brand-blue-200": "#045BCD",
        "brand-black-100": "#0D121E",
        "brand-gray-100": "#475467",
      },
    },
  },
  plugins: [],
};
