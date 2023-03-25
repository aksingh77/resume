/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "1rem",
        xl: "2rem",
        "2xl": "3rem",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1170px",
      "2xl": "1440px",
    },
    extend: {
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
        secondary: ["Roboto", "sans-serif"],
        tertiary: ["Roboto Mono", "monospace"],
      },
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        darkColor: "var(--dark-color)",
        mainTextColor: "var(--primary-text-color)",
        buttonColor: "var(--button-color)",
        goldenColor: "var(--golden-color)",
      },
    },
  },
  plugins: [require("daisyui")],
};
