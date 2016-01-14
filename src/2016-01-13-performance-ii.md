# Performance Problems With Huge Surface Areas

> 1. _When a distinguished but elderly scientist states that something is possible,
> he is almost certainly right. When he states that something is impossible,
> he is very probably wrong._
>
> 2. _The only way of discovering the limits of the possible is to venture a
> little way past them into the impossible._

Arthur C. Clarke's third law, _Any sufficiently advanced technology is indistinguishable
from magic_ gets considerably more usage than the first two, which have never
really entered the popular-collective unconscious.

The need for great performance really boils down to this one fact:
You'll never get create anything that feels like magic if your app is
clunky and feels shitty. And if you can't create magic, you won't sell as well.
You won't beat your competition. But if you create magic and they don't, you'll
beat them at the market nine times out of ten. People love magic, even when it
isn't-quite-magic. Because it may as well be.

The fact that Clarke's first two laws aren't nearly as popular as the third
isn't much of a surprise. They aren't glamormous. They aren't prescriptive.
They don't really describe what "impossible" is. The lack of popularity is not
surprising, but it _is_ a shame, because the first two laws drive us very clearly
toward the third. When you push the boundaries of possibility, even in comparison
to other experiences, you get delight. And if you string together enough delight,
you get magic.

---

## Magic In Plain Sight

I think it's important to look for solutions in plain sight.
Beautiful and elaborate optimizations can be useful, but if they are
taxing to produce, then they may be difficult to maintain, and if they are
difficult to maintain &mdash; especially if they challenge the mental model
of how the system works &mdash; then their usefulness should be carefully
weighed against the costs that must be incurred to use them.

And if that cost is high and it makes the mental model more challenging,
the optimization should not be used.

> - _First rule of optimization - Don't_
> - _Second rule of optimization - Don't Yet (for experts only)_[^1]


When the US Gov't found Ross Ulbricht, widely believed to be _The Dread Pirate
Roberts_, the lead didn't come from an anonymous tipster or a sophisticated
and illegal intelligence monitoring technique. Rather, it came from rather
low-tech information gathering and observation from an IRS employee who was
brought in to support FBI and DEA agents who were having trouble finding
meaningful leads.[^2]

His keen attention to details that any other human being could have observed
in the landscape the authorities had assembled thus far led them directly to
Ulbricht.

The investigator was given the following quotation on a plaque:

> _“The world is full of obvious things which nobody by chance ever observes.”_

This quote was penned by Arthur Conan Doyle, attributed to his _Sherlock Holmes_.

[^1]: [Rules of Optimization, C2 Wiki](http://c2.com/cgi/wiki?RulesOfOptimization)
[^2]: [The Tax Sleuth Who Took Down a Drug Lord, NYTimes](http://www.nytimes.com/2015/12/27/business/dealbook/the-unsung-tax-agent-who-put-a-face-on-the-silk-road.html)
