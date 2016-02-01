# Simplicity: Syntax in Markup Templating

Five years ago I thought Haml[^1] was the coolest thing around.

When [Jade](jade-lang.com/) came out, I thought Jade was great too.
The core of my happiness around these two languages stems from the clever,
succinct syntax.

These languages abstract HTML into a higher level-syntax. The code looks "clean".
Cleanliness is great, but what's the cost here? Abstraction doesn't always lend
cleanliness.

---

I've moved on past Jade and Haml. These days I don't want any special syntax.

These days I just want file includes and normal code for a given language
alongside and inside of HTML-like strings.[^2]

---

## Tradeoffs of Succinct Syntax in Templating

Succinct syntax seems like a great win where writing HTML is a challenge,
but it seems like a great loss when I think about all of overhead related to
using that syntax instead of something that I already know and use more widely
(HTML syntax).

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

I still like Jade and Haml, and I feel very strongly that they deserve their
popularity[^3]. But I think they are popular in large part because people simply
don't want to write HTML.

This isn't bad in-and-of itself. But when projects get complex,
reading, authorship, and (perish the thought) debugging can be more challenging in
language-that-compiles-to-the-language-that-you're-ultimately-producing
than in the language that is your compile target.

## Features, Syntax, Artifacts, Thought Experiment, Parting Wisdom

I'm not anti-features. Features like iteration, includes, and arbitrary code
expression and evaluation in HTML are incredible.[^4] But why bother with a wholly
different syntax that must be understood alongside of the artifact that you're
trying to produce?

---

In the context of Jade and Haml, maybe you can imagine cases where you have a
complex, attribute-laden template with necessarily-deep HTML nesting. How many
levels deep of forced indentation are you willing to travel for your clean
syntax? And how "clean" is your syntax in this attribute-laden real-world
scenario?

Choose your tools wisely, choose your level of abstraction from your artifacts
carefully.


[^1]: [Haml](http://haml.info/) is the close cousin and predecessor of Jade. Jade's syntax is
      borrowed very liberally and explicitly from Haml.
[^2]: Self-closing tags would be incredible too.
[^3]: Jade is really popular and active [on GitHub](https://github.com/pugjs/jade)
      with over 10,000 stars.
[^4]: How ~~impossible~~ great would it be to have these features in HTML itself?
