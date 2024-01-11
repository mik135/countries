/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.jsx"
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito : "Nunito Sans, sans-serif"
      }
    },
    colors: {
      darkBlueDM: "hsl(209, 23%, 22%)",
      veryDarkBlueDM: "hsl(207, 26%, 17%)",
      veryDarkBlueLM: "hsl(200, 15%, 8%)",
      darkGrayLM: "hsl(0, 0%, 52%)",
      veryLightGrayLMBg: "hsl(0, 0%, 98%)",
      white: "hsl(0, 0%, 100%)"
    }
  },
  plugins: [],
}

