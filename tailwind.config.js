/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        desktopDay: "url('./src/assets/desktop/bg-image-daytime.jpg')",
        desktopNight: "url('./src/assets/desktop/bg-image-nighttime.jpg')",
        tabletDay: "url('./src/assets/tablet/bg-image-daytime.jpg')",
        tabletNight: "url('./src/assets/tablet/bg-image-nighttime.jpg')",
        mobileDay: "url('./src/assets/mobile/bg-image-daytime.jpg')",
        mobileNight: "url('./src/assets/mobile/bg-image-nighttime.jpg')",
      },
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

