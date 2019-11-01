# Rules and Behaviors for Successful Products, Part I

There are a lot of ways to build products. Here are some behaviors and
environmental factors that I have come to believe are necessary for having
products that become successful and stay that way.

## 1. You must use the product.

If you make a product for consumers - and you yourself aren't a user of your
product - good luck making it great.

While it's possible to create a decent product as a non-user, the effort
required for success will be much higher. And if you don't use your product,
you can only get to decent - great is laughable, and superlative will never
happen.[^1]


## 2. You must measure things in the product. Lots of things.

You have to measure things. Engineers should do ad-hoc measurement to get a
"fingertip feel" for whether or not a part of the system is working as
expected. There should be regular reports, automated or not, that everyone can
access (ideally everyone gets them in some form, e.g. an email or channel
notification - or better yet, a hyperlink that can be used in one of these
places and go to the other useful place).

Engineers and individuals in other disciplines and functions (e.g. product,
marketing, ideally design) should have the skills to measure real values from
the actual product state at will. Proxy measurements such as event triggers do
not count, though those are very useful to have.

Measurement doesn't mean _reading_ reports. Reading is analysis, which is
incredibly important, but it is not measurement. Again, analysis is not
measurement.

When you measure, read high-cardinality primitives. You want to be measuring
via rows in a database or stuff dumped from a database into Excel - the sorts
of things that roll up well into explainable graphs and high-level reports.


Measure flows (funnels). Measure user data - drink it directly from the
database. Make sure your teams are measuring externally. Measure yourselves
too, sure, but only if you have a handle on how to measure the important
dimensions of your product's success. Every team has to measure product
success.

## 3. Feedback from the product: engineers must receive feedback from the product when things go wrong.

One side of the feedback token is setting up some decent logging in your app.
Engineers should be able to interrogate these logs easily (in other words,
basic text search should work) to see what's happening for users.

Log levels should be used so that errors and warnings can be differentiated
from general information.


## 4. Feedback from the support team: everyone must receive feedback from the support team regardless of how good or bad things are.

The other side of the feedback token is the support team's feedback.

When support gets an issue that they can't solve with their tools, it should be
reported and someone should be on duty to investigate and fix whatever issues
are reported.

This might sound overbearing, but consider this: if your product is at any kind
of scale, the fact that a single user _reported_ the issue probably means that
others are having the issue, but they just aren't reporting it.[^2]

[^1]: This couldn't be any plainer. It's listed first because it's an easy rule to
  follow and gives you a great baseline.
[^2]: Aside: in some organizations, the relationship between support and
  engineering is entirely mediated by product. (i.e. product decides whether or
  not something that support hears about is communicated to engineers).
  I urge these organizations to disintermediate these relationships.
