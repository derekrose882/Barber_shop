## Progress log
- (2026-10-05) Phase 0 scaffold pushed to `main`: folder structure, `css/tokens.css`, `js/data.js` (exact copy of PRD 5.4 + helpers), first working `base.css` / `components.css` / `main.js`, all five HTML shells with header/footer, notes files. Next: Phase 1 on `claude/foundation-home` (polish shared layer, build Home).
- (2026-10-05) Phase 1 on `claude/foundation-home`:
  - Home page complete per 7.1: hero (golden-hour wash, three out-of-sync swaying palm-shadow layers, ≤1.6s word-by-word load sequence in pure CSS so it can never leave content hidden, sticker, scroll cue), story with arch photo and a 2×2 stat ledger counting up from `SHOP.stats`, featured services, before/after slider (native range input + pointer drag, demo wiggle on first view, crossfading picker, "Book with X" link), team teaser, two-row reviews marquee with a Pause button (static grid under reduced motion), visit section with an illustrated SVG map, CTA band, golden-hour scroll overlay (0 → 0.08).
  - Shared fixes: arch reveals (`data-reveal="arch"`) now trigger from the parent (IntersectionObserver ignores fully clipped elements, so they stayed hidden); nav toggle X; `.divider-wave--flip` swaps colours automatically; page-hero palm shadow now renders (it was rotating out of its clipped box) and is softly blurred via the mask itself.
  - Checked at 375 / 768 / 1280 / 1440 / 1920: no horizontal scroll, no console errors. Verified slider drag + arrow keys, picker, counters, marquee pause, reduced motion, and JS-disabled rendering in headless Chromium.
  - Next (Phase 2): merge Mistral, then Replit, then this branch; handle requests in notes; Lighthouse run once real photos land.

- (2026-10-05) Phase 2 integration on `main` (Mistral + Claude branches were merged by Kayden; **no Replit branch exists**, so Barbers and Book are still empty Phase 0 shells):
  - Merge check: no conflict markers, no stray files, no `.replit` / `replit.nix` / `package.json`.
  - No requests in any notes file. Pasted Mistral's meta titles/descriptions into all five pages.
  - Services: fixed nonexistent `section--stucco-light` class, made the jump links actually stick under the header (the JS sticky observer had no CSS behind it), corrected the jump offset, removed the custom smooth-scroll JS (it ignored reduced motion), real dotted leaders, single-column "What to expect" on mobile, removed a duplicate accordion icon span.
  - 404: dropped a raw `clamp()` font size and duplicated base styles.
  - Logo/favicon redrawn to match 7.2 (palm frond crossed with a straight razor) on a light badge so it reads on the dark footer too.
  - `.hours-list` today-row contrast fix (a closed "today" was dimmed below AA). Lighthouse a11y now 100 on Home/Services/404.
  - `netlify.toml`: `publish = "."` instead of the ambiguous `"/"`.

## Contract notes for other agents (additions, nothing in the PRD changed)
- **Extra tokens** in `tokens.css`: `--font-display`, `--font-body`, `--leading-body`, `--leading-tight`, `--leading-heading`, `--measure`, alpha tints (`--color-mesquite-a10/a15/a40/a70`, `--color-stucco-a85`, `--color-stucco-light-a15`, `--color-rust-a10/a25`, `--color-adobe-a50`, `--color-marigold-a35/a60`, `--color-agave-a15`), `--gradient-golden`, and `--palm-frond` (an SVG palm frond you can use as a CSS `mask`, with `background-color` as the fill). Use these instead of raw rgba.
- **Header:** sticky and solid on every page except Home (fixed, transparent over the hero). Sticky things on your page should use `top: var(--header-h)`.
- **`.stars`:** `<span class="stars" role="img" aria-label="5 out of 5 stars"></span>` (CSS draws the five stars).
- **`.sticker`:** `<div class="sticker"><span class="sticker__text">Text ✦ more text ✦</span></div>`. `main.js` wraps the text around the circle. `--sticker-size` resizes it.
- **`.arch`:** wrapper around an `<img>`; `--arch-ratio` (default `4 / 5`) controls the shape.
- **`.divider-wave`:** markup and colour modifiers (`--from-*`, `--to-*`) documented at the top of the wave section in `components.css`.
- **`.accordion`:** works on `<details class="accordion">` or on a wrapper `.accordion` around several `<details>`.
- **`.chip`:** works on `span`, `a`, or `button`. Active state: `aria-pressed="true"`, `aria-current="true"`, or `.is-active`.
- **`main.js` picks up content you render later.** `data-reveal`, `data-reveal-stagger`, `data-count-to`, `data-hours-list`, and `.sticker` added by your page JS after load are handled automatically (MutationObserver).
- **Helpers exported from `main.js`:** `prefersReducedMotion()`, `formatTime('09:00') → '9 AM'`, `formatHours(hoursEntry)`.
- **404.html** has no page script (there is no `js/pages/404.js` in 5.1).

## Requests for Claude Code
- (none yet)

## Known issues
- Barbers and Book pages not built (Replit branch never arrived).
- Home's Visit section repeats the address/phone/email as static HTML (same as the footer contract) so it reads without JS.
- Lighthouse (local python server, no gzip/cache, photos missing): Home 88 / 97→100 / 96, Services 90 / 100 / 100, 404 93 / 100 / 100. Perf is held back by the dev server and render-blocking Google Fonts; re-run on the Netlify deploy. Best Practices on Home loses points only for the missing-photo 404s.
- `assets/logo.svg`, `assets/favicon.svg`, `netlify.toml`, `robots.txt`, `README.md` are Mistral's and not created in Phase 0 (to avoid add/add merge conflicts). Logo shows as an empty 36px box until they land.
- Photos in `assets/img/` don't exist yet (Kayden).
