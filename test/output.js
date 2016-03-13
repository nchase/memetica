var tap = require('tap');
var exec = require('child_process').exec;
var fs = require('fs');

tap.test('produces reasonably well-formed column elements from `|||` in input', function(t) {
  var columnize = exec('cat test/column_document.md | node columnize.js', function(error, stdout, stderr) {
    t.equal(
      stdout,
      fs.readFileSync('test/column_content_columnized.md', {
        encoding: 'utf8'
      })
    );
    t.done();
  });
});
