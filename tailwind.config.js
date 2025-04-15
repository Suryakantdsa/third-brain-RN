/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        'sora-bold': ['Sora-Bold'],
        'sora-extrabold': ['Sora-ExtraBold'],
        'sora-thin': ['Sora-Thin'],
        'sora-semibold': ['Sora-SemiBold'],
        'sora-regular': ['Sora-Regular'],
        'sora-light': ['Sora-Light'],
        'sora-extralight': ['Sora-ExtraLight'],
      },
      colors: {
        primary: '#e0e265',
        primarymain: '#EB16D6',
        secondary: '#8959C3',
        tertiary: '#CF3239',
        background: '#c9cdc8',
      },
    },
  },
  plugins: [],
};
