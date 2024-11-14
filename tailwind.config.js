/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ine: {
          gray: {
            100: '#b3b3b3',
            200: '#e5e5e5',
            300: '#5a5a5a',
            400: '#919191',
            500: '#757575'
          },
          black:{
            100: '#21272a',
            200: '#1e1e1e'
          }
        }

      }
    },
  },
  plugins: [],
}

