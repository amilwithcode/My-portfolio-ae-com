/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', 
    './src/components/**/*.{js,ts,jsx,tsx}', 
    './src/app/**/*.{js,ts,jsx,tsx}', 
  ],
  darkMode:'class',
  theme: {
    extend: {
      fontFamily: {
        permanent: ['"Permanent Marker"', 'cursive'],
      },
      colors: {
        aqua: '#0000',
      },
    }
  },
  plugins: [],
}
