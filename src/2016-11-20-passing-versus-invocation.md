# Function Passing Versus Function Invocation

One thing that I see developers do when they're on their way to a deeper
understanding of the language is confuse function _passing_ with function _invocation_.

In walking myself back from that point of view that the difference is obvious,
I want to explore and explain the difference for the reader who might be sitting
somewhere along the continuum of understanding.

---

## Let's start by defining a function

First let's construct an arbitrary function.
The function will not be a method on an object, though it could be.[^1]

You'll often hear the terms 'function' and 'method' used interchangably.
In earlier eras, you might have heard 'routine' and 'procedure' too.[^2]

This function will not take any arguments, though it certainly could:

```js
var twoPlusTwo = function() {
  console.log(2 + 2);
}
```

---

## Invoking/Calling our function is a lot like casting spells

'Invoke' is synonymous with 'call.' For me, the term 'invoke' calls to mind
casting magic spells, which is a metaphor that I love. I also enjoy
thinking of it like executing a special move in a fighting game.

![Special Move](https://cloud.ahfr.org/images/ryu.gif)[^3]

If I wanted to call/invoke the function we wrote in the last section, I'd do this:

```js
// function calling:

twoPlusTwo();
```

This would give us the result right then-and-there.

Write your own `twoPlusTwo` and try calling it!

---

## Software Is Elaborate Spell-Casting

If we wanted to pass our function around, we'd send the function definition
along to some other thing that could call it. This is useful because it gives
other pieces of code the power to call our code at _their_ leisure
(instead of immediately at the time/place where we are writing the code).

To continue with the metaphor of casting spells, this is like taking a page out
of the spellbook and giving it to someone else so that they can cast that spell later.

Perhaps you can imagine this going further and further,
allowing the construction of an elaborate chain of spells.

Many software applications, both simple and complex, are elaborate chains of spells.

---

## What does it look like when a function calls other functions?

Let's imagine that we had a function that, in fact, called other functions.

That function might be written something like this:

```js
var functionCaller = function(otherFuncToCall) {
  otherFuncToCall();
}
```

This function takes an argument, `otherFuncToCall`. That argument isn't a "real" function,
it's just a reference to whatever function we pass in to it.

So if we write code like this:

```js
// function passing:

functionCaller(twoPlusTwo);
```

We'll get the same result that we received earlier by calling `twoPlusTwo` directly.

---

## Incorrect Function-Passing

Notice that we _pass_ the definition of `twoPlusTwo` into the other piece of code
that calls it. We do not call/invoke it. If we called it instead of passing it,
our code would look something like this:

```js
// incorrect function passing

functionCaller(twoPlusTwo());
```

That would be wrong, and would produce incorrect results.

In that scenario, we would not actually have passed any argument in to `functionCaller`.

---

## Wrapping Up

Here's the complete code for this exercise for you to play with.

I encourage you to write it out instead of copying and pasting it:

```js
// a function that prints some stuff to `console.log`:
var twoPlusTwo = function() {
  console.log(2 + 2);
}

// a function that calls whatever function we pass into it:
var functionCaller = function(otherFuncToCall) {
  otherFuncToCall();
}

// example of correct function passing:
functionCaller(twoPlusTwo);

// example of incorrect function passing:
functionCaller(twoPlusTwo());
```

---

## Further Reading

1. A few years ago, Yehuda Katz (contributor to various high-profile OSS projects)
   wrote [this great piece](http://yehudakatz.com/2011/08/11/understanding-javascript-function-invocation-and-this/)
   on function invocation. He goes into more detail than I've described here,
   including sections on the important built-ins `bind`, `call`, and `apply`.


[^1]: The behavior described on this page will be the same regardless of
      whether we're talking about named functions, anonymous functions,
      object methods, whatever.
[^2]: Those terms ('routine', 'procedure') usually refer to the same thing as
      'function' or 'method', but they aren't in fashion right now. Yes indeed,
      there are subtle differences language-by-language.
[^3]: Image cribbed from [http://streetfighter.wikia.com/wiki/Shinku_Hadoken/Sprites](http://streetfighter.wikia.com/wiki/Shinku_Hadoken/Sprites)
