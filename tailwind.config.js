/** @type {import('tailwindcss').Config} */
export default {
  // content: [
  //   "./index.html",
  //   "./src//*.{js,ts,jsx,tsx}"
  // ],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}" // ← correct path
  ],
  
  
  theme: {
    extend: {},
  },
  plugins: [],
}

