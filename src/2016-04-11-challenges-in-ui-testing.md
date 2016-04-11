# Challenges In Web UI Testing

On the web, we see a combination of multiple separate, independent systems,
needed to produce meaningful artifacts for non-technical users.
At the UI level, these are HTTP, HTML, CSS and JS. Three of these systems are
stateless and each of the four is, in theory, independent of the others.

The _combined artifact_ that these things work in concert to produce is often
challenging to test. We already know that it's fruitful to test some of these
systems apart from others. I posit that it's useful to break down
some of that and test UI away from everything else and include design and QA
in the conversation and methodology.

On the web, at the UI level, we have a combination of multiple because UI is a
combination of multiple separate systems (HTML, CSS, JS).  Each of those systems
is testable by itself, but the combined artifact is often
difficult or challenging to test.

For this reason, I suggest testing the UI alone.

If done well, your testing team can get confidence that they do not currently
have, and the amount of time spent testing will decrease.

Of course, this means that you have to design and build a UI that can be tested
alone.
