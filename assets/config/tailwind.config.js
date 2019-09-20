const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    fontFamily: {
      header: ['sans-serif']
      body: ['sans-serif']
    },

    screens: {
      xs: "375px",
      ...defaultTheme.screens
    },

    colors: {
      transparent: "transparent",
      primary: "",
      secondary: "",
      active: ""
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
      "50": "50%"
    },
    customForms: theme => ({
      default: {
        'input, textarea, multiselect, select, checkbox, radio': {
          borderColor: theme('colors.yellow-light'),
          outline: theme("outline"),
          '&:focus': {
            boxShadow: theme("boxShadow.outline")
          }
        },
        'input, textarea, multiselect, select': {
          fontFamily: theme('fontFamily.body').join(', '),
          color: theme('colors.black'),
          backgroundColor: theme('colors.white'),
          padding: `${theme('spacing.3')} ${theme('spacing.4')}`,
          width: theme("width.full"),
          borderRadius: theme("borderRadius.none"),
          '&:focus': {
            borderColor: theme('colors.yellow')
          }
        },
        'checkbox, radio': {
          '&:checked': {
            backgroundColor: theme("backgroundColor.yellow")
          }
        }
      },
    }),

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
        "100": "51rem", //816
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%'
      },
      inset: {
        "50": "50%",
        '100': "100%"
      },
      zIndex: {
        '-1': '-1'
      }
    }
  },

  variants: ['responsive', 'hover', 'focus', 'group-hover', 'last'],
  plugins: [
    require("@tailwindcss/custom-forms"),
    require("tailwindcss-transitions")(),
    require("tailwindcss-transforms")()
  ]
};
