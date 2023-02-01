/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      gridTemplateColumns: {
        countriesMap: "repeat( auto-fit, minmax(15.62rem, 18.4rem) )",
      },
    },
    colors: {
      DarkBlue: "hsl(209, 23%, 22%)" /*(Dark Mode Elements)*/,
      VeryDarkBlue: "hsl(207, 26%, 17%)" /*(Dark Mode Background)*/,
      VeryDarkBlue: "hsl(200, 15%, 8%)" /*(Light Mode Text)*/,
      DarkGray: "hsl(0, 0%, 52%)" /*(Light Mode Input)*/,
      VeryLightGray: "hsl(0, 0%, 98%)" /*(Light Mode Background)*/,
      White: "hsl(0, 0%, 100%)" /*(Dark Mode Text & Light Mode Elements)*/,
    },
  },
  plugins: [],
};
