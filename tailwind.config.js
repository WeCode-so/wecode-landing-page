module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        mono: ["DM Mono", "monospace"],
      },
      colors: {
        wgreen: "#00FF66",
        wpurple: "#5A32E9",
        wpurpledarker: "#3D15CB",
        wred: "#ED3232",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
