/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize:{
      
    },
    extend: {
      colors: {
        ine: {
          gray: {
            100: '#e6e6e6',
            300: '#b4b4b4',
            500: '#8c8c8c',
            700: '#464646',
            900: '#282828'
          }
        }
      }
    },
  },
  plugins: [],
}

