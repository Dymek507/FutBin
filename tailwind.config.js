/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      din: ["DIN_Pro", "ui-sans-serif"],
    },
    extend: {
      backgroundImage: {
        "main-b-stadium": "url('/src/assets/a-stadium.jpg')",
        "pack-1": "url('/src/assets/packs/special_pack.png')",
        "opening-c": "url('/src/assets/concrete-bg.jpg')",
      },
    },
  },
  plugins: [],
};
