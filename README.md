# NorthPeak Digital

A one-page responsive site for a fictional agency, built for the Digital Heroes Web Development internship task kit (Role 05).

**Live site:** [add your GitHub Pages URL here]
**Repo:** [add your repo URL here]

## Tech

Vanilla HTML, CSS, and JavaScript — no framework, no build step. Chosen deliberately so the whole thing deploys straight to GitHub Pages with zero tooling.

## Approach

NorthPeak's name and "climb" positioning drove the visual direction: a navy-and-gold palette, a topographic contour-line motif in the hero, and pricing tiers named Basecamp / Ridgeline / Summit so the naming actually means something rather than being decorative. The six services, three pricing tiers, testimonials, and contact form all follow the brief's required sections, with the form validated client-side (no page reload, inline error messages, `aria-invalid` wired up for screen readers).

Responsive down to 360px — the nav collapses to a hamburger menu, the services/pricing grids stack to a single column, and the stats row reflows to two columns before one.

## Task B — Performance & accessibility

Starting mobile Lighthouse run came back at Performance 56 / Accessibility 96. Two things happened from there:

1. **The 56 was misleading.** Lighthouse's own report flagged that a Chrome extension was inflating the JS/blocking-time numbers. Re-running the same audit in an Incognito window (extensions disabled) gave the real score: **Performance 99**.
2. **The Accessibility gap was real and fixable.** I ran the actual WCAG contrast math on every color pair in the CSS and found one genuine failure: `--accent-gold-dim` on the service-card numbers hit 4.35:1 against its background, just under the 4.5:1 AA minimum. Brightened it to `#d99a3a` (7:1+) and Accessibility went to **100**.

Also fixed along the way: switched the Google Fonts `<link>` to a preload-and-swap pattern to remove a render-blocking request, and added an inline SVG favicon to kill a wasted 404 on load.

One thing flagged but intentionally not chased: Lighthouse's "efficient cache lifetimes" note is about cache headers on the Google Fonts CDN and GitHub Pages' defaults — not something controllable from static site files, so it's noted here as a scoped-out limitation rather than something silently ignored.

Full before/after Lighthouse screenshots and the detailed changelog are in the submission alongside the Loom walkthrough.

## AI usage

See [AI_USAGE.md](./AI_USAGE.md).
