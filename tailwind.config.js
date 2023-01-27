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
      boxShadow: {
        "3xl": "0 65px 90px -30px rgba(0, 0, 0, 1)",
      },
      backgroundImage: {
        "main-b-stadium": "url('/src/assets/b-stadium_1.png')",
        "pack-1": "url('/src/assets/packs/special_pack.png')",
        "opening-c": "url('/src/assets/concrete-bg.jpg')",
        "opening-1": "url('/src/assets/cz1.png')",
        "opening-2": "url('/src/assets/cz2.png')",
      },
      animation: {
        slidey: "movey 3s linear 1s",
        slideyb: "moveyb 3s linear infinite",
      },
      keyframes: {
        movey: {
          "0%": { transform: "translate(0px,0px)" },
          "50%": { transform: "translate(0px,600px)" },
          "100%": { transform: "translate(0px,1000px)" },
        },
        moveyb: {
          "0%": { transform: "translate(0px,0px)" },
          "50%": { transform: "translate(0px,-600px)" },
          "100%": { transform: "translate(0px,-1000px)" },
        },
      },
    },
  },
  plugins: [],
};
