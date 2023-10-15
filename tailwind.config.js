module.exports = {
  content: ["./*.html", "./assets/**/*.js"],

  theme: {
    screens: {
      sm: "540px",
      // => @media (min-width: 576px) { ... }

      md: "720px",
      // => @media (min-width: 768px) { ... }

      lg: "960px",
      // => @media (min-width: 992px) { ... }

      xl: "1140px",
      // => @media (min-width: 1200px) { ... }

      xxl: "1320px",
      // => @media (min-width: 1400px) { ... }
      xxxl: "1536px",
      // => @media (min-width: 1400px) { ... }
      gxl: "1920px",
      // => @media (min-width: 1400px) { ... }
    },
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
      Montserrat: ["Montserrat", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
    },
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        black: "#212b36",
        dark: "#090E34",
        "dark-700": "#090e34b3",
        primary: "#5877ad",
        secondary: "#5877ad",
        "body-color": "#637381",
        warning: "#FBBF24",
        orang: "#f97e16",
      },
      boxShadow: {
        input: "0px 7px 20px rgba(0, 0, 0, 0.03)",
        pricing: "0px 39px 23px -27px rgba(0, 0, 0, 0.04)",
        "switch-1": "0px 0px 5px rgba(0, 0, 0, 0.15)",
        testimonial: "0px 60px 120px -20px #EBEFFD",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
