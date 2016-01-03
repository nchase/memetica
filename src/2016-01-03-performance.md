# Website Performance

Performance and page speed are critically important and criminally ignored.

John Allsopp's recent ['Website Obesity' talk](http://idlewords.com/talks/website_obesity.htm)
reminds us of this painful fact.

---

Here are some facts about the webpage you're viewing:

- Content, CSS, and JS &mdash; with the exception of Google Analytics &mdash;
  are roughly 30KB combined, before minification. This is pretty fast for a contemporary website.
- The webpage loads and draws pretty much instantaneously.
- I thought long and hard before putting the Google Analytics script on the page.
  [and if anyone knows something smaller and faster than Google Analytics
  for simple pageview tracking, I am all ears.]
- There are some heavier fonts, but through [Font Subsetting](/2015-11-04-fonts.md),
  I have reduced the over-network weight of those to be reasonably small as well.
- I have a number of transformations that I use to take the content [written in markdown]
  and 'publish' it, but I don't force those on visitors' devices. As a visitor, you just
  get the content that you are expecting to read and the styling that makes it look decent.
- The CSS was written to be very much "themeable".
  Unique "themes" are each a couple of hundred bytes of unminified CSS.

---

If you are interested in the code behind this site,
[it is on GitHub](https://github.com/nchase/memetica/).
