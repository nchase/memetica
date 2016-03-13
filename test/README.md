# Testing

In Memetica, run `npm run test` to execute the tests once or
`npm run test:watch` to run a simple test watcher.

## Philosophy

Since Memetica is just a bunch of scripts strung together by stdin/stdout,
the project's tests are written to exercise these individual scripts and ensure
that the scripts produce reasonably-correct output given some input.

Tests are written with [node-tap](https://github.com/tapjs/node-tap) so that
anyone can consume them according to [TAP](https://testanything.org/).

We can output with any of `node-tap`'s many reporters,
e.g. `npm run test -- --reporter=nyan`.

> ![nyan reporter](https://cloud.githubusercontent.com/assets/197309/13726939/8b7d1444-e8ab-11e5-9a45-f5fac79ca0f3.png)

## The First Test

The first reasonable thing I thought to test was document columnization.

I'll talk about it a bit. Here's the test in its entirety:

```js
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
```

So all that I'm doing here is taking the script that handles a thing that
Memetica actually does - Memetica does not actually do much. We run that script
with some simple input (defined in `test/column_document.md`) that should
produce somewhat different output (defined in `test/column_document_columnized.md`)
and assert that the two are equal.

Nothing about _how_ the work is done is assumed. This frees us to change the
implementation later, but the important business logic that is unique to Memetica
is crystallized here in the test. If we ever accidentally break this
important functionality, the test will fail and we will know immediately, which
will prevent us from going too far down a path that is harmful to the system.
