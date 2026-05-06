# Precision Health Group — Parent-Brand Redesign

Premium, editorial redesign of **prcnhealth.com**. Scope is intentionally tight:
the parent group owns five pages on this domain. The four sub-brand sites
(Clinix, Wellness, Shop) live on their own domains and are **linked out**, not
redesigned here.

## Scope — five internal pages

| Slug | File | Job |
| --- | --- | --- |
| `/` | `index.html` | Group story · brand portfolio · routing |
| `/about` | `pages/about.html` | Mission, principles, founder note, timeline |
| `/academy` | `pages/academy.html` | Self-paced curriculum · residency · enrolment |
| `/corporate-health-packages` | `pages/corporate-health-packages.html` | Three plans · KPIs · request a quote |
| `/talk-to-us` | `pages/talk-to-us.html` | Three-doors routing · patient form · tour booking · general contact |

## External destinations (linked, not designed)

- **Precision Clinix** → `https://prcnclinix.com/`
- **Precision Wellness** → `https://prcnwellness.com/`
- **Precision Shop** → `https://prcnstore.com/`

All external links carry `target="_blank" rel="noopener external"` so a
WordPress filter can rewrite them later if domains change.

## Run it

```bash
cd Prcnhealth
python3 -m http.server 8080
# → http://localhost:8080
```

Tailwind is loaded via CDN for instant preview. For production, run a real
Tailwind build using the included `tailwind.config.js`.

## Design system

| Token | Value | Notes |
| --- | --- | --- |
| Display | **DM Serif Display** | high-contrast modern serif |
| Body / UI | **Manrope** | geometric humanist |
| Labels / numerals | **JetBrains Mono** | editorial markers (`§ I`, `Vol. 06`) |
| Primary | `forest-700 #0E3B33` | deeper, holding-company feel |
| Accent | `clay-400 #C26B4A` | warm terracotta — distinct from any sub-brand |
| Page bg | `ivory #F8F4EC` (paper texture) | |
| Section band | `bone #EEE6D6` | quiet rhythm divider |

Layout grammar: editorial 12-col grids, `§` section markers, monospace eyebrow
labels, large display numerals as indices. Borders and dividers do most of
the structural work — shadows are minimal.

## Homepage section flow

1. **Hero** — controlled headline ("A house of four. Working as one."), eyebrow, dual CTAs, meta strip + 2×2 brand mosaic with rich layered tiles
2. Italic marquee strip
3. **§ I · Intro + ecosystem flow diagram** — how a journey moves through the group
4. **§ II · Brand spotlights** — four full editorial panels (Clinix · Wellness · Shop · Academy), each with multi-element visual composition (mock booking widget, schedule card, mock product grid, residency card)
5. **§ III · Group scorecard** — dark four-cell scorecard + press strip
6. **§ IV · Founder's note** + **§ V · Voices** (four testimonials inc. corporate)
7. **§ VI · Corporate + Academy cross-promo** — two side-by-side editorial cards
8. **§ VII · FAQ** — five group-level questions
9. **§ VIII · Contact banner** — three-doors routing block (Patients · Practitioners · Employers)

## Per-page density treatment

Every internal page follows the same shape: a controlled hero, then `§ I … § N`
sections separated by hairline borders or `bone` bands. Forms and listings
live on a 1-px `forest-200` grid background to read like a real magazine
spread instead of a card wall.

## Accessibility & SEO

- One `<h1>` per page; semantic `<section>`/`<article>`/`<nav>`.
- Focus rings via `:focus-visible` (clay outline, 2 px, 3 px offset).
- `prefers-reduced-motion` disables marquee + reveal animations.
- Per-page title + meta description, OG tags on the homepage.
- Crawlable links — no `onclick`-only navigation.
- External `↗` glyphs and `rel="noopener external"` on all out-links.

## WordPress integration plan

1. Convert each `*.html` into a `page-*.php` template.
2. Lift the shared header markup from `assets/js/includes.js` into
   `header.php`, the footer block into `footer.php`. Replace `${root}` with
   `<?= esc_url(home_url('/')) ?>` and the `EXT.*` URLs with theme options
   (Settings → Brand sites).
3. Build Tailwind for production using the included `tailwind.config.js`
   (`content` already includes WordPress paths). Enqueue via
   `wp_enqueue_style` + `wp_enqueue_script`.
4. Map content to Gutenberg blocks (one block per `§` section so editors
   can reorder freely): Hero · Marquee · Brand-Spotlight (×4) · Scorecard ·
   Founder · Voices · CrossPromo · FAQ · ThreeDoors.
5. The forms (Talk-to-us, Corporate, Academy enrol) wire to **Gravity
   Forms** or **WPForms** with HubSpot/Salesforce webhooks for routing.
6. Add JSON-LD structured data: `Organization`, `Course` (Academy),
   `MedicalOrganization` (link to Clinix), `FAQPage`.

## Browser support

Modern evergreen (Chrome, Edge, Safari 15+, Firefox). Fully responsive
320 px → 1920 px..

---

**Branch:** `claude/redesign-prcnh-ux-0nxAa`
