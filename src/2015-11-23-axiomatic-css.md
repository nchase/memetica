# Axiomatic CSS

## Axiomatic CSS is real and CSS doesn't have to be a nightmare.

Get over your CSS hatred and embrace the CSS Layout Engine.

---

First I want to introduce the concept of a _practicable notion_. This is a human behavior.
Example: _"If I want food, and I prepare food, I will have satisfied my desire to have food."_

Practicable notions are particularly useful in systems that can be reasoned about.
The level of granularity at which we approach these notions determines the outcome.
Good software engineering design, largely, emerges out of building logical systems
from smaller groupings of these notions.

---

I often see people writing CSS without a strong understanding of the system or an
expectation that it should be like the other software-building systems that we have.

It would be great if the web had a layout engine that wasn't CSS.  But right
now it doesn't. And what we can achieve with CSS is actually pretty amazing.

---

If you don't like what we can achieve with CSS, you're probably either
at the wrong job, haven't written CSS long enough, or piles of terrible CSS
have been heaped on you to the tune of psychological damage and violent-crime
victim-like hostility to the engine or writing some of the configuration for
the layout.

CSS is just configuration for the CSS Layout Engine.

---

## CSS As Configuration

When you think of CSS as Configuration hopefully it breaks your mind out of
"PSD Thinking" and toward _systems thinking_. I think the difference is that
PSD-Think is overly concerned with matching the PSD to the tune of expressing
every little detail as configuration right there within as small a region as
the author of the code can see.

_Systems thinking_ with CSS is about drawing
out some of the rules of the system and collecting them at the appropriate level
so that every little detail of the system can be expressed in a way that only
puts the code [yeah, the configuration] at the level where it must exist.

It's about finding the rules of the system. When you can find the system rules
and express them as code, you get systems. When you don't find the rules, or
don't express them in code, you get a mess.

All too often I see developers writing CSS where every line is an exception
because there are no rules. This is a mess, and I think it leads to grand mass
aversion, only founded insofar as it has never been remediated.

---

## Axiomatic CSS

The true gem in Heydon Pickering's 2014 _Axiomatic CSS_[^1] article wasn't the
"lobotomized owl selector", though it is a really cool construct.

Here's the real value proposition: you can think about writing CSS in ways that
will affect the system more powerfully, and in many cases you should.

Here are some scenarios where I'd consider more systemic thinking about CSS:

* You can carve out a system [you own the aesthetic]
* You can discover the rules for the system [you have enough previous examples
  and a good gut feeling about the achievability of building a working system
  based on those examples]
* You can discuss your way to the rules for the system with someone who owns or
  pushes the aesthetic for the system
* None of the above apply, but your CSS is still driving you crazy.

[^1]: [Axiomatic CSS and Lobotomized Owls, Heydon Pickering](http://alistapart.com/article/axiomatic-css-and-lobotomized-owls)
