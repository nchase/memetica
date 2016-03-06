# Memetica: A Document Publisher

Memetica is a static site generator much like Jekyll. It is only focused on
taking a combination of markdown content and CSS. It gives users
a series of opportunities to transform that content in any way they wish,
then it presents that content wherever the user tells it to.

For the sake of simplicity, nearly everything here is connected through
standard POSIX-style [Streams](https://en.wikipedia.org/wiki/Standard_streams).

**Technologies used:** Node.js, standard UNIX scripting, CSS

For licenses, see [LICENSE.md](LICENSE.md)

---

## Why Memetica?

I originally built Memetica as a reaction to exposure to a complicated system
intended to let people build flexible columnar UIs centered around text.

I knew I could do better, so I started building a small, balanced, rule-driven
system, expressed in CSS, and filled it with different kinds of content. The
content drove the rules and the rules drove the content a bit further,
and so on.

The particular details for the styling and markdown parsing, mentioned below,
emerged out of me using the system to publish
[memetica.ahfr.org](https://memetica.ahfr.org).

---

## Styling

_As little as possible._ There are a handful of core notions here: headings,
columns, rulers, and most of the typographic constructs you see in print.

Styles are painted dynamically. By default, the style can be changed via
the sidebar.

By design, each style/theme is very small, measuring in hundreds of bytes.
**The average size of a style is ~500 bytes.** This keeps things fast.

---

## Markdown Parsing

The Markdown-handling responsibilities are mostly performed by
[Pandoc](https://github.com/jgm/pandoc), the most excellent Haskell library ever.
The very fast and complete JavaScript library
[marked](https://github.com/chjj/marked) handles Markdown in one place too.

The Markdown-handling could be uniformly Pandoc, pull requests very welcome.

Additionally, the architecture of the system allows for the possibility of entirely
different Markdown parsers to be used in different places for interesting results
or performance improvements.

---

## Additional Possibilities

You could publish a book and style it with CSS. This isn't unique to Memetica,
but I'm not going to stand here and tell you that you can't do it.

---

For testing, see [test/README.md](test/README.md).
