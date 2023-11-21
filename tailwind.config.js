/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    screens: {
      'xs':'340px',
      'sm': '640px',
      'lg': '1024px',
        'max': {'max': '1840px'},
        'max2':{'max':'1400px'},
        'max3':{'max':'1000px'},
        'max4':{'max':'800px'},
        'max5':{'max':'700px'},
        'max600':{'max':'600px'},
        'max6':{'max':'450px'},
        'max7':{'max':'400px'},
    }
  },
  plugins: [],
}