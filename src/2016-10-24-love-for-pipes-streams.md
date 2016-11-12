# With Love For Pipes, Streams, and Redirection

Pipes, Streams, `STDIN`, and `STDOUT` are all core parts of the standard
toolset on UNIX-like systems. They are the bedrock upon which we build other
tools, and they're surprisingly simple and comprehensible at their core.

---

## Exercise Prerequisites

* a \*nix-like shell
* some package management tool through which you can install `pandoc`
  (e.g. `brew install pandoc`)
* some package management tool through which you can install `bcat`[^1].

---

## The Exercise

For a simple example, grab the prerequisites and then let's take
the current directory's `README.md`, print it to a stream as HTML with `pandoc`,
and pipe that stream to a browser using the `bcat`[^2] tool:

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
   `STDIN` if you pipe it some input.[^3]
3. `bcat`, similarly, can read a file if you give it a file as an argument, but
   what we did here, as you may expect by now, is we just piped the previous output
   via `STDIN`.

---

## Exercise Reflection

Next time you have a complex job, consider looking beyond the toolchain that
you use to complete your tasks. Is it truly the best tool for the job?

Where does it hamper you? Where does it feel like overkill, or over-configuration?

You might be able to get by with something simpler, and potentially
(but, lol, certainly not necessarily) better.

Standard tools available in UNIX-like systems offer a high ceiling for mastery,
versatility and satisfaction, combined with, generally speaking, low requirements
for understanding once you get to a minimal baseline.[^4]

They're based on a simple philosophy and can be used in endlessly-flexible
combinations to create wonderful things.

---

## Further Reading:

- [Wikipedia, "Standard Streams"](https://en.wikipedia.org/wiki/Standard_streams)
- [Learning The Shell, "I/O Redirection"](http://linuxcommand.org/lc3_lts0070.php)

[^1]: bcat is traditionally a ruby gem (e.g. `gem install bcat`), but
      an alternative implementation is now available through npm
      (`npm install -g bcat`).

      Yes, pedant! Global installs with `npm install -g`
      are indeed frowned upon, but this is a reasonable thing to do
      if you can't get the ruby gem, which is entirely possible,
      because I didn't describe setting up a ruby version manager
      or how to install ruby gems if you don't bother with a version manager.

[^2]: `bcat` is a "pipe to browser utility." Manpage for `bcat` available here:
      [https://rtomayko.github.io/bcat/bcat.1.html](https://rtomayko.github.io/bcat/bcat.1.html)

[^3]: It can also read files passed to it as arguments, which would have read like
      `pandoc README.md | bcat`, which would have worked the same, but wouldn't
      have illustrated the power and composability of pipes so nicely.

[^4]: And once you get here, the surface area expands hugely and the distance
      to the horizon contracts, ever so infrequently expanding, always tending
      toward zero but never quite reaching it as you traverse the graph.
