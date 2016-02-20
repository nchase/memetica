# Maturity Dynamics in Modern Software Engineering

_Fun with expressing software systems, generally,
as periodic functions oscillating between limits defined
in terms of **Exploration** and **Maturity**._

---

## Software System Exploration is:

- Ideally combined with work to axiomatically and continuously prove
  the result of a fruitful exploration, especially as iteration proceeds.
- Often very similar to "Feature Development" in common parlance/framing.
- Sometimes channeled by the question, _"What can I shake out of the tree
  that hasn't been described yet?"_

---

## Software System Maturity is:

- A controlled, temporally-bound cessation of <abbr title="Software Exploration">feature development</abbr>,
  as compared to _Software Death_, the uncontrolled cessation
  of feature development.
- Marked by axiomatic proof of the system's feasibility in at least
  two ways, but ideally not so many ways that the system becomes inflexible
  to change.[^1]
- Also worth nothing that too few methods of proof will result in inflexibility
  to change.[^2]

---

## Why Two Ways?

Most software systems are products. One way to prove these systems
is to ensure that people are paying money for them. People do not normally
pay money for axiomatically unprovable software systems.

But if your only mechanism of provability is that people are giving you money,
you could easily lose sight of whether or not you have a provable system,
which would render the system immediately unprovable and unprofitable.

---

## Axiomatic Provability and Overcoming Incompleteness

There are limits to the provability of all systems &mdash; so it goes for
things in the universe.[^3] But you should still arrive at a certain level of
comfort in the provability of your systems, because the unprovable things are
actually just really ridiculously uncommon.


Practically speaking, no system contains features that are truly unprovable.
Clasically unprovable systems are so far outside of (or deeply inside of,
straddling the atom level) the boundaries of our day-to-day reality that they
are generally not worth speaking about, except in the presence of integration
with another system that, itself, is on the edges of provability.[^4]

It's way more likely that you come up against provability-versus-time-investment.
_"Do we invest in proving this piece of the system or not? And when should we?"_


[^1]: Inflexibility can creep in if the developer is overzealous about proof about what
      the system is. Teams of contributors, within and across disciplines,
      should share agreement about what the system actually is.

[^2]: This inflexibility, co-orbital with _Software Death_, is _Software Paralysis_.

[^3]: [Gödel's incompleteness theorems, Wikipedia](https://en.wikipedia.org/wiki/G%C3%B6del%27s_incompleteness_theorems)

[^4]: Joke example: the browser's [`contentEditable`/`execCommand`](http://w3c.github.io/editing/)
      editing API complex, which, lately, is improving.
