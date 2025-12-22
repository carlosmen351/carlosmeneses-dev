/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': '#e8effb',
        'background': '#051023',
        'primary': '#8baced',
        'secondary': '#49158d',
        'accent': '#a535e0',
      },
      fontSize: {
        sm: '0.750rem',
        base: '1rem',
        xl: '1.333rem',
        '2xl': '1.777rem',
        '3xl': '2.369rem',
        '4xl': '3.158rem',
        '5xl': '4.210rem',
      },
      fontFamily: {
        heading: 'Gugi',
        body: 'Gugi',
      },
      fontWeight: {
        normal: '400',
        bold: '700',
      },
      keyframes: {
        'gradient-flow': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        }
      },
      animation: {
        'gradient-flow': 'gradient-flow 15s ease infinite',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

