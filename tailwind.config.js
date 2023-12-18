/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}", "./src/**/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: { 
      colors:{
        primary:"#9437fe" ,
        secondary:"#9b4cf5"
      }
    },
  },
  plugins: [],
}


