/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // screens: {
    //   'xs': '479px',
    // },
    extend: {
      colors: {
        'primary': '#2B8872',
        'light-gray': '#E8E8E8',
        'extra-light': '#FEFEFE',
        'dark-black': '#27292D',
        'light-black': '#505258',
        'white': '#FEFEFE',
        'brand-black': '#33363F',
        'gray': '#E8E8E8',
        'green': '#2B8872',
        'primary-hover': '#4EA28E',
        'light-green': '#03DF84',
        'gray-dark': '#B3B3B3',
        'gray-bg': '#FAFAFA',
        // 'gray-bg': 'red',
      },
      fontFamily: {
        dmsans: ['DM Sans', 'sans-serif'], 
        display: 'Monument Extended',
      },
      fontSize: {
        '2md': '18px',
        "3xl":"32px"
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #02634C 15.86%, #02DE83 62.42%)',
      },
      screens: {
        'lg': '1279px',
        'sm': '766px',
        'xs': '479px',
      },
    },
  },
  plugins: [],
}