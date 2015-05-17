var fs = require('fs');
var spawnSync = require('child_process').spawnSync;
var marked= require('marked');

module.exports = function(file) {
  try {
    return marked(fs.readFileSync(file).toString())
  } catch (error) {
    return spawnSync('pandoc', ['--from=markdown', '--to=html', file + '.pandoc']).stdout;
  }
};
