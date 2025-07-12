/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        forest: {
          50: '#f7f8f7',
          100: '#e8ebe8',
          200: '#d1d7d1',
          300: '#adb8ad',
          400: '#829582',
          500: '#627762',
          600: '#4d5f4d',
          700: '#3f4d3f',
          800: '#354035',
          900: '#2d362d',
          950: '#1a1f1a',
        },
        slate: {
          850: '#1e293b',
          950: '#020617',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
