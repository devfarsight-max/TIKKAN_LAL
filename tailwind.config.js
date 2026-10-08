/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        display: ["Manrope", "sans-serif"],
      },
      colors: {
        forest: "#164b82",
        moss: "#df1e2d",
        lime: "#f28a00",
        paper: "#f8f9fb",
        ink: "#20232a",
      },
    },
  },
  plugins: [],
};
