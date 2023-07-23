/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        watch: "url('../app/images/watch.webp')",
        home_down: "url('../app/images/home_down.jpg')",
      },
      colors: {
        calcl: "#4DCBF3",
        calcd: "#EB5671",
      },
    },
  },
  plugins: [],
};
