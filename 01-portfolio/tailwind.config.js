/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      screens: {
        lg: "1140px",
        xl: "1140px",
        "2xl": "1140px",
      },
    },
    extend: {
      colors: {
        "gega-red": "#BC1A45",
        "gega-melon": "#FFD369",
        "gega-grey": "#DDDDDD",
        "gega-white": "#F7F7F7",
      },
    },
  },
  plugins: [],
};
