# Simplicity: EJS vs Templating Languages

Five years ago I thought [Haml](http://haml.info/)[^1] was the coolest thing around.
When [Jade](jade-lang.com/) came out, because I knew Haml, I thought it was great.
The root of my happiness about these two stems from the clever succinct syntax -
way less text to write and keep track of than HTML.

I no longer think that templating languages that have succinct syntax are useful.
In fact, I don't want any special syntax. I want something-like-HTML that gives
me the ability to write code expressions and logic and include other files inside
of HTML-like strings.

---

## Tradeoffs of Succinct Syntax in Templating

Succinct syntax seems like a great win where writing HTML is a challenge,
but it seems like a great loss when I think about all of overhead related to
using that syntax instead of something that I already know and use more widely.

There's a significant learning overhead incurred when teaching or learning a
templating language. This same overhead applies to scenarios where you have to
build complex markup in the templating language. Instead of thinking about how to
write the HTML, you spend time thinking about that and then thinking about how to
write the templating language that is going to produce the HTML that you want.

This overhead may be small or non-existent for simple markup structures, but
the simple cases are never the problem. And sometimes you _do_ need complex markup
to achieve certain layouts or maybe to present information in a way that a machine
can read it easily.

Additionally (though rarely), what about the scenario where your markup needs
are poorly-supported by the templating language? Will someone else be able to
read the templating language that you wrote as easily as they could potentially
read the HTML by itself?

---

I still like Jade and Haml, but I think they are popular[^2] because people don't want
to write HTML. This isn't bad in-and-of itself. But when projects get complex,
reading, authorship, and, perish the thought, debugging, can be more
challenging in a templating language than in HTML (or something similar to it).

I'm not anti-features. I want great features, but I've found that there aren't
many features that I need when trying to produce HTML. Features like iteration,
includes, and arbitrary code expression and evaluation in HTML is incredible.
But why bother with a wholly different syntax that must be understood alongside
of the artifact that you're trying to produce?

Choose your tools wisely.


[^1]: Haml is the close cousin and predecessor of Jade. Jade's syntax is
      borrowed from HAML.
[^2]: Jade is really popular and active [on GitHub](https://github.com/pugjs/jade),
      with over 10,000 stars. I think this is really awesome, honestly.
