/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],

  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "valentine",
      "aqua",
      "dracula",
      "autumn",
      "night",
    ],
  },
}

