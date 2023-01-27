/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      din: ["DIN_Pro", "ui-sans-serif"],
    },
    extend: {
      colors: {
        "main-bgc": "#041a03",
        main: "rgba(12,52,86,0.85)",
      },
      backgroundImage: {
        "main-b-stadium": "url('/src/assets/b-stadium_1.png')",
        "pack-1": "url('/src/assets/packs/special_pack.png')",
        "opening-c": "url('/src/assets/concrete-bg.jpg')",
      },
    },
  },
  plugins: [],
};
