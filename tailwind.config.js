
/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        slide: "slide 10s ",
      },
      keyframes: {
        slide: {
          'from': { transform: 'translateX(calc(100vw))' },
          'to': { transform: 'translateX(calc(-100%))' },
        }
      }
    },
  },
  plugins: [ ],
}

