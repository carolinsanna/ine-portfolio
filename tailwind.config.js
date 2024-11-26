/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes:{
        slideDown: {
          '0%': { opacity:0, transform: 'translateY(-10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        slideDown: 'slideDown 0.4s ease-out',
      },
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
      },
      fontSize: {
        'ine-heading-xl': ['4rem', {
          lineHeight: '140%',
          letterSpacing: '0em',
          fontWeight: '400'
        }],
        'ine-heading-lg': ['2.75rem',{
          lineHeight: '110%',
          letterSpacing: '0em',
          fontWeight: '700'
        }],
        'ine-heading-md': ['2rem',{
          lineHeight: '100%',
          letterSpacing: '0em',
          fontWeight: '400'
        }],
        'ine-heading-sm': ['1.5rem',{
          lineHeight: '140%',
          letterSpacing: '0em',
          fontWeight: '700',
        }],
        'ine-heading-xs': ['1.25rem',{
          lineHeight: '140%',
          letterSpacing: '0em',
          fontWeight: '500'
        }],
        'ine-text-lg': ['1.125rem', {
          lineHeight: '110%',
          letterSpacing: '0em',
          fontWeight: '400'
        }],
        'ine-text-md': ['1rem', {
          lineHeight: '140%',
          letterSpacing: '0em',
          fontWeight: '400'
        }],
        'ine-text-sm': ['0.875rem', {
          lineHeight: '140%',
          letterSpacing: '0em',
          fontWeight: '400'
        }],
        'ine-text-xs': ['0.75rem', {
          lineHeight: '150%',
          letterSpacing: '0em',
          fontWeight: '400'
        }],
        'ine-link-lg': ['1.25rem', {
          lineHeight: '140%',
          letterSpacing: '0.03125em',
          fontWeight: '500'
        }],
        'ine-link-md': ['1rem', {
          lineHeight: '100%',
          letterSpacing: '0.03125em',
          fontWeight: '500'
        }]
      }
    },
  },
  plugins: [],
}

