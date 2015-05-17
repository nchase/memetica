var fs = require('fs');
var spawnSync = require('child_process').spawnSync;
var marked = require('marked');

module.exports = function(file) {
  if (process.env.NODE_ENV !== 'production') {
    return spawnSync('pandoc', ['--from=markdown', '--to=html', file + '.pandoc']).stdout;
  }

  return marked(fs.readFileSync(file).toString())
};
