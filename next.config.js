const path = require("path");
const withSass = require("@zeit/next-sass");

module.exports = withSass({
  cssModules: true,
});
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
