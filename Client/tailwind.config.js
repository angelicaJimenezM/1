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
          'title': '#271874',
          'link': '#1A73E8',
          'secod': '#9D9D99',
          'modal': 'rgba(0, 0, 0, 0.5)',
          'Title-home': '#88908F',
          'signUp': '#B0DBD0',
          'input': '#F9FAFB',
          'Card': '#f5f5f5',
          'Line': '#583143',
          'NavBar': '#00F2FF',
          'Header':'#31B0A7'
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

