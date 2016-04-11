# Epigenetics and DNA in Software

When we think of software we tend to talk about business logic, automated
testing, continuous delivery, user interfaces, "the user experience," and product
decisions.

Often absent from the conversation is the _life_ either inherent in the systems
that we create, or, more commonly, breathed into those systems by the people who
create and/or use them.

Leveraging this idea of _life-in-systems_ I wanted to draw out a few links
between phenomena observed in _software engineering_ to phenomena observed
in the _life sciences_.

---

## Code as DNA

Code is DNA. It can produce traits in the organism[^1] that, if expressed, will
enable the organism to react to stimuli in the outer environment, which can
lead to the surrounding environment's continued sanctioning of the organism's
life.[^2]

## "If Code Is DNA, What Are Tests?", etc.

Tests are _RNA polymerase_. The tests ensure the correctness of the DNA
and allow the DNA to be _transcribed_. If the DNA is faulty, the RNA polymerase
backs up and tries the previous transcription again.

Obviously, _software artifacts_ are the organism's expression of its genes
(_phenotype_). Maybe our build pipeline, build tools, and build machines are
_DNA helicases_.

---

## Lamarckism and Epigenetics in Software

_Jean-Baptiste Lamarck_, an evolutionary theorist roughly eighty years
before Darwin, proposed a _soft inheritance_ &mdash; the notion that organisms are
deterministically linked, not at point of creation, to their offspring,
but at point of their offspring's creation, and any adaptations or
adaptive aspirations that they might develop toward their environment may be
passed on to their progeny. This is the idea that giraffes might have long necks
because they aspired to eat the fruit of higher trees, or in an extreme case,
the belief that you can grow entire organs if you want them badly enough.

Naturally, this is all roundly discredited by today's scientists, but it has
found a measure of skeptical and well-measured redemption in the modern science
of epigenetics. _Epigenetics_ is the study of things that exist above and
outside-of the genetic level that may affect phenotype and may even produce
generation-inheritable changes in organisms.

In software, with a good feedback system, Lamarck's _soft inheritance_ can be
instituted sensibly. We have the advantage of knowing our systems (and if we're
lucky) having good feedback wherein we can make the changes necessary on behalf
of the system to keep it alive.[^3]

---

## Improving Systems With "Soft Inheritance"

_Maybe don't jump right into changing the DNA._

Here are some things that you can use to drive improvements to your system's
environmental fitness:

1. _Unit Tests_ are awesome because they give us reliability and open the door,
   gradually, to truly provable systems.
2. _Generative Tests_ are awesome because they're like unit tests on steroids.
3. Improving _Human Communication_ and getting everyone on the same page can
   do as much as any flavor of testing, automated or otherwise, though neither
   can replace the other.
4. Finding ways of validating things-that-are-challenging-to-validate is always
   good.[^4]


## Generative Tests

In most cases, we don't fully leverage the levels of confidence that
the provability of a unit test opens the doors to. We don't prove nearly
as much as we could.

_Generative Tests_ are a mechanism from the functional programming paradigm[^5]
that allow us to prove that all inputs to a given function produce output
for a given function that are correct, without having to write an ungodly
number of tests to ensure that all possible input combinations produce
correct output combinations for those inputs.[^6]

Math plus unit tests grants far greater testing power,
potentially to the edges of user possibilities.

Generative testing libraries are available to the JS community as packages like
[`testcheck`](https://www.npmjs.com/package/testcheck) and
[`quickcheck`](https://www.npmjs.com/package/quickcheck) on NPM.



[^1]: In the context of this thought exercise, the "organism" is actually a
      software system.
[^2]: In the realm of software, this survival is reflected in
      software usage, which is often, but not exclusively tied to the piece of
      software's business viability.
[^3]: Whereas with the biosphere, fitness-for-environment isn't determined
      by an organism or their offspring, Darwin be damned.
[^4]: OK, good is an understatement. It's intelligence, reflection,
      environmental fitness reified.
[^5]: See libraries like [`QuickCheck`](https://wiki.haskell.org/Introduction_to_QuickCheck2)
      in Haskell and [`test.check`](https://github.com/clojure/test.check) in Clojure
[^6]: No One does this, but if you do, I totally feel your pain. Getting closer
      to the _"everything has been proven, so I am totally sure that this works"_
      state seems like endless and meaningless work, so naturally,
      single-input-single-output tests fall out of that tension.
