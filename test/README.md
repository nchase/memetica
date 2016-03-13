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
