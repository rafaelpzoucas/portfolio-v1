/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Ubuntu, sans-serif'
      },
      animation: {
        'pulse-slow': 'pulse 7s linear infinite',
      }
    },
  },
  plugins: [],
}
