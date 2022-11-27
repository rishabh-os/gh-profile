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
        sora: ["Sora", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        Rampart: ["Rampart One", "cursive"],
        rubrik: ['"Rubik Moonrocks"', "cursive"],
        Ballet: ["Ballet", "cursive"],
        Herr: ["Herr Von Muellerhoff", "cursive"],
        Ms: ["Ms Madi", "cursive"],
        Pinyon: ["Pinyon Script", "cursive"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
