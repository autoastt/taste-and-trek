/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'darky1': '#222831',
      'darky2': '#393E46',
      'darky3': '#00ADB5',
      'darky4': '#EEEEEE',
    },
  },
  future : {
    hoverOnlyWhenSupported : true,
  },
  plugins: [],
})