/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        darkNavy: '#0a0a20',
        almostBlack: '#1a1a3e',
        electricBlue: '#3b82f6',
        gradientStart: '#1e3a8a',
        gradientEnd: '#3b82f6',
        cardBackground: 'rgba(10, 10, 32, 0.7)',
      },
    },
  },
  plugins: [],
}