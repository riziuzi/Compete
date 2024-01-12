module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-custom-properties': {
      importFrom: './src/styles/colors.css', // path to your color variables
    },
  },
}
