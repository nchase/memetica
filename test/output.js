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

tap.test('produces basic published pages', function(t) {
  var publisher = exec('babel-node ejs-cli.js test/publishable.md', function(error, stdout, stderr) {
    t.equal(stdout,
      fs.readFileSync('test/publishable_published.md.html', {
        encoding: 'utf8'
      })
    );
    t.done();
  });
});

// we can just grep the output for the line(s) that we want here:
tap.test('for published pages, re-writes markdown links to point to html files');

tap.test('produces a correct-looking table of contents');