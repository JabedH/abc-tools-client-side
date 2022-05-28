module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        priceColor: "#BB6845",
        headerColor: "#FDBC03",
        bgYlow: "#FDDE31",
        redText: "#F6621B",
      },
    },
  },
  plugins: [require("daisyui")],
};
