module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,md,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,md,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "sidebar-selected-primary-light": "#060607",
        "sidebar-selected-tertiary-light": "#D4D7DC",
        "sidebar-icon-primary-light": "#747f8d",
        "sidebar-tertiary-light": "#f2f3f5",
        "sidebar-tertiary-dark": "#2e3136",

        "theme-light-sidebar": "#f2f3f5",
        "theme-light-sidebar-text": "#6a7480",
        "theme-light-sidebar-hover": "#D4D7DC",
        "theme-light-sidebar-hover-text": "#060607",

        "theme-dark-sidebar": "#2e3136",
      },
      
      // TODO: Change these out for whatever legitimate font family names discord uses,
      // just here to visualise what itd look like with them rn
      fontFamily: {
        "whitney": ["Whitney Medium", "sans-serif"],
        "whitney-bold": ["Whitney Semibold Regular", "sans-serif"],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};