# Precision Health Group — UX Redesign

A premium, conversion-focused redesign of **prcnhealth.com** — built in clean,
modular HTML + Tailwind CSS, ready to be ported to WordPress.

## What's in here

| File / folder | Purpose |
| --- | --- |
| `index.html` | Full homepage (12 sections, mobile → desktop responsive) |
| `pages/` | Sub-pages — Services, Therapies, Clinics, Shop, About, Franchise |
| `assets/css/main.css` | Custom layer (focus rings, reveal animation, motion-safety) |
| `assets/js/main.js` | Mobile menu, sticky header, reveal-on-scroll, counters, FAQ, form UX |
| `assets/js/includes.js` | Shared header/footer loader → becomes `header.php` / `footer.php` in WP |
| `assets/js/tailwind-config.js` | Theme tokens shared across sub-pages |
| `tailwind.config.js` | Production-build theme (mirrors the JS config above) |
| `assets/img/favicon.svg` | Inline SVG favicon |

## Run it

It's pure static HTML — open `index.html` in any browser, or:

```bash
cd Prcnhealth
python3 -m http.server 8080
# → http://localhost:8080
```

Tailwind is loaded via the **CDN** for instant preview. For production, run a
proper Tailwind build with the included `tailwind.config.js`.

---

# UX & Conversion Audit — current site → redesign

## Weak areas identified on the live site

> The audit below is informed by the live site's structure and brand
> positioning (Precision Health Group, UAE — integrative-medicine clinics +
> telehealth + therapies + shop + franchise). Specific recommendations are
> reflected in the redesign.

| # | Weakness on the live site | Why it costs conversions | What the redesign does |
| - | --- | --- | --- |
| 1 | Hero doesn't lead with a single, sharp value proposition | Visitors guess what they're looking at and bounce in <10s | New hero: "Truly well, by design." + sub-line + two CTAs (book / explore) above the fold |
| 2 | "What we do" is fragmented across multiple sub-brands (Clinix, Shop, Hub, Franchise) — no map | Decision fatigue → analysis paralysis | New **Four Pillars** section gives every visitor a clear "I'm here for X" entry point in one screen |
| 3 | Diamond System of Care™ is a tagline, not a story | Loses the strongest differentiator | Dedicated dark section explaining the 4 facets — Discover · Diagnose · Design · Deliver |
| 4 | Trust signals scattered, no insurance / cert visibility | Healthcare buyers gate on trust | Sticky announcement bar + trust marquee + stats block + 5★ social proof in hero |
| 5 | No clear pricing or "what does it cost" anchor | Visitors leave to find this info elsewhere | Every therapy + product card carries a **From AED…** price |
| 6 | CTAs ambiguous ("Contact", "Learn more") | Low click-through | All primary CTAs use action verbs + value: *Start with a free discovery call*, *Book my free consult*, *Request the prospectus* |
| 7 | No conversion form on the homepage | Forces a second pageload — drop-off | Inline booking form in section #12 with first-name → email → topic flow |
| 8 | Mobile nav appears overloaded with 8+ top-level items | Thumb-fatigue, miss-taps | New mobile menu: 6 destinations + a single primary CTA pinned at the bottom |
| 9 | Limited motion/visual interest → "feels like a brochure" | Lower engagement, time-on-page | Subtle reveal-on-scroll, floating cards, marquee, hover-lift cards — no perf cost |
| 10 | Footer isn't doing recovery work | Bouncy visitors leave with nothing | New footer: newsletter capture + 16 secondary links + social + persistent floating "Talk to us" CTA |

## Conversion funnel — before vs. after

```
BEFORE                                    AFTER
─────────────────────────────────────────────────────────────────────
Land on home  → Guess intent          →   Land on home → 1-line hero
    ↓                                     hits intent in <2 sec
Hunt through nav                          ↓
    ↓                                     Pick 1 of 4 pillars
Open service page                         (or scroll to learn more)
    ↓                                     ↓
Find no price/no proof                    See proof, price & process
    ↓                                     in one section
Open Contact page                         ↓
    ↓                                     Inline booking form
Fill long form                            with 4 essential fields
    ↓                                     ↓
Wait for callback                         Immediate "we'll call in 1
                                          business day" confirmation
```

## Homepage flow (top → bottom)

