/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        galaxy: "url('/background-galaxy.png')",
        "nlw-gradient": "linear-gradient(to right, #9572FC, #43E7AD, #E1D55D)",
        "shade-in-y": "linear-gradient(transparent, #000000 90%)",
      },
    },
  },
  plugins: [],
};
