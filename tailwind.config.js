/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {

      colors: {
        colorBlackFirst: '#000000',
        colorBlackSecond: '#303030',
        colorWhiteCommon: '#FFFFFF',
        colorGrey: '#999999'
      },
      fontFamily: {
        custom: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}

