// css superpower
// https://www.rucksackcss.org/docs/#usage
const rucksack = require("rucksack-css");
const autoprefixer = require("autoprefixer");

module.exports = {
  plugins: [rucksack(), autoprefixer()]
};
