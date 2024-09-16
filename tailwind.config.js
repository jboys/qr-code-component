/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
      },
      colors: {
        slate: {
          300: "#d5e1ef",
          500: "#68778d",
          900: "#1f314f",
        },
      }
    }
  },
  plugins: [],
}