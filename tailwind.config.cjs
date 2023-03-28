/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'p-orange': 'hsl(26, 100%, 55%)',
        'p-paleorange' : 'hsl(25, 100%, 94%)',
        'n-Verydarkblue': 'hsl(220, 13%, 13%)',
        'n-Darkgrayishblue': 'hsl(219, 9%, 45%)',
        'n-Grayishblue': 'hsl(220, 14%, 75%)',
        'n-Lightgrayishblue': 'hsl(223, 64%, 98%)',

      },
      fontFamily:{
        'custom': 'Kumbh Sans'
      }
    },
  },
  plugins: [],
}
