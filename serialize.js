var execSync = require('child_process').execSync;

module.exports = function(document) {
  return execSync(
    `
      pandoc --from=html --to=markdown-implicit_figures --atx-headers |
      node decolumnize.js
    `
  , {
    input: document
  }).toString();
}

