module.exports = {
  prefix: "",
  purge: {
    enabled: true,
    content: ["./src/**/*.{html,ts}"],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        celeste: "#66bbe0",
      },
      height: {
        '100vh':'100vh'
      },
      backgroundImage: {
        'main-banner': "url('assets/banner-principal.png')"
      },
      backgroundSize: {
        '100': '100%'
      },
      animation: {
        "from-below": "fromBelow 1s linear",
      },
      keyframes: {
        fromBelow: {
          "0%": { transform: "translateY(0%)" },
          "50%": { transform: "translateY(200%)" },
          "100%": { transform: "translateY(0%)" },
        },
      },
    },
  },
  variants: {
    animation: ["responsive", "hover", "group-hover"],
    animate: ["responsive", "hover", "group-hover"],
    fontSize: ["responsive", "hover", "group-hover"],
    height: ["responsive", "hover", "group-hover"],
    transform: ["responsive", "hover", "group-hover"],
    translate: ["responsive", "hover", "group-hover"],
    scale: ["responsive", "hover", "group-hover"],
  },
};
