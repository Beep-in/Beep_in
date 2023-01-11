/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'karla': ['"karla"', 'sans-serif'],
        'inter': ['"inter"', 'sans-serif'],
      },
      backgroundColor: {
        'transBlue' : 'rgba(76, 175, 80, 0.05)'
      }
    },
  },
  plugins: [],
}