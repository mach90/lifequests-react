/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#131b2e",
        container: "#070a14",
        card: "#2c3c5c",
        variant1: "#5ec9f0",
        variant2: "#198d58",
      },
    },
  },
  plugins: [],
}