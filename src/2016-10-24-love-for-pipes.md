# With Love For Pipes

Pipes, Streams, `STDIN`, and `STDOUT` are all part of the standard UNIX-like
toolset and they're 100% worth your time to learn.

---

For a simple example, let's take the current directory's `README.md`,
print it to a stream as HTML, and pipe that stream to a browser using
the [`bcat`](https://rtomayko.github.io/bcat/)[^1] tool:

```
cat README.md | pandoc | bcat
```

There are other ways to do this, but I picked this one because it
uses pipes effectively. The pipe characters (`|`) are sending the output
from the previous command to the next command as input.

Let's break this down a bit more:

1. `cat` prints whatever file you give it as an argument to the standard output
    stream, otherwise known as `STDOUT` or "standard out".
2. `pandoc`, the general-purpose text/markup format converter, can read from
   `STDIN` if you pipe it some input.[^2]
3. `bcat`, similarly, can read a file if you give it a file as an argument, but
   what we did here, as you may expect by now, is we just piped the previous output
   via `STDIN`.

---

Next time you have a complex job, consider looking beyond the toolchain that
you might have subscribed to to complete your tasks.

You might be able to get by with something simpler, and potentially
(but not necessarily) better.

Standard tools available in UNIX-like systems offer a high ceiling for mastery
with, generally speaking, low requirements for understanding once you get to a
baseline. They're based on a simple philosophy and can be used in endlessly
flexible combinations to create wonderful things.


[^1]: Manpage for `bcat` available here:
      [https://rtomayko.github.io/bcat/bcat.1.html](https://rtomayko.github.io/bcat/bcat.1.html)
[^2]: It can also read files passed to it as arguments, which would have read like
      `pandoc README.md | bcat`, which would have worked the same, but wouldn't
      have illustrated the power and composability of pipes so nicely.
