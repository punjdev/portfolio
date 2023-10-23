/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{jsx, js}'], // any sub-folder, containing files ending in the jsx or js extension
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['inter', 'serif']
      }
    },
  },
  plugins: [],
}

