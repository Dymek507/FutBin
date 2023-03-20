/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".flex-center": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    ".wh-full": {
      width: "100%",
      height: "100%",
    },
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      din: ["DIN_Pro", "ui-sans-serif"],
    },
    extend: {
      animation: {
        slidey: "movey 3s linear 1s",
        slideyb: "moveyb 3s linear infinite",
      },
      boxShadow: {
        "3xl": "0 65px 90px -30px rgba(0, 0, 0, 1)",
      },
      backgroundImage: {
        "main-b-stadium": "url('/src/assets/b-stadium_1.webp')",
        "opening-c": "url('/src/assets/concrete-bg.jpg')",
        "walkout-fr-l": "url('/src/assets/opening/walkout_frame_left.png')",
        "walkout-fr-r": "url('/src/assets/opening/walkout_frame_right.png')",
        "walkout-bg-1": "url('/src/assets/opening/walkout-bg-1.png')",
        "walkout-bg-2": "url('/src/assets/opening/walkout-bg-2.png')",
        "opening-1": "url('/src/assets/cz1.png')",
        "opening-2": "url('/src/assets/cz2.png')",
        "squad-field": "url('/src/assets/field-1.svg')",
        "blank-card": "url('/src/assets/blank-card.webp')",
      },
      colors: {
        "primary-main": "rgba(12,52,86,0.85)",
        "secondary-main": "#f50057",
        main: "#0c3456",
      },
      flex: {
        2: "2 2 0%",
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
      screens: {
        xs: "420px",
        sm: "640px",
        md: "900px",
        lg: "1200px",
        xl: "1536px",
      },
    },
  },
  plugins: [Myclass],
};
