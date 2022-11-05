/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#EAECF0",
        "text-light": "#667085",
        "text-gray-600": "#475467",
        "text-gray-700": "#344054",
        "text-red-500": "#F83F23",
        border: "#D0D5DD",
        button: "#1570EF",
        "button-disabled": "#B2DDFF",
      }
    },
  },
  plugins: [require("@tailwindcss/forms")],
};