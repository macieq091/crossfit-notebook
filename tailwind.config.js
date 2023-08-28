/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Permanent Marker' : ['Permanent Marker', 'sans-serif']
        
      },
    },
  },
  plugins: [
    require('@mertasan/tailwindcss-variables')
  ],
}