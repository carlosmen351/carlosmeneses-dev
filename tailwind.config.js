/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': 'var(--color-text)',
        'background': 'var(--color-background)',
        'primary': 'var(--color-primary)',
        'secondary': 'var(--color-secondary)',
        'accent': 'var(--color-accent)',
      },
      borderColor: {
        'default': 'var(--color-border)',
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
        heading: ['Inter', 'sans-serif'],
        body: ['ui-sans-serif', 'system-ui', 'sans-serif'],
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
    typography,
  ],
}

