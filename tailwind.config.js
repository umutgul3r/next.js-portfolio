module.exports = {
  mode: "jit",
  content: ["./pages/**/*.{html,js}", "./components/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        ff: "10px 10px 5px  rgba(0, 0, 0, 0.1)",
      },
      content: {
        check: 'url("../public/check.svg")',
        uncheck: 'url("../public/close.svg")',
      },
    },
  },
  plugins: [],
};
