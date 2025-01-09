/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        underline: {
          '0%': { transform: 'scaleX(0)', transformOrigin: 'bottom right' },
          '100%': { transform: 'scaleX(1)', transformOrigin: 'bottom left' },
        },
      },
      animation: {
        underline: 'underline 0.3s ease-out forwards',
      },
      letterSpacing: {
        wider: '4px',
      },
      fontSize: {
        'custom-base': '1rem',
      },
    },
    screens: {
      'xs': '480px',   // Extra small devices
      'sm': '640px',   // Small devices
      'md': '834px',   // Medium devices
      'lg': '1024px',  // Large devices
      'xl': '1280px',  // Extra large devices
      '2xl': '1920px', // 2x Extra large devices
    },
},
  plugins: [],
}

