module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        victormono: ["Victor Mono", "monospace"],
        manrope: ["Manrope", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        pinyon: ["Pinyon Script", "cursive"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
