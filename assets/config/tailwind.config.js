const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    fontFamily: {
      body: ["Open Sans", "sans-serif"]
    },

    screens: {
      xs: "374px",
      ...defaultTheme.screens
    },

    colors: {
      transparent: "transparent"
    },

    container: {
      center: true,
      padding: "1rem"
    },

    transitionProperty: {
      all: "all",
      color: "color",
      bg: "background-color",
      colors: ["color", "background-color", "border-color"],
      opacity: "opacity",
      transform: "transform"
    },
    transitionDuration: {
      default: "300ms"
    },

    translate: {
      "1/2": "50%"
    },

    extend: {
      spacing: {
        "16": "3.5rem",
        "18": "4rem", //64
        "22": "5rem", //80
        "28": "7rem", //112
        "52": "13rem", //208
        "56": "14rem", //224
        "60": "16rem", //256
        "64": "17rem", //272
        "68": "19rem", //304
        "70": "21rem", //336
        "72": "26rem", //414
        "76": "27rem", //432
        "80": "31rem", //496
        "82": "32rem", //512
        "86": "33rem", //544
        "88": "35rem", //560
        "92": "36rem", //576
        "96": "40rem", //640
        "100": "51rem" //816
      },
      inset: {
        "50": "50%"
      }
    }
  },

  variants: {},
  plugins: [
    require("@tailwindcss/custom-forms"),
    require("tailwindcss-transitions")(),
    require("tailwindcss-transforms")()
  ]
};
