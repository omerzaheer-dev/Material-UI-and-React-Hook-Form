/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  important: '#root',
  theme: {
    extend: {},
    fontFamily:{
      OpenSans: ['Open Sans', 'sans-serif'],
      Oswald: ['Oswald', 'sans-serif'],
      Matemasie: ['Matemasie', 'sans-serif'],
      Mali: ['Mali', 'cursive'],
    }
  },
  corePlugins: {
    // Remove the Tailwind CSS preflight styles so it can use Material UI's preflight instead (CssBaseline).
    preflight: false,
  },
  plugins: [],
}