const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const postcssJs = require('postcss-js');

function objectify(filePath) {
  const css = fs.readFileSync(path.resolve(__dirname, filePath), 'utf8');
  const root = postcss.parse(css);
  return postcssJs.objectify(root);
}

const files = fs.readdirSync(path.resolve(__dirname, '../lib'));

const jsFiles = files
  .filter((file) => file.endsWith('.css'))
  .map((file) => ({
    name: file.concat('.js'),
    content: objectify(`../lib/${file}`),
  }));

jsFiles.forEach((file) =>
  fs.writeFileSync(
    path.resolve(__dirname, `../lib/${file.name}`),
    `module.exports = ${JSON.stringify(file.content, null, 2)}`,
  ),
);
