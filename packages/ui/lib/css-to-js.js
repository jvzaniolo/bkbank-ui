module.exports = function cssToJs(file) {
  const css = require('fs').readFileSync(
    require('path').resolve(__dirname, file),
    'utf8',
  );
  const root = require('postcss').parse(css);
  return require('postcss-js').objectify(root);
};
