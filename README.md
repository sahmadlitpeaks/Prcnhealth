# Precision Health Group — Parent-Brand Redesign

Five-page redesign for **prcnhealth.com**. The other sub-brand sites (Clinix,
Wellness, Shop) live on their own domains and are linked out, not redesigned.

## Pages

| Slug | File |
| --- | --- |
| `/` | `index.html` |
| `/about` | `pages/about.html` |
| `/academy` | `pages/academy.html` |
| `/corporate-health-packages` | `pages/corporate-health-packages.html` |
| `/talk-to-us` | `pages/talk-to-us.html` |

## External destinations

- Precision Clinix → `https://prcnclinix.com/`
- Precision Wellness → `https://prcnwellness.com/`
- Precision Shop → `https://prcnstore.com/`

All carry `target="_blank" rel="noopener external"`.

## Run it

```bash
python3 -m http.server 8080
# → http://localhost:8080
```

Tailwind via CDN for preview. For production, build using `tailwind.config.js`.

## Voice & visual direction

The previous draft was busy and over-confident — too many sections, too many
flourishes, too much italic, magazine-cosplay markers (`§ I`, `Vol. 06`),
clay accent everywhere, and a hero that broke onto five lines.

This pass is the calm version:

- **Single declarative headlines** per section. No italic on the second half.
- **No `§` markers, no "Vol. 06"**. Plain uppercase labels, used sparingly.
- **Clay accent is rare** — the logo dot, one small map pin, that's it.
- **Six sections on the homepage** instead of ten. Generous whitespace
  carries the page; borders carry the structure.
- **Brand cards are simple** — image area, name, one line, arrow. No mock
  widgets, no fake schedules, no progress charts.
- **Forms simplified** to a vertical stack of `border-bottom` inputs. No
  card grids inside forms.

Reference points: Aesop, Function Health, Hermès Beauty, Loro Piana.

## Type & palette (unchanged)

| Token | Value |
| --- | --- |
| Display | DM Serif Display |
| Body / UI | Manrope |
| Primary | `forest-700 #0E3B33` |
| Accent (used sparingly) | `clay-400 #C26B4A` |
| Background | `ivory #F8F4EC` |
| Section band | `bone #EEE6D6` |

## Homepage flow

1. **Hero** — headline (the real tagline), one line of copy, two CTAs, one restrained visual panel
2. **Brands** — four simple cards, equal weight
3. **Quiet proof** — one paragraph, three numbers
4. **Corporate + Academy** — two cross-promo panels
5. **Contact** — three labelled rows
6. **Footer**

## WordPress integration

1. Convert each `*.html` into a `page-*.php` template.
2. Move shared header from `assets/js/includes.js` into `header.php`,
   footer into `footer.php`. Replace `${root}` with
   `<?= esc_url(home_url('/')) ?>` and `EXT.*` with theme options.
3. Build Tailwind for production with `tailwind.config.js`. Enqueue via
   `wp_enqueue_style` / `wp_enqueue_script`.
4. Each section maps cleanly to a Gutenberg block.
5. Forms wire to Gravity Forms / WPForms.

---

**Branch:** `claude/redesign-prcnh-ux-0nxAa`
