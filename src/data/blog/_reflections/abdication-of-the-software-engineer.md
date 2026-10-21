---
author: Rohit Yadav
pubDatetime: 2026-10-21
title: The Abdication of the Software Engineer
slug: abdication-of-the-software-engineer
featured: false
draft: true
tags:
  - reflections
  - leadership
description:
  AI didn't make software less valuable. It removed the disguise that building
  it was the hard part. On supply and demand, past gold rushes, and moving from
  labour to ownership, trust and judgment.
---

A few weeks ago I wrote that after 19 years, [I think I've written my last line
of code by hand](/posts/reflecting-on-two-decades-in-software). The response
surprised me. Some people were curious about the workflow. Many more were
worried, and not about workflows. They were worried about whether they still
matter.

This post is about that worry. It's long, and parts of it are speculative. I'm
an engineer, not an economist, so take it with a bag of salt.

## The soundtrack of the moment

For a long time, software engineers were treated as scarce and essential. Every
company was becoming a software company, and engineers were the people who
could make that happen. That respect felt permanent. It isn't feeling that way
anymore.

You can hear the mood in the music. Degenerative Pixels has been putting out
songs that land a little too close to home.
[LGTM (Looks Good to Me)](https://www.youtube.com/watch?v=3TNpOD6bov8) is a
satire about a team that goes "AI first", gives the bots admin rights, and
approves thousands of lines nobody reads, until the billing breaks and nobody
left knows how to fix it. A follow-up is titled, simply,
[forty thousand lines that I didn't read](https://www.youtube.com/watch?v=WBiK2qJw3Cg).

Then came [No One Needs Us Anymore](https://www.youtube.com/watch?v=zONGVaONKe8).
A friend shared it with one line: that's my 2am worry. He's an excellent
engineer. He isn't worried that he's bad at his job. He's worried that his job
is quietly becoming unnecessary.

One line from that song has stuck with me: _nothing to prove_. For most of our
careers, engineers proved their worth by building. Shipping the hard thing was
the proof. When building gets cheap, that kind of proof stops counting for
much. What's left to prove is everything around the building.

I've been thinking about why the word for this feels like _abdication_. To
abdicate is to give up a throne. Nobody takes it from you; you hand it over.
The satire in LGTM points at exactly that. The risk isn't that AI takes the
engineer's seat. It's that we give up the parts of the seat that mattered:
reading, questioning, owning what ships.

## More of everything, except buyers

Here's what I see. Shipping is up. There are more apps on the App Store, more
launches, more side projects, more SaaS clones, more of everything. What isn't
up is purchasing.

![A two-panel drawing. Before AI: a few indie developers and a big crowd of happy paying users. After AI: a huge crowd of indie developers and three frightened paying users in a corner.](@/assets/images/indie-devs-before-after-ai.jpeg)

_Shared by u/Superb_Assumption_38 in a
[thread on r/macapps](https://www.reddit.com/r/macapps/comments/1wvyd4s/pricing_and_viability_of_indie_apps_postai/)
about pricing and viability of indie apps after AI. Original artist unknown._

That drawing captures it better than I can. The supply curve moved. The demand
curve didn't.

I think that's the most important thing AI has taught us about our industry:
**software was always a demand-side problem, not a supply-side one.**

The hard parts were never only "it's hard to build". They were:

- **Trust.** Will this company still exist next year? Will it lose my data?
- **Distribution.** How does anyone even find out it exists?
- **Switching costs.** What does it cost me to move off what I already have?
- **Workflow fit.** Does it match how my team actually works, not how a demo
  works?

For decades, the difficulty of building hid all of that. If building was hard,
then whoever could build had a moat, and engineers who could build were
precious. AI didn't make software worthless. It removed the disguise. It
revealed that the expensive part of software was always on the other side of
the transaction.

## We've seen this movie before

None of this is new. Every time the cost of making something collapsed, we got
a gold rush.

- **The App Store, around 2010.** "There's an app for that." Anyone with a Mac
  and a weekend could ship to millions of phones. Hundreds of thousands of apps
  appeared. Most of them made close to nothing.
- **Shopify stores and Shopify apps.** Opening a store went from a project to
  an afternoon. Dropshipping became a genre of YouTube video. A whole ecosystem
  of apps grew around the stores. Again, most stores and most apps earned very
  little.
- **YouTube channels.** A camera and an internet connection replaced a
  broadcast licence. Millions of channels exist. Most have a handful of
  viewers.
- **Newsletters.** Substack and friends made publishing a paid newsletter
  trivial. Thousands launched during the boom. A small number became real
  businesses.

Each time, the same pattern showed up:

1. **The median product earned nothing.** When making things gets cheap, the
   typical thing is worth less, because there's so much of it.
2. **The market didn't shrink.** The App Store, e-commerce, online video and
   paid writing all became much bigger markets than before. The pie grew; it
   was just split very unevenly.
3. **The winners were almost never the best-built product.** They were the ones
   that **owned a customer** rather than competed in a category. An audience,
   a brand, a relationship, a channel. The best-built fart app didn't win. The
   creator whose viewers would follow them anywhere did.

I expect AI-built software to follow the same pattern. Lots of apps, a median
that earns nothing, a bigger market overall, and winners who own customers
rather than features.

## Where are we on the hype curve?

Most new technologies follow a familiar curve: a trigger, a peak of excitement,
a trough of disappointment, then a slower climb to something boring and useful.

<figure>
  <svg viewBox="0 0 640 300" role="img" aria-label="A hype curve: expectations rise to a peak, fall into a trough, then climb slowly to a plateau. A marker just past the peak says we may be here." style="width:100%;height:auto;font-family:inherit;color:var(--foreground)">
    <line x1="20" y1="260" x2="625" y2="260" stroke="currentColor" stroke-opacity="0.4" />
    <line x1="20" y1="20" x2="20" y2="260" stroke="currentColor" stroke-opacity="0.4" />
    <text x="625" y="282" text-anchor="end" font-size="13" fill="currentColor" fill-opacity="0.7">time</text>
    <text x="28" y="22" font-size="13" fill="currentColor" fill-opacity="0.7">expectations</text>
    <path d="M20,250 C90,245 120,50 170,50 C220,50 250,215 330,215 C400,215 430,160 500,150 C560,142 600,140 625,140" fill="none" stroke="currentColor" stroke-width="2.5" />
    <text x="170" y="40" text-anchor="middle" font-size="13" fill="currentColor">Peak: AI will do everything</text>
    <text x="330" y="240" text-anchor="middle" font-size="13" fill="currentColor">Trough: 40k unread lines</text>
    <text x="560" y="178" text-anchor="middle" font-size="13" fill="currentColor">Slope: real work</text>
    <text x="620" y="122" text-anchor="end" font-size="13" fill="currentColor">Plateau: boring, useful</text>
    <circle cx="205" cy="76" r="7" style="fill:var(--accent)" />
    <text x="217" y="88" font-size="13" font-weight="bold" style="fill:var(--accent)">we may be here</text>
  </svg>
  <figcaption>A rough sketch, not data. My guess at where we are.</figcaption>
</figure>

My guess is that we're just past the peak. The capabilities are real and still
improving. But the expectations, "AI will replace whole teams this year", are
running ahead of what organisations can actually absorb. The trough will come
when the bills for unreviewed code, unclear ownership and failed pilots arrive.

The slope after that is where the real value gets built. Every gold rush above
went through this, and every one of them ended up bigger than it started.

## Trust becomes the scarce input

When anyone can produce something that looks good, looking good stops meaning
anything. What becomes scarce is trust.

I think the anti-AI camp's instinct is partly about this. When people say they
prefer things "made by a human who understands it", they're using that as a
trust signal. You can argue with the reasoning (humans write plenty of bad
code), but the signal still has value. It tells you someone stood behind the
work. In a world of abundant output, being someone who stands behind their
work is a differentiator.

## Distribution before product

The other scarce input is distribution. Most indie failures aren't bad
products. They're products shipped into a void.

The old order was: build the product, then find users. When building is cheap,
that order flips. **Build the audience, the relationships, or the integration
into an existing channel first, then ship into it.** The YouTubers and
newsletter writers who won understood this. So did the Shopify app developers
who lived inside the merchant's existing workflow, rather than asking merchants
to come find them.

## Bounded and unbounded demand

I want to be measured about AI's impact, because it cuts both ways.

Recently I had a dispute with my health insurer. Before AI tools, I'd
have either let it go or paid a lawyer, and honestly I'd probably have let it
go. This time I used an AI tool to understand the policy and draft a much
better complaint than I could have written myself. That's work no lawyer lost,
because I was never going to hire one. It was **unbounded demand**: a need that
always existed but was never worth paying a professional for.

There's a huge amount of this. People who couldn't afford advice, small
businesses that couldn't afford software, problems that were never worth a
professional's time. AI is serving that demand every day. I think that
genuinely makes life better for a lot of people, and possibly makes society
fairer, because expertise that was only available to those who could pay is
now available to almost everyone.

But plenty of demand is **bounded**. A friend told me about someone who runs an
invoicing business. They had planned to hire two chartered accountants. They
won't now, because the work is automated and checked by an AI tool. The amount
of invoicing didn't grow because it got cheaper. The same work just needs fewer
people.

Most professions are a mix of both. In software, there's bounded demand (the
fixed set of features a company needs this quarter) and unbounded demand (all
the internal tools, automations and niche products that were never worth
building before). **The strategic question for anyone is which side of their
field is unbounded, and how to move toward it.**

History has examples of both. When ATMs arrived, bank tellers didn't disappear;
branches got cheaper to run, banks opened more of them, and the teller's job
shifted towards relationships and sales. Spreadsheets reduced the need for
bookkeepers doing arithmetic by hand, but created far more demand for analysts
asking "what if?"

What makes this wave different is **simultaneity**. Earlier automation hit one
sector at a time, and other sectors absorbed the people who were displaced. This
one hits almost the whole screen-based economy at once. That weakens the usual
escape valve of "retrain into the next field", because the next field is being
hit too.

That's my real worry. What softens it, for now, is the **adoption gap**.
Capability is moving much faster than organisations can change. Processes,
regulation, trust, procurement and plain habit all slow things down. So the
actual displacement is running well behind what the models can already do.
That gap buys time. The question is what we do with it.

## Collapsing or bifurcating?

So is the software engineering job market collapsing? I think it's both
collapsing and growing, just not in the same places.

Some things are genuinely collapsing. Roles defined by a platform (the web
developer, the iOS developer, the "React person") are shrinking fast, because
producing platform code is exactly what models are best at. Many traditional
roles organised around writing features from tickets look the same way.

At the same time, other roles have surged. Around mid-2026 I started seeing
titles that barely existed a couple of years ago: Forward Deployed Engineer,
GenAI Engineer, Agentic AI Engineer. They describe different work, but they
have one thing in common. **They describe an engineer who sits closer to the
problem than to the editor.** Someone who is in the room with the customer, the
data, and the failure modes, and who directs the building rather than doing all
of it.

The emphasis is shifting with it. Less platform engineering, more architecture,
system design, security and evaluation. Less "how do I write this?", more
"should this exist, how will it fail, and how will we know?"

That makes me think the craft is moving **from production to judgment**.

## Capital versus labour

This is the most speculative part, so the bag of salt applies doubly.

For about a century, economists treated labour's share of income as roughly
constant. It's one of the classic "stylised facts" of growth. That holds when
capital and labour are imperfect substitutes: machines make workers more
productive, but can't simply replace them.

AI agents change that for some occupations. When an agent is a near-perfect
substitute for a worker, capital and labour become much more substitutable. In
theory, that pushes capital's share of income up and labour's share down. Put
simply: if the work can be done by something you can buy, the returns go to
whoever owns it.

That's what I think the market is betting on. Labour losses become capital
gains. And if that plays out, the wealth divide gets wider. Some friends and I
have joked, a little nervously, about the science-fiction version: two strata
of society, one that owns the machines and one that doesn't.

There's an old counterweight to that, the Fordist paradox: if workers can't
afford to buy the output, growth stalls. Henry Ford's $5 day is often told as a
story about paying workers enough to buy cars (the real reasons were more about
staff turnover, but the point stands). An economy where most people's labour
isn't worth much is also an economy with fewer customers. I don't know how
that tension resolves. I don't think anyone does yet.

## Migrating from labour

So what do I actually do about it? The way I've started thinking about it is
to migrate, gradually, from selling labour to holding three other things:
**ownership, trust and judgment**. Not all of one, but some of each.

- **Ownership.** Own something: a product, a share of a business, a client
  relationship, an outcome. If returns move from labour to capital, it helps to
  hold a little capital, even if it's just the asset you build.
- **Trust.** Build a reputation and relationships in a specific niche. When
  products can't differentiate, reputation is what reaches customers.
- **Judgment.** Know what the model doesn't. Domain depth in messy industries
  like healthcare, logistics, finance, construction, legal, manufacturing and
  insurance. And be accountable for the result: review, security, reliability,
  evaluation of AI systems, production ownership.

And position yourself in the **unbounded-demand part of whatever field you
choose**, where cheaper production creates work rather than deleting it.

Look at who lost and who won in the stories above. The LGTM song's narrator
lost because he stayed a task-doer while the tasks disappeared. The two
accountants who weren't hired lost the same way. The business owner my friend
told me about won, because they owned the client relationship and the outcome.

## A few more things I'm watching

**Unread code is a liability.** Forty thousand lines that nobody read don't go
away. They need to be secured, upgraded, debugged and eventually removed.
Software was always more liability than asset, and AI makes it possible to
create liabilities faster than ever. Someone will be paid to manage that.

**The apprenticeship problem.** Most of us learned judgment by producing:
writing bad code, getting it reviewed, debugging it at 2am. If agents do the
producing, how does the next generation build the judgment we're now saying is
the job? I don't think we've answered that yet, and as leaders it's our problem
to solve.

**Open source feels it first.** Maintainers are already seeing more
contributions that are easy to generate and expensive to review. Having spent
years as a maintainer on Apache CloudStack, I know that review bandwidth, not
code, was always the scarce resource. That's now true everywhere.

## Back to the compiler

In my last post I said that most of my new work is in strongly typed, compiled
languages, because a strict compiler is a great partner for agents. It catches
mistakes before anything ships.

I keep coming back to that. Maybe that's what the engineer becomes: the
compiler for everything a compiler can't check. Is this the right thing to
build? Is it safe? Will it hold up in production? Will anyone actually pay for
it?

The throne was never "the person who can write the code". It was "the person
who knows what's right and is accountable for it". We only abdicate that if we
choose to.

---

_Thanks to all the friends who indulged me in long conversations that shaped
this post. The good ideas here are partly theirs; the mistakes are all mine._
