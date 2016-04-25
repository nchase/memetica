# Font Optimization: WOFF 2.0 and More

**TL;DR &mdash; if you need a web font, use WOFF2 fonts if available,
then fall back to WOFF, then, finally, use whatever other formats
are available. You can specify multiple values for the `src` property,
so this syntax should work:**

> ```css
> @font-face {
>   src:
>     url('../fonts/playfair.woff2') format('woff2'),
>     url('../fonts/playfair.woff') format('woff'),
>     url('../fonts/playfair.ttf') format('truetype');
>   font-family: 'Playfair';
> }
> ```

---

Fonts are a heck of a lot of fun. Lately (thinking 2015, it is currently mid-2016)
there have been a handful of reasonable arguments in favor
of using system fonts instead of web fonts.

I love system fonts and classic/core web fonts and I agree with the reasons behind
using them instead of custom web fonts. They'll always be faster than custom
web fonts for all of the obvious reasons.

But what about when you need (or want) something nicer than a system font and
you want it to be fast? Try WOFF2.

WOFF2 is a web standard optimized font-packaging format that offers fairly large
compression gains over other formats.

If you're reading this page with my Playfair stylesheet (and if you aren't,
but want to, navigate [here](?style=playfair) or use the sidebar), there's a fair
chance the headings are using the WOFF2 format.


# The Numbers

**For 'Playfair Regular', WOFF2 offers a 10X optimization over TTF
and a 3.5x optimization over WOFF.**
```
WOFF2: ~17.8KB
WOFF: ~60KB
TTF: ~182KB
```

WOFF2 isn't supported everywhere, but web fonts allow us to specify multiple
values for fonts (see CSS in intro). The first value is treated by the browser
as the most desirable option, the final value is the ultimate fallback.

Don't send WOFF2 files over the wire with e.g. gzip &mdash; they are already
pre-compressed.

# Other Optimizations, Further Reading

1. If you can't use WOFF2 or WOFF with your font, try
[Font Subsetting](2015-11-04-fonts.md).[^1]
2. Google [has a tremendous article about font optimization](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/webfont-optimization).
3. [W3C Analysis of WOFF 2.0](https://www.w3.org/TR/WOFF20ER/) -
   up to 94.51% gains observed.



[^1]: The W3C exposes a better mechanism for doing subsetting in CSS with the
      `unicode-range` property, but this property
      [is not yet fully supported](http://caniuse.com/#feat=font-unicode-range).
      Once it _is_ fully supported, the door to cheap + programmatic
      font subsetting will be open.
