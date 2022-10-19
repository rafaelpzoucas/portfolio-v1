/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Ubuntu, sans-serif'
      },
      animation: {
        'pulse-slow': 'pulse 5s linear infinite',
        'gradient': 'gradient 3s infinite cubic-bezier(.62, .28, .23, .99) both',
        'gradient-slow': 'gradient 6s infinite cubic-bezier(.62, .28, .23, .99) both',
        'bounce-slow': 'bounce 2s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%': { 
            'background-position': '0% 50%' 
          },
          '50%': { 
            'background-position': '100% 50%' 
          },
          '100%': { 
            'background-position': '0% 50%' 
          },
        },
        hello: {
          '0%': { 
            'transform': 'rotate(0deg)',
            'transform-origin': 'bottom right'
          },
          '15%': { 
            'font-size': '1.625rem',
            'transform': 'rotate(-15deg)', 
            'transform-origin': 'bottom right'
          },
          '30%': { 
            'font-size': '1.625rem',
            'transform': 'rotate(15deg)',  
            'transform-origin': 'bottom right'
          },
          '45%': { 
            'font-size': '1.625rem',
            'transform': 'rotate(-15deg)', 
            'transform-origin': 'bottom right'
          },
          '60%': { 
            'font-size': '1.625rem',
            'transform': 'rotate(15deg)', 
            'transform-origin': 'bottom right'
          },
          '75%': { 
            'font-size': '1.625rem',
            'transform': 'rotate(-15deg)', 
            'transform-origin': 'bottom right'
          },
          '100%': { 
            'transform': 'rotate(0deg)', 
            'transform-origin': 'bottom right'
          },
        },
      }
    },
  },
  plugins: [],
}
