# Rules and Behaviors for Successful Products, Part I

There are a lot of ways to build products. Here are some behaviors and
environmental factors that I have come to believe are necessary for having
products that become successful and stay that way.

## 1. You must _use_ the product

If you make a product for consumers, and you yourself aren't a user of your
product, good luck making it great. It's entirely possible to have something decent,
but the effort required multiplies in every other area, if you do not follow this simple rule.

If you don't do this, you will likely never have a product that is truly great.


## 2. You must _measure_ stuff in the product

You have to measure things. There should be regular reports that everyone can
see and access. Engineers and individuals in other disciplines and functions
(e.g. product, marketing, ideally design) should be able to measure things
ad-hoc.

Note that measurement doesn't mean reading reports. Measure the primitives
&mdash; you want to be measuring via rows in a database or Excel (i.e., the
stuff that rolls up into the reports/graphs).

## 3. You must receive _feedback_ from the _product_ when things go wrong

One side of the feedback token is setting up some decent logging in your app.
Engineers should be able to interrogate these logs easily (in other words,
basic text search should work) to see what's happening for users.

Log levels should be used so that errors and warnings can be differentiated
from general information.


## 4. You must receive _feedback_ from your _support team_ when things go wrong

The other side of the feedback token is the support team's feedback.

When support gets an issue that they can't solve with their tools, it should be
reported and someone should be on duty to investigate and fix it.

This might sound overbearing, but consider this: if your product is at any kind
of scale, the fact that a single user _reported_ the issue probably means that
others are having the issue, but they just aren't reporting it.