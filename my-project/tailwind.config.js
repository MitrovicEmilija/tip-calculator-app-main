/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: '#2cbaa7',  // strong cyan
        secondary: '#00494d', // very dark cyan
        tertiary: '#7f9c9f', // grayish cyan
        'light-grayish-cyan': '#c5e4e7',
        'very-light-grayish-cyan': '#f4fafa',
      }
    },
  },
  screens: {
    xs: "375px",
    xl: "1440px"
  },
  plugins: [],
}

