/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        caret: {
          "0%, 100%" : { opacity: '1'},
          "50%" : { opacity: "0"},
        }
      },
      animation: {
        caret: 'caret 0.8s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}