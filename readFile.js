var fs = require('fs');
var execSync = require('child_process').execSync;
var marked = require('marked');

module.exports = function(file, options) {
  if (options && options.raw) {
    return fs.readFileSync(file + '.html').toString();
  }

  if (process.env.NODE_ENV !== 'production') {
    try {
      fs.readFileSync(file);
      return execSync(
        `
          cat ${file} |
          node columnize.js |
          pandoc --from=markdown --to=html
        `
      );
    } catch(error) {
      console.log(error);
    }
  }

  return marked(fs.readFileSync(file + '.html').toString())
};
