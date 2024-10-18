const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Noto Sans Arabic", "sans-serif"],
        aref: ["Aref Ruqaa", "serif"],
      },
      colors: {
        amenah_blue: "#013A88",
        amenah_mint: "#B8F2E6",
        amenah_pink: "#FF97B7",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
