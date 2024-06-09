/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,js}"];
export const theme = {
  extend: {
    backgroundImage:{
      'signup-cover': "url('/src/assets/Cover.jpg')",
      'down-arrow': "url('/src/assets/chevron-down.svg')",
      'maintanance': "url('/src/assets/Big Circles.svg')",
      'Dashboard': "url('https://images.alphacoders.com/211/211253.jpg')",
    },
    colors: {
      'primary': '#222738',
      'secondary': '#043BFF'
    },
    fontSize: {
      '3xl': '3rem',
      '6xl': '6rem',
      '4xl': '4rem',
    }
  },
};
export const plugins = [];

