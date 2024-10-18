/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lime-E8EFEE': '#E8EFEE',
        'lime-dark':'#15393E',
      },
    },
  },
  plugins: [],
}