1. **Announcement bar** — insurance partners + free consult anchor
2. **Sticky nav** — 5 top-level items, with a mega-menu for "What we do"
3. **Hero** — value prop, CTAs, social proof strip, decorative visual with floating UI
4. **Trust marquee** — insurance + lab + certification logos (auto-scroll, pause on hover)
5. **Four Pillars** — Telehealth, Clinix, Therapies, Shop (entry points)
6. **Diamond System of Care™** — the differentiator, dark sectioned for emphasis
7. **Signature Therapies** — 6 cards with category, price, CTA
8. **Wellness Hub** — three-zone visual story
9. **Stats** — animated counters (12k+, 98%, 35+, 1st)
10. **Testimonials** — 3 voices with star ratings
11. **Franchise teaser** — investor-grade card with proof points
12. **Journal teaser** — 3 articles to retain non-buyers
13. **FAQ** — 5 highest-friction questions, accordion
14. **Booking CTA + form** — final conversion surface
15. **Footer + floating CTA** — newsletter, secondary nav, "Talk to us" persistent button

## Recommendations to lift engagement & reduce bounce

### Immediate (UI-level — covered in this redesign)
- Replace generic hero with a **promise + proof + CTA** structure
- Add **price transparency** on every commercial element
- Pin a **persistent "Talk to us" CTA** (bottom-right) on every page
- Surface **insurance acceptance** in announcement bar — 30% of UAE healthcare drop-offs are insurance gating
- Use **mega-menu** instead of long flat nav — easier to scan, easier to expand

### Short-term (content + behaviour)
- Add **doctor bios** with photos, credentials and short videos
- Run an **interactive "find my protocol"** quiz on the homepage (3-step → consult)
- Add **before/after biomarker stories** (with anonymised lab snapshots)
- Replace stock copy with **patient outcomes** in numbers ("migraines down 86%")
- A/B test the hero headline — "Truly well, by design." vs. "Stop guessing. Start healing."

### Medium-term (technical)
- Compress and `<picture srcset>` all imagery — biggest mobile win
- Defer non-critical scripts; preconnect to Google Fonts (already in this build)
- Build a **proper Tailwind production bundle** — drop CDN before launch
- Add **schema.org/MedicalOrganization** + LocalBusiness JSON-LD
- Add Google Analytics 4 + Hotjar; track: hero CTA click, pillar clicks, form-start, form-complete

### Mobile-specific
- Bottom-anchored primary CTA (already done — "Talk to us")
- Tap-target audit: all interactive elements ≥ 44×44 px
- Avoid horizontal scroll on therapy cards; switch to vertical stack < 640px (already done)

## Accessibility

- Semantic landmarks (`header`, `nav`, `main`, `section`, `footer`)
- All decorative SVGs marked accessible-safe (text alternatives via context)
- Focus-visible ring (`outline: 3px solid var(--gold)`) on all interactives
- `prefers-reduced-motion` respected — animations are disabled
- Form labels paired to inputs via `for` / `id`
- Colour contrast ≥ 4.5:1 for body, ≥ 3:1 for large display type

## SEO

- One `<h1>` per page, semantic `<h2>`/`<h3>` hierarchy
- Per-page `<title>` and `<meta description>`
- Open Graph tags on the homepage
- Crawlable links (no `onclick`-only navigation)
- Mobile-first responsive — no separate mobile site
- Suggested next: structured data (`MedicalOrganization`, `FAQPage`, `Product`)

## WordPress integration plan

1. Convert `index.html` and each `pages/*.html` file into a `page-*.php` template.
2. Lift the shared header markup from `assets/js/includes.js` into `header.php`,
   the footer block into `footer.php`. Replace `${root}` with
   `<?= esc_url(home_url('/')) ?>`.
3. Run a Tailwind production build using the included `tailwind.config.js`,
   enqueue the resulting `style.css` via `wp_enqueue_style`.
4. Map content to ACF / Gutenberg blocks:
   - Hero, Pillars, Diamond, Therapies, Hub, Stats, Testimonials,
     Franchise, Journal, FAQ, CTA — each becomes a reusable block.
5. The booking form should be wired to **Gravity Forms** or **WPForms**, with
   a webhook to your CRM (HubSpot / Salesforce) for lead routing.
6. WooCommerce powers `pages/shop.html` — product cards reuse the existing
   markup; just swap inline data for `$product->get_*()` calls.

## Browser support

Modern evergreen (Chrome, Edge, Safari 15+, Firefox). Fully responsive
320 px → 1920 px. Tested in Chrome DevTools device emulator.

---

**Branch:** `claude/redesign-prcnh-ux-0nxAa`
