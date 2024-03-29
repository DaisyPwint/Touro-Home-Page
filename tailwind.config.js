/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      sans: ['Poppins', 'sans-serif']
    },
    extend: {
      colors:{
        primary: '#fb923c',
      }
    },
  },
  plugins: [],
}

