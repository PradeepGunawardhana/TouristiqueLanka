/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        volkhov: ["Volkhov, serif"],
        montserrat: [" Montserrat, sans-serif"],
      },
    },
  },
  plugins: [],
};
