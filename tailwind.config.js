/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FFFEF7',
        'warm-yellow': '#F5C84C',
        'soft-orange': '#F5944A',
        'natural-green': '#7BA05B',
        'dark-green': '#5A7A42',
        'egg-shell': '#FDF8E8',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
