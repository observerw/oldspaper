module.exports = {
  content: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
}
