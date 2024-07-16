/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors:{
         PrimeryColor: "#219ebc",
         SecondColor: "white",
         thirdColor: "#023047"
      }
    },
  },
  plugins: [],
}

