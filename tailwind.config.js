/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'limeUno':'#E8EFEE',
        'limeDos':'#15393E',
        'rosaUno':'#E39EC3',
        'rosaDos':'#fdeaf2',


      },
    },
  },
  plugins: [],
}