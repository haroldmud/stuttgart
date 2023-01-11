/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width:{
        fit:"fit-content",
        '38':"38rem",
        '20r':'20rem',
        '15r':'15rem',
      },
      colors:{
        "bluebtn":"#004191",
        "bluebg":"#004393",
        "low-gray":"#333333",
      },
    },
  },
  plugins: [],
}
