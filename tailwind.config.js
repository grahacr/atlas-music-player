/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkPink: '#be1862',
        dark: '#500727',
        medium: '#ec4891',
        lightpink: '#f9a8cc',
        light: "#fdf2f7",
      }
    },
  },
  plugins: [],
}

