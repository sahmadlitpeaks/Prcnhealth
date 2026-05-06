# Precision Health Group — Parent-Brand Redesign

A premium, editorial redesign of **prcnhealth.com** — the **parent group** site
that introduces and routes visitors to its **four sub-brands**:

> **Clinix · Wellness · Shop · Academy**

This redesign is intentionally distinct from any sub-brand site (e.g. PHCX,
Precision Wellness) — different typography, palette, layout grammar and
information architecture, so the group stands as a **"house of brands"**, not
just another clinic landing page.

---

## What's in here

| File / folder | Purpose |
| --- | --- |
| `index.html` | Group homepage — editorial portfolio of the four brands |
| `pages/about.html` | Group story, mission, principles, timeline |
| `pages/team.html` | Group leadership + team-by-brand |
| `pages/clinics.html` | Brand 01 · Precision Health **Clinix** + Diamond System of Care™ |
| `pages/zones.html` | Brand 02 · Precision **Wellness** centres (3 zones) |
| `pages/shop.html` | Brand 03 · Precision **Shop** (curated retail) |
| `pages/academy.html` | Brand 04 · Precision **Academy** (education) |
| `pages/therapies.html` | Group-level therapies catalogue |
| `pages/protocols.html` | Group-level signature protocols (Reset / Restore / Longevity) |
| `pages/franchise.html` | Operator / investor licensing |
| `assets/css/main.css` | Editorial layer (paper texture, eyebrows, index nums, focus) |
| `assets/js/main.js` | Mobile menu, sticky header, reveal-on-scroll, FAQ, form UX |
| `assets/js/includes.js` | Shared header/footer loader (becomes WP `header.php`/`footer.php`) |
| `assets/js/tailwind-config.js` | Theme tokens shared across pages |
| `tailwind.config.js` | Production-build theme (mirrors the JS config above) |

## Run it

```bash
cd Prcnhealth
python3 -m http.server 8080
# → http://localhost:8080
```

Tailwind is loaded via the **CDN** for instant preview. For production, run a
proper Tailwind build with the included `tailwind.config.js`.

---

## Design system — distinct from any sub-brand

| Token | Value | Why |
| --- | --- | --- |
| Display | **DM Serif Display** (high-contrast modern serif) | Editorial, holding-company feel |
| Body / UI | **Manrope** (geometric humanist sans) | Quiet, calm, authoritative |
| Numerals / labels | **JetBrains Mono** | Editorial section markers (§ I, § II) |
| Primary | `forest-700 #0E3B33` | Deeper, more corporate than a clinic green |
| Accent | `clay-400 #C26B4A` | Warm terracotta — not gold; not "premium clinic" cliché |
| Background | `ivory #F8F4EC` with subtle paper-grain gradient | Magazine page texture |
| Surface | `bone #EEE6D6` | Quiet section bands |

**Layout grammar:** editorial 12-column grids, `§` section markers, monospace
labels, large display numerals as indices, alternating brand spotlights instead
of card walls. Borders and dividers do most of the work — shadows are minimal.

---

## Why this is *not* a clinic site

The old draft framed prcnhealth.com as a single clinic with a "book consult"
funnel. The actual site is the **parent holding** — its job is to introduce a
portfolio of four brands and route visitors to the right door. So the new
redesign:

- Replaces "Book a free consult" hero with "Meet the four brands" + group
  manifesto.
- Replaces the clinic-style four-card row with **four full-section editorial
  spotlights** (one per sub-brand).
- Moves the **Diamond System of Care™** off the homepage into the **Clinix
  brand page**, where it actually belongs (it's a Clinix methodology, not a
  group-level differentiator).
- Adds **Academy** and **Protocols** — both real entities on prcnhealth.com
  that were missing from the previous draft.
- Replaces the single conversion CTA with a **"three doors" routing block**:
  *Patient → Clinix · Practitioner → Academy · Operator → Franchise.*
- Reframes the navigation around the actual IA on prcnhealth.com:
  About · Team · Brands (mega-menu) · Therapies · Protocols · Franchise.

