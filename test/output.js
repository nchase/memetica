var tap = require('tap');
var exec = require('child_process').exec;
var fs = require('fs');

tap.test('produces reasonably well-formed column elements from `|||` in input', function(t) {
  var command = 'cat test/column_document.md | node columnize.js';
  var expectedOutput = fs.readFileSync('test/column_content_columnized.md', {
    encoding: 'utf8'
  });

  exec(command, function(error, stdout, stderr) {
    t.equal(stdout, expectedOutput);
    t.done();
  });
});

tap.test('produces basic published pages', function(t) {
  var command = 'node ejs-cli.js test/publishable.md';
  var expectedOutput = fs.readFileSync('test/publishable_published.md.html', {
    encoding: 'utf8'
  });

  exec(command, function(error, stdout, stderr) {
    t.equal(stdout, expectedOutput);
    t.done();
  });
});

tap.test('adds code-highlighting script when it detects code', function(t) {
  t.plan(2);

  var noCodeCommand = 'node ejs-cli.js test/publishable.md';
  exec(noCodeCommand, function(error, stdout, stderr) {
    t.notMatch(stdout, 'highlight.min.js');
  });

  var codeCommand = 'node ejs-cli.js test/publishable-code.md';
  exec(codeCommand, function(error, stdout, stderr) {
    t.match(stdout, 'highlight.min.js');
  });
});

// we can just grep the output for the line(s) that we want here:
tap.test('for published pages, re-writes markdown links to point to html files');

tap.test('produces a correct-looking table of contents');
