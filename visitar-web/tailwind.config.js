/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Sansita", "sans-serif"],
        body: ["Lato", "sans-serif"],
      },
      colors: {
        pri: "#081F4D",
        sec: "#0083FF",
        gen: "#3B4D71",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-out forwards",
        fadeInDelay: "fadeIn 1s ease-out forwards 1s",
      },
    },
  },
  plugins: [],
};
