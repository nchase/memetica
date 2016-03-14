# Testing Memetica

In Memetica, run `npm run test` to execute the tests once or
`npm run test:watch` to run a simple test watcher.

---

## Philosophy

Since Memetica is just a bunch of scripts strung together by stdin/stdout,
the project's tests are written to exercise these individual scripts and ensure
that the scripts produce reasonably-correct output given some input.

Tests are written with [node-tap](https://github.com/tapjs/node-tap) so that
anyone can consume them according to [TAP](https://testanything.org/).

We can output with any of `node-tap`'s many reporters,
e.g. `npm run test -- --reporter=nyan`.

> ![pictured: the venerable nyan reporter](https://cloud.githubusercontent.com/assets/197309/13726939/8b7d1444-e8ab-11e5-9a45-f5fac79ca0f3.png)

---

## The First Test

The first reasonable thing I thought to test was document columnization.

I'll talk about it a bit. Here's the test in its entirety:

```js
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
```

So all that I'm doing here is taking the script that handles a thing that
Memetica actually does.[^1] We run that script with simple input[^2] that should
transform into different output[^3] and assert that the results of the script
are the same as our expected output.

---

## Benefits

Nothing about _how_ the work is done is assumed. This frees us to change the
implementation later, but the important business logic that is unique to Memetica
is crystallized here in the test, potentially forever (or at least however long
it is useful).

If we ever accidentally break this important functionality, the test will fail.
We will know immediately, which will prevent us from going too far down a path
that is harmful to the system.

These benefits aren't actually unique to Memetica, but it's easy to forget that
_this is why we write unit tests_.

[^1]: Memetica does not actually do much, and we like it that way.
[^2]: Defined in [`test/column_document.md`](test/column_document.md).
[^3]: Defined in [`test/column_content_columnized.md`](test/column_content_columnized.md).
