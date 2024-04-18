

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        wavy: {
          "0%, 100%": {
            transform: "scaleY(0.5)",
          },
          "50%": {
            transform: "scaleY(1.5)",
          },
        },
      },
      animation: {
        wavy: "wavy 1s linear infinite",
      },
    },
  },
  plugins: [
    require("./plugins/openVarient"),
    require('./plugins/animationdelay'),
  ],
};
