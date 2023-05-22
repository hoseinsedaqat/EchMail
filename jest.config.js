module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  // the error is the unexpected token from vue material design happend and fix it with this line of code
  transformIgnorePatterns: [
    "node_modules/(?!vue-material-design-icons)"
  ],
}
