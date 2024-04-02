/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      height: {
        fullscreen: 'calc(100dvh - 65px)'
      },
      minHeight: {
        fullscreen: 'calc(100dvh - 65px)'
      },
      keyframes: {
        appear: {
          '0%': { opacity: 0 },
          '50%': { opacity: 0 },
          '100%': { opacity: 1 },
        }
      },
      animation: {
        'pulse-fast': 'pulse 1s ease-in-out infinite',
        'appear': 'appear 2s linear forwards'
      },
      colors: {
        'main': '#CB0E21',
        'golden': '#FABC05',
        'primary': '#0d2a4b',
        'secondary': '#76CEDB',
        'light': 'rgba(60, 60, 60, 0.12)',
        'lighter': 'rgba(255, 255, 255, 0.5)',
      },
    },
  },
  plugins: [],
}
