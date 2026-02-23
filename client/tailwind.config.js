/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // scan all source files
  ],
  theme: {
    extend: {},
    screens: {
      xs: "480px", // new extra small
      sm: "640px", // default
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px", // custom extra large
    },
  },
  plugins: [],
};
