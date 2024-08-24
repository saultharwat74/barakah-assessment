/** @type {import('tailwindcss').Config} */
const { colors } = require("./colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors,
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