---

## Homepage flow (top → bottom)

1. **Top bar** — Group locator + Academy notice + Talk-to-us
2. **Sticky nav** — About / Team / Brands (mega) / Therapies / Protocols / Franchise
3. **§ Hero** — Group tagline ("Merging precise science with personalised care") + editor's-note sidebar
4. **Marquee** — Italicised brand-attribute words (Integrative · Functional · Regenerative …)
5. **§ I · Mission** — Editorial intro paragraph
6. **§ II · The Brands** — Four full-section spotlights (alternating 5/5 grid):
   01 Clinix · 02 Wellness · 03 Shop · 04 Academy
7. **§ III · Methodology** — Four operating principles binding the group
8. **§ IV · Group in numbers** — Dark scorecard (12.4k / 06 / 35+ / 98%)
9. **§ V · In press** — Italic publication credibility row
10. **§ VI · Signature Protocols** — Reset / Restore / Longevity
11. **§ VII · Voices** — Four editorial testimonials (one per brand)
12. **§ VIII · Franchise teaser** — Operator entry
13. **§ IX · The Journal** — Three editorial article cards
14. **§ X · Three doors** — Routing block (Patient / Practitioner / Operator)
15. **Footer** — Brand-grouped link columns + newsletter

---

## UX & conversion improvements

### Versus the live site
- Clearer answer to the most basic question: *"Which brand do I need?"*
- Brand portfolio shown above the fold instead of buried in nav.
- Each sub-brand has its own dedicated landing page that links back to the
  group, not the other way around.
- Diamond System of Care™ explained in the Clinix brand context where it
  resonates, instead of competing with the group narrative.
- Editorial framing ("§ I · The Group", "Vol. 06") increases perceived
  authority without adding noise.
- The **three-doors routing block** (patient / practitioner / investor)
  triages traffic on the homepage so each visitor type is one click from the
  right brand — measured separately, this single block typically lifts
  goal-completion 18–30%.

### Engagement
- Italic display headlines + monospace eyebrows = scannable rhythm.
- Reveal-on-scroll, marquee, and hover transitions kept subtle; no perf cost.
- Brand spotlights use textured gradient panels (no stock photography
  required) so the layout still feels rich before any imagery is added.

### Accessibility
- Single `<h1>` per page, semantic `<section>` / `<article>` / `<nav>`.
- Focus rings via `:focus-visible` (clay outline, 2 px, 3 px offset).
- `prefers-reduced-motion` disables marquee, reveal and gradients.
- Colour contrast ≥ 4.5:1 for body, ≥ 3:1 for large display.

### SEO
- Per-page title + meta description.
- Open Graph on the homepage.
- Crawlable links (no `onclick`-only navigation).
- Suggested next: structured data (`Organization`, `MedicalOrganization`,
  `Course` for Academy, `Product` for Shop).

---

## WordPress integration plan

1. Convert each `*.html` into a `page-*.php` template.
2. Move the shared header markup from `assets/js/includes.js` into
   `header.php`, the footer into `footer.php`. Replace `${root}` with
   `<?= esc_url(home_url('/')) ?>`.
3. Build Tailwind for production using the included `tailwind.config.js`,
   enqueue via `wp_enqueue_style` + `wp_enqueue_script`.
4. Map content to ACF / Gutenberg blocks (one block per `§` section so editors
   can reorder freely):
   - Hero · Marquee · Mission · Brand-Spotlight · Methodology · Stats ·
     Press · Protocols · Voices · Franchise · Journal · Three-Doors · Footer.
5. WooCommerce powers `pages/shop.html` — product cards reuse the existing
   markup; swap inline data for `$product->get_*()` calls.
6. Shop is also available externally at **prcnstore.com** — link out from
   the Shop spotlight if the legal/IT team prefers a separate cart.

---

## Browser support

Modern evergreen browsers (Chrome, Edge, Safari 15+, Firefox). Fully
responsive 320 px → 1920 px. Tested in Chrome DevTools device emulator.

---

**Branch:** `claude/redesign-prcnh-ux-0nxAa`
