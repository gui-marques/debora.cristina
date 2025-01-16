/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4a3728',
        secondary: '#b08968',
        background: '#f5e6d3',
        text: '#6b5d4f',
        accent1: '#e17b77',
        accent2: '#7fa998',
        accent3: '#deb986',
      },
    },
  },
  plugins: [],
};