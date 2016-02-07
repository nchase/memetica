# Desire for Visibility into Destiny PVP

 Here are some desires that I have:

1. Can we (as interested players) get more technical visibility into
   what goes into different parts of the networking stack in Destiny?
2. Can we have more visibility into it _through the software?_ Like,
   through the UI (e.g. information on both of the weapons your opponent
   was using, maybe their current KDR, class+subclass), shortcut for inspecting
   gear of guardian-who-killed-me would be great.


## Systematic Pathologies as Manifest in Laggy Games, "Damage Referee"

The big problem for me right now is that people with a red bar
(whatever that means – I'm imagining it's for high latency) have
a few advantages. some supers (e.g. Stormtrance) appear to be more effective
in high-lag situations and the hits seem to take longer to register for those
users [players?].

Sounds like __Damage Referee__ will solve this to some degree. Would love visibility
into how it works. Naively I would guess it's something like "lower the priority
of outgoing messages with high latency" - but that brings up so many questions,
like "when is all of this information resolved and sent to players?"

Time to read the notes from the
[2015 GDC Bungie Talk on Network Architecture](http://www.gdcvault.com/play/1022247/Shared-World-Shooter-Destiny-s)
to learn the basics.

## Wanting to Know about Repeatability and Testability in Games

I'm not a game programmer, but I imagine that the notions of repeatability
and testability that we champion in software engineering more broadly
can wear thin in games – heck, it even wears thin with normal computer software
and real-life user experiences and interactions versus what we want to happen,
so the enormous complexity of games must just make everything worse.

Like the rest of us, I'd like to think that given the right visibility
into their systems, game programmers can effectively make things better.
What kind of tooling do they have around this?

## Sequels Vs. Iterations and Versioning

Maybe the team at Bungie is crunched and under too much pressure now
&mdash; and that perhaps they've been under this pressure for a long time,
unbeknownst to us &mdash; and that they just don't have the time to many things better.
Or maybe they've been making things much better in a future major iteration of the code
(like a game sequel) and those things cannot trickle down to the current live game.

This would produce a tough-to-break and painful-on-both-sides cycle wherein
the developers are breaking their backs trying to produce an experience
for a diminishing, embittered audience.

---

That's my biggest fear. Hope we aren't getting there, just projecting.
