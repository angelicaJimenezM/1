/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
        colors:{
          'home': '#9ED4C6',
          'btton': '#FF45A9',
          'title': '#271874'
      }
    },
  },
  plugins: [],
}

