module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {fontFamily: {
      'victormono': ['Victor Mono', 'monospace'],
      'sora': ['Sora', 'sans-serif'],
      'manrope':['Manrope', 'sans-serif'],
      'inter':['Inter', 'sans-serif']
    }},
  },
  plugins: [require("@tailwindcss/typography"),
            require('@tailwindcss/forms'),
          ],
};
