# Palm & Blade: Demo Barbershop Website PRD

**Project owner:** Next Door Web Development (Kayden & Derek)
**Version:** 1.0 (October 2026)
**Purpose:** A portfolio demo site that shows barbershop owners in East County San Diego what a modern, beautiful shop website looks like.

---

## 0. Read this first (all agents)

Three AI agents build this site **at the same time** on separate git branches. This only works if everyone follows the same contracts.

1. **Read this whole document once**, then re-read your own role section (Section 6) before every work session.
2. **Section 4 (Design System) and Section 5 (Shared Contracts) are law.** Do not invent new colors, fonts, class names, or data shapes. If you need something that isn't defined, write a request in your notes file (see 6.5) and use the closest existing option in the meantime.
3. **Only edit files you own** (see the ownership table in 6.4). Editing someone else's file causes merge conflicts and wastes everyone's time.
4. **Never edit this PRD.** Only Kayden edits it.
5. **No frameworks, no npm, no build step.** Plain HTML, CSS, and vanilla JavaScript (ES modules). The site must work when served from any static host.

---

## 1. Product overview

### 1.1 Who this is for
The real audience is a **barbershop owner who knows nothing about code**. They will open this on their phone, probably between clients, and decide in about five seconds whether it looks impressive. They judge with their eyes, not with Lighthouse scores. So the site must:

- Look premium and feel alive the moment it loads.
- Feel like a real neighborhood shop, not a template.
- Be fast and smooth on an average phone (a stuttering animation looks cheap).
- Make the owner think: "I want that for my shop."

### 1.2 Goals
- A visually striking, warm, SoCal-flavored multi-page site with signature animations.
- Every page fully works on mobile (375px wide) and desktop.
- A booking flow that feels real and satisfying.
- Content realistic enough that the shop feels like it exists.

### 1.3 Non-goals
- No real booking backend, accounts, payments, CMS, or database.
- No real business data. Everything is fictional.
- No search-engine ranking. The site uses `noindex` so Google never lists a fake shop.

### 1.4 Success criteria
- Kayden can show it to an owner on a phone and it impresses on first load.
- Lighthouse (mobile): Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95.
- No horizontal scrolling on any page at 375px.
- Every interactive element works with keyboard and touch.
- `prefers-reduced-motion` turns off non-essential motion everywhere.

---

## 2. Site map

| Page | File | Owner |
|---|---|---|
| Home | `index.html` | Claude Code |
| Services | `services.html` | Mistral |
| Barbers | `barbers.html` | Replit Agent |
| Book | `book.html` | Replit Agent |
| 404 | `404.html` | Mistral |

All internal links use **relative paths** (`services.html`, not `/services.html`) so the site works on both Netlify and GitHub Pages.

---

## 3. Brand & content (the fake shop)

All content below is canonical. Copy it exactly. Structured content (services, barbers, reviews, gallery, hours) also lives in `js/data.js` (Section 5.4), and pages should render from that file instead of hardcoding it.

### 3.1 Identity
- **Name:** Palm & Blade
- **Tagline:** Sharp cuts, slow afternoons.
- **Logo concept:** A single palm frond crossed with a straight razor, simple line art. Wordmark "Palm & Blade" in the display font.
- **Est.:** 2014
- **Story (Home page, ~60 words):** Marco Reyes opened Palm & Blade in 2014 with one chair, a secondhand stereo, and a simple idea: a barbershop should feel like a backyard on a Sunday. Twelve years later there are four chairs, the stereo still works, and the fridge always has cold water. Come in for the cut. Stay for the conversation.

### 3.2 Contact (all fictional)
- **Address:** 1867 Sunset Mesa Dr, El Cajon, CA 92020 (fictional street)
- **Phone:** (619) 555-0147 (555-01xx numbers are reserved for fiction)
- **Email:** hello@palmandblade.com
- **Instagram:** @palmandblade (link to `#`, never to a real profile)

### 3.3 Hours
| Day | Hours |
|---|---|
| Monday | Closed |
| Tuesday–Friday | 9:00 AM – 7:00 PM |
| Saturday | 8:00 AM – 5:00 PM |
| Sunday | 10:00 AM – 3:00 PM |

### 3.4 Services
**Cuts**
| Service | Price | Time | Description |
|---|---|---|---|
| Classic Cut | $35 | 45 min | Clippers and shears, tailored to you, finished with a hot-towel neck shave. |
| Skin Fade | $40 | 45 min | Bald to blended, with a sharp lineup. |
| Taper Fade | $38 | 45 min | Clean, low-key taper that grows out well. |
| Scissor Cut | $45 | 60 min | Longer styles and textured crops, all shears. |
| Kids' Cut (12 & under) | $25 | 30 min | Patient, quick, and lollipop included. |
| Senior Cut (65+) | $25 | 30 min | A classic cut at a kinder price. |

**Beard & shave**
| Service | Price | Time | Description |
|---|---|---|---|
| Beard Trim & Lineup | $20 | 20 min | Even length, crisp edges. |
| Beard Sculpt | $30 | 30 min | Shaping, straight-razor lines, hot towel, and beard oil. |
| Hot Towel Shave | $35 | 40 min | Straight razor, three hot towels, cold-towel finish. |

**Combos**
| Service | Price | Time | Description |
|---|---|---|---|
| Cut + Beard | $50 | 60 min | Any cut plus a beard trim and lineup. |
| The Works | $65 | 75 min | Any cut, beard sculpt, hot towel, and a scalp massage. |

**Add-ons**
| Add-on | Price | Time |
|---|---|---|
| Design / freestyle | +$10 | 15 min |
| Eyebrow cleanup | +$5 | 5 min |

### 3.5 Barbers
1. **Marco Reyes**, Owner. 14 years. Specialties: classic cuts, tapers, hot towel shaves. Works Tue–Sat.
   Bio: Marco started cutting hair in his garage at sixteen and never stopped. He opened Palm & Blade to build the kind of shop he grew up in, where everybody knows your name and nobody rushes you.
   Quote: "A good cut is ten minutes of skill and thirty of listening."
2. **Denise "Dee" Washington**. 8 years. Specialties: skin fades, designs, line work. Works Tue–Sat.
   Bio: Dee is the shop's fade specialist and its resident artist. If you want a freestyle design, a part that could cut glass, or a fade so smooth it looks airbrushed, she's your barber.
   Quote: "If you can see the line, I'm not done."
3. **Tommy Nguyen**. 6 years. Specialties: textured crops, scissor work, modern styles. Works Wed–Sun.
   Bio: Tommy keeps the shop current. He trained in scissor work in Los Angeles and loves turning "I don't know, something different" into a style you'll get compliments on all week.
   Quote: "Bring me a photo, or bring me nothing. Both work."
4. **Sami Haddad**. 10 years. Specialties: beard sculpting, straight-razor shaves. Works Tue, Thu–Sun.
   Bio: Sami's family has been cutting hair in El Cajon for two generations. He's the beard expert, and his hot towel shave has a waitlist of regulars who swear by it.
   Quote: "Patience and a sharp razor. That's the whole secret."

### 3.6 Reviews (all 5 stars)
- "Dee is an artist. Best fade I've had in San Diego, period." — Jordan M.
- "Brought my 6-year-old in screaming, he left asking when he can come back. Marco is a saint." — Alicia R.
- "Sami's hot towel shave is worth every penny. Felt like a new man." — Chris T.
- "Chill vibes, great music, zero wait with an appointment. My new spot." — Andre L.
- "Tommy actually listened to what I wanted. Rare." — Kevin P.
- "Been going to Marco for nine years. Wouldn't trust anyone else." — Luis G.
- "Got a design for my birthday and the whole office asked who did it." — Isaiah W.
- "Clean shop, fair prices, and they remembered my name the second time." — Daniel K.

### 3.7 FAQ (Services page)
- **Do you take walk-ins?** Yes, when a chair's open. Booking ahead guarantees your spot, especially on Saturdays.
- **How do I pay?** Cash, card, Apple Pay, and Google Pay.
- **What if I need to cancel?** No problem. Just give us a call at least two hours before your appointment.
- **Is there parking?** Free parking in the lot behind the shop.
- **Do you cut kids' hair?** All the time. Kids' cuts are $25 for ages 12 and under.

### 3.8 Demo disclaimer
Every page footer includes: "Palm & Blade is a fictional shop. Demo site designed and built by Next Door Web Development." The booking confirmation also tells the user no real appointment was made.

---

## 4. Design system

### 4.1 Direction: "Desert motel at golden hour"
SoCal warmth from East County specifically: sun-baked stucco, adobe walls, agave, faded motel signs, long late-afternoon shadows. It should feel relaxed and warm, never corporate.

**Principles**
- **One loud thing per screen.** The display font and the palm-shadow hero are the bold moves. Everything around them stays calm.
- **Motion has a purpose.** Concentrate animation into signature moments (hero load, before/after slider, barber card flips, booking flow, confirmation) instead of making every element fade in. A few great moments beat fifty generic ones.
- **Arches, not boxes.** Photos sit in arched frames like mission-style windows. Cards are allowed, but don't chop every section into identical rounded cards.
- **Left-aligned by default.** Center only hero headlines, CTA bands, and short statements.
- **Plain, friendly copy.** Sentence case everywhere. No all-caps labels. No "→" stuck on button text.

### 4.2 Color tokens
| Token | Hex | Use |
|---|---|---|
| `--color-stucco` | `#F3E6D8` | Main page background |
| `--color-stucco-light` | `#FAF4EC` | Raised surfaces, cards |
| `--color-adobe` | `#B5532C` | Brand color, large display text, decorative shapes |
| `--color-rust` | `#8C3B1E` | Button backgrounds, links, small brand text (passes AA on stucco) |
| `--color-agave` | `#6F8466` | Secondary accent, chips, success states |
| `--color-sky` | `#9DB8C4` | Cool accent, used sparingly |
| `--color-marigold` | `#E8A33D` | Stars, highlights, sun glow |
| `--color-mesquite` | `#2B1D16` | Body text and dark sections |
| `--color-mesquite-soft` | `#5E4A3D` | Secondary text |

**Contrast rules:** Small text on stucco uses `--color-mesquite`, `--color-mesquite-soft`, or `--color-rust` only. White or stucco-light text goes on `--color-rust` or `--color-mesquite` backgrounds. `--color-adobe` is for text 24px and larger, or decoration.

### 4.3 Typography
- **Display:** [Shrikhand](https://fonts.google.com/specimen/Shrikhand) (Google Fonts). A heavy, retro, motel-sign face. Use for the logo wordmark, `h1`, `h2`, prices on the Services menu, and big numbers. Never for body text or anything under 24px.
- **Body & UI:** [Instrument Sans](https://fonts.google.com/specimen/Instrument+Sans) (Google Fonts), weights 400, 500, 600, 700. Use for everything else, including `h3`/`h4` (600 weight).

Font link (identical on every page):
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=Shrikhand&display=swap" rel="stylesheet">
```

**Type scale tokens**
| Token | Value |
|---|---|
| `--text-sm` | `0.875rem` |
| `--text-base` | `1.0625rem` |
| `--text-lg` | `1.25rem` |
| `--text-xl` | `clamp(1.5rem, 1.2rem + 1.2vw, 2rem)` |
| `--text-2xl` | `clamp(2rem, 1.5rem + 2.5vw, 3.25rem)` |
| `--text-3xl` | `clamp(2.75rem, 1.8rem + 4.5vw, 5.5rem)` |

Body line-height 1.6. Headings line-height 1.05–1.2. Max line length for paragraphs: `65ch`.

### 4.4 Spacing, radius, shadow, motion tokens
```css
--space-1: 0.25rem;  --space-2: 0.5rem;  --space-3: 0.75rem;
--space-4: 1rem;     --space-5: 1.5rem;  --space-6: 2rem;
--space-7: 3rem;     --space-8: 4.5rem;  --space-9: 7rem;

--radius-sm: 6px;
--radius-md: 14px;
--radius-pill: 999px;

--shadow-warm: 0 12px 32px -8px rgba(140, 59, 30, 0.22);
--shadow-lift: 0 20px 44px -12px rgba(43, 29, 22, 0.30);

--ease-out: cubic-bezier(0.22, 1, 0.36, 1);
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
--dur-fast: 180ms;
--dur-med: 450ms;
--dur-slow: 900ms;

--container: 1200px;
--header-h: 72px;
```

### 4.5 Texture & signature details (implemented by Claude Code in base/components CSS)
- **Film grain:** A subtle SVG-noise overlay on `body::after` (opacity ~0.05, `pointer-events: none`).
- **Arch frames:** `.arch` class gives images a rounded mission-arch top.
- **Wave dividers:** `.divider-wave` inline SVG between sections that change background color.
- **Sticker badge:** `.sticker` is a circular badge with text around the edge, slowly rotating.
- **Page transitions:** Cross-document View Transitions (`@view-transition { navigation: auto; }`) give a smooth fade between pages in supporting browsers. Other browsers just navigate normally.

---

## 5. Shared contracts

### 5.1 File structure
```
/
├── index.html
├── services.html
├── barbers.html
├── book.html
├── 404.html
├── netlify.toml
├── robots.txt
├── README.md
├── PRD.md
├── css/
│   ├── tokens.css          # design tokens only (Section 4)
│   ├── base.css            # reset, typography, global elements, grain, view transitions
│   ├── components.css      # shared components (Section 5.3)
│   └── pages/
│       ├── home.css
│       ├── services.css
│       ├── barbers.css
│       ├── book.css
│       └── 404.css
├── js/
│   ├── data.js             # all shared content (Section 5.4)
│   ├── main.js             # shared behavior: nav, reveals, counters, today's hours
│   └── pages/
│       ├── home.js
│       ├── services.js
│       ├── barbers.js
│       └── book.js
├── assets/
│   ├── favicon.svg
│   ├── logo.svg
│   └── img/                # photos (Section 8), plus CREDITS.md
└── notes/
    ├── claude.md
    ├── replit.md
    └── mistral.md
```

### 5.2 Page template
Every page uses this exact skeleton. Only the parts marked `PAGE-SPECIFIC` change.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex, nofollow">
  <title>PAGE-SPECIFIC | Palm & Blade Barbershop, El Cajon</title>
  <meta name="description" content="PAGE-SPECIFIC">
  <meta name="theme-color" content="#F3E6D8">
  <link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
  <!-- fonts (Section 4.3) -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=Shrikhand&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/tokens.css">
  <link rel="stylesheet" href="css/base.css">
  <link rel="stylesheet" href="css/components.css">
  <link rel="stylesheet" href="css/pages/PAGE-SPECIFIC.css">
</head>
<body data-page="PAGE-SPECIFIC">
  <!-- HEADER (Section 5.2.1) -->
  <main id="main">
    <!-- PAGE-SPECIFIC content -->
  </main>
  <!-- FOOTER (Section 5.2.2) -->
  <script type="module" src="js/main.js"></script>
  <script type="module" src="js/pages/PAGE-SPECIFIC.js"></script>
</body>
</html>
```

`data-page` values: `home`, `services`, `barbers`, `book`, `404`. `main.js` uses this to set `aria-current="page"` on the matching nav link automatically.

> ES modules don't load from `file://`. Preview with a local server: VS Code Live Server, `python3 -m http.server`, or `npx serve`.

#### 5.2.1 Header markup
```html
<a class="skip-link" href="#main">Skip to content</a>
<header class="site-header" data-header>
  <div class="container site-header__inner">
    <a class="logo" href="index.html" aria-label="Palm & Blade home">
      <img class="logo__mark" src="assets/logo.svg" alt="" width="36" height="36">
      <span class="logo__text">Palm &amp; Blade</span>
    </a>
    <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav" data-nav-toggle>
      <span class="sr-only">Open menu</span>
      <span class="nav-toggle__bar"></span>
      <span class="nav-toggle__bar"></span>
    </button>
    <nav id="site-nav" class="site-nav" data-nav aria-label="Main">
      <ul class="site-nav__list">
        <li><a class="site-nav__link" href="index.html" data-nav-link="home">Home</a></li>
        <li><a class="site-nav__link" href="services.html" data-nav-link="services">Services</a></li>
        <li><a class="site-nav__link" href="barbers.html" data-nav-link="barbers">Barbers</a></li>
        <li><a class="btn btn--primary btn--sm" href="book.html" data-nav-link="book">Book a chair</a></li>
      </ul>
    </nav>
  </div>
</header>
```
Behavior (in `main.js`): header is transparent over the hero on Home and becomes solid stucco with a shadow after scrolling 40px (`.site-header.is-scrolled`). On mobile, the toggle opens a full-screen menu with staggered link animation. Escape closes it.

#### 5.2.2 Footer markup
```html
<footer class="site-footer">
  <div class="container site-footer__grid">
    <div class="site-footer__brand">
      <a class="logo logo--light" href="index.html">
        <img class="logo__mark" src="assets/logo.svg" alt="" width="36" height="36">
        <span class="logo__text">Palm &amp; Blade</span>
      </a>
      <p>Sharp cuts, slow afternoons.</p>
    </div>
    <div>
      <h2 class="site-footer__heading">Visit</h2>
      <address>1867 Sunset Mesa Dr<br>El Cajon, CA 92020</address>
      <p><a href="tel:+16195550147">(619) 555-0147</a><br>
         <a href="mailto:hello@palmandblade.com">hello@palmandblade.com</a></p>
    </div>
    <div>
      <h2 class="site-footer__heading">Hours</h2>
      <ul class="hours-list" data-hours-list></ul>
    </div>
    <div>
      <h2 class="site-footer__heading">Follow</h2>
      <p><a href="#">Instagram @palmandblade</a></p>
      <a class="btn btn--light btn--sm" href="book.html">Book a chair</a>
    </div>
  </div>
  <p class="site-footer__demo container">Palm &amp; Blade is a fictional shop. Demo site designed and built by Next Door Web Development.</p>
</footer>
```
`main.js` fills every `[data-hours-list]` from `HOURS` in `data.js` and adds `.is-today` to the current day.

### 5.3 Shared component classes (defined by Claude Code in `components.css`)
Use these. Don't redefine them in page CSS. You may add page-scoped modifiers in your own page CSS (e.g. `.services-menu .card { ... }`).

| Class | What it is |
|---|---|
| `.container` | Centered wrapper, max-width `--container`, side padding `--space-5` |
| `.section` | Vertical section padding (`--space-8` mobile, `--space-9` desktop) |
| `.section--stucco` / `--light` / `--dark` / `--adobe` | Section background variants (`--dark` = mesquite bg + stucco-light text; `--adobe` = rust bg + stucco-light text) |
| `.page-hero` | Top banner for Services, Barbers, Book. Contains `h1` and `.page-hero__lead`. Warm gradient + palm shadow. |
| `.lead` | Larger intro paragraph |
| `.btn` + `.btn--primary` / `--ghost` / `--light` + `.btn--sm` / `--lg` | Buttons. Primary = rust bg. Ghost = outline. Light = stucco-light bg for dark sections. Pill-shaped with a slight lift on hover. |
| `.card` | Stucco-light surface, `--radius-md`, `--shadow-warm` |
| `.chip` | Small pill label (agave tint) for specialties, durations, etc. |
| `.arch` | Arched image frame. Put on a wrapper around an `<img>`. |
| `.divider-wave` | Wave SVG divider. Add `.divider-wave--flip` to flip vertically. |
| `.sticker` | Rotating circular text badge |
| `.stars` | Row of 5 marigold stars. `aria-label="5 out of 5 stars"`. |
| `.cta-band` | Full-width rust band with a big centered heading and a button |
| `.accordion` | Styled `<details>`/`<summary>` with animated open/close |
| `.sr-only` | Visually hidden, readable by screen readers |
| `.skip-link` | Skip-to-content link, visible on focus |

**CTA band markup** (reuse at the bottom of Services, Barbers):
```html
<section class="cta-band">
  <div class="container">
    <h2>Your chair's waiting.</h2>
    <a class="btn btn--light btn--lg" href="book.html">Book a chair</a>
  </div>
</section>
```

**Page hero markup:**
```html
<section class="page-hero">
  <div class="container">
    <h1>PAGE-SPECIFIC</h1>
    <p class="page-hero__lead">PAGE-SPECIFIC</p>
  </div>
</section>
```

#### Shared behaviors (in `main.js`, opt-in with data attributes)
| Attribute | Effect |
|---|---|
| `data-reveal` | Element animates in once when scrolled into view. Values: `""` (fade up, default), `"left"`, `"right"`, `"scale"`, `"arch"` (clip-path reveal for `.arch` images). **Use on key elements only, not every element.** |
| `data-reveal-delay="150"` | Delay in ms |
| `data-reveal-stagger` | Put on a parent: its direct children reveal one after another |
| `data-count-to="30000"` | Number counts up from 0 when visible. Optional `data-count-suffix="+"`, `data-count-decimals="1"`. |
| `data-hours-list` | Filled with hours (see footer) |

All of these do nothing (content simply shows) when `prefers-reduced-motion: reduce` is set or JS fails. **Content must never be invisible without JS.** `main.js` adds `.js` to `<html>`; hidden-before-reveal styles are scoped under `.js`.

### 5.4 `js/data.js` (single source of truth)
Claude Code creates this file in Phase 0 with exactly this content. Pages import what they need:
`import { SERVICES, BARBERS } from '../data.js';`

```js
// js/data.js
export const SHOP = {
  name: 'Palm & Blade',
  tagline: 'Sharp cuts, slow afternoons.',
  established: 2014,
  address: { street: '1867 Sunset Mesa Dr', city: 'El Cajon', state: 'CA', zip: '92020' },
  phone: '(619) 555-0147',
  phoneHref: 'tel:+16195550147',
  email: 'hello@palmandblade.com',
  instagram: '@palmandblade',
  stats: { years: 12, cuts: 30000, barbers: 4, rating: 4.9 },
};

// day: 0 = Sunday ... 6 = Saturday. open/close in 24h "HH:MM". null = closed.
export const HOURS = [
  { day: 0, label: 'Sunday',    open: '10:00', close: '15:00' },
  { day: 1, label: 'Monday',    open: null,    close: null },
  { day: 2, label: 'Tuesday',   open: '09:00', close: '19:00' },
  { day: 3, label: 'Wednesday', open: '09:00', close: '19:00' },
  { day: 4, label: 'Thursday',  open: '09:00', close: '19:00' },
  { day: 5, label: 'Friday',    open: '09:00', close: '19:00' },
  { day: 6, label: 'Saturday',  open: '08:00', close: '17:00' },
];

export const SERVICE_CATEGORIES = [
  { id: 'cuts',   label: 'Cuts' },
  { id: 'beard',  label: 'Beard & shave' },
  { id: 'combos', label: 'Combos' },
  { id: 'addons', label: 'Add-ons' },
];

export const SERVICES = [
  { id: 'classic-cut',  category: 'cuts',   name: 'Classic Cut',            price: 35, minutes: 45, featured: true,  description: 'Clippers and shears, tailored to you, finished with a hot-towel neck shave.' },
  { id: 'skin-fade',    category: 'cuts',   name: 'Skin Fade',              price: 40, minutes: 45, featured: true,  description: 'Bald to blended, with a sharp lineup.' },
  { id: 'taper-fade',   category: 'cuts',   name: 'Taper Fade',             price: 38, minutes: 45, featured: false, description: 'Clean, low-key taper that grows out well.' },
  { id: 'scissor-cut',  category: 'cuts',   name: 'Scissor Cut',            price: 45, minutes: 60, featured: false, description: 'Longer styles and textured crops, all shears.' },
  { id: 'kids-cut',     category: 'cuts',   name: "Kids' Cut (12 & under)", price: 25, minutes: 30, featured: false, description: 'Patient, quick, and lollipop included.' },
  { id: 'senior-cut',   category: 'cuts',   name: 'Senior Cut (65+)',       price: 25, minutes: 30, featured: false, description: 'A classic cut at a kinder price.' },
  { id: 'beard-trim',   category: 'beard',  name: 'Beard Trim & Lineup',    price: 20, minutes: 20, featured: false, description: 'Even length, crisp edges.' },
  { id: 'beard-sculpt', category: 'beard',  name: 'Beard Sculpt',           price: 30, minutes: 30, featured: false, description: 'Shaping, straight-razor lines, hot towel, and beard oil.' },
  { id: 'hot-towel',    category: 'beard',  name: 'Hot Towel Shave',        price: 35, minutes: 40, featured: true,  description: 'Straight razor, three hot towels, cold-towel finish.' },
  { id: 'cut-beard',    category: 'combos', name: 'Cut + Beard',            price: 50, minutes: 60, featured: false, description: 'Any cut plus a beard trim and lineup.' },
  { id: 'the-works',    category: 'combos', name: 'The Works',              price: 65, minutes: 75, featured: false, description: 'Any cut, beard sculpt, hot towel, and a scalp massage.' },
  { id: 'design',       category: 'addons', name: 'Design / freestyle',     price: 10, minutes: 15, featured: false, addon: true, description: 'Lines, parts, or a freestyle design.' },
  { id: 'eyebrows',     category: 'addons', name: 'Eyebrow cleanup',        price: 5,  minutes: 5,  featured: false, addon: true, description: 'Quick, clean, natural.' },
];

export const BARBERS = [
  {
    id: 'marco', name: 'Marco Reyes', firstName: 'Marco', role: 'Owner', years: 14,
    specialties: ['Classic cuts', 'Tapers', 'Hot towel shaves'],
    days: [2, 3, 4, 5, 6],
    bio: 'Marco started cutting hair in his garage at sixteen and never stopped. He opened Palm & Blade to build the kind of shop he grew up in, where everybody knows your name and nobody rushes you.',
    quote: 'A good cut is ten minutes of skill and thirty of listening.',
    instagram: '@marco.cuts', image: 'assets/img/barber-marco.webp',
  },
  {
    id: 'dee', name: 'Denise "Dee" Washington', firstName: 'Dee', role: 'Fade specialist', years: 8,
    specialties: ['Skin fades', 'Designs', 'Line work'],
    days: [2, 3, 4, 5, 6],
    bio: "Dee is the shop's fade specialist and its resident artist. If you want a freestyle design, a part that could cut glass, or a fade so smooth it looks airbrushed, she's your barber.",
    quote: "If you can see the line, I'm not done.",
    instagram: '@deefades', image: 'assets/img/barber-dee.webp',
  },
  {
    id: 'tommy', name: 'Tommy Nguyen', firstName: 'Tommy', role: 'Stylist', years: 6,
    specialties: ['Textured crops', 'Scissor work', 'Modern styles'],
    days: [0, 3, 4, 5, 6],
    bio: 'Tommy keeps the shop current. He trained in scissor work in Los Angeles and loves turning "I don\'t know, something different" into a style you\'ll get compliments on all week.',
    quote: 'Bring me a photo, or bring me nothing. Both work.',
    instagram: '@tommy.shears', image: 'assets/img/barber-tommy.webp',
  },
  {
    id: 'sami', name: 'Sami Haddad', firstName: 'Sami', role: 'Beard & shave specialist', years: 10,
    specialties: ['Beard sculpting', 'Straight-razor shaves'],
    days: [0, 2, 4, 5, 6],
    bio: "Sami's family has been cutting hair in El Cajon for two generations. He's the beard expert, and his hot towel shave has a waitlist of regulars who swear by it.",
    quote: "Patience and a sharp razor. That's the whole secret.",
    instagram: '@sami.razor', image: 'assets/img/barber-sami.webp',
  },
];

export const REVIEWS = [
  { name: 'Jordan M.', barber: 'dee',   text: "Dee is an artist. Best fade I've had in San Diego, period." },
  { name: 'Alicia R.', barber: 'marco', text: 'Brought my 6-year-old in screaming, he left asking when he can come back. Marco is a saint.' },
  { name: 'Chris T.',  barber: 'sami',  text: "Sami's hot towel shave is worth every penny. Felt like a new man." },
  { name: 'Andre L.',  barber: null,    text: 'Chill vibes, great music, zero wait with an appointment. My new spot.' },
  { name: 'Kevin P.',  barber: 'tommy', text: 'Tommy actually listened to what I wanted. Rare.' },
  { name: 'Luis G.',   barber: 'marco', text: "Been going to Marco for nine years. Wouldn't trust anyone else." },
  { name: 'Isaiah W.', barber: 'dee',   text: 'Got a design for my birthday and the whole office asked who did it.' },
  { name: 'Daniel K.', barber: null,    text: 'Clean shop, fair prices, and they remembered my name the second time.' },
];

// Before/after pairs for the Home slider and the Barbers gallery.
export const GALLERY = [
  { id: 'cut-01', style: 'Low taper fade',           barber: 'marco', before: 'assets/img/cut-01-before.webp', after: 'assets/img/cut-01-after.webp' },
  { id: 'cut-02', style: 'Burst fade with design',   barber: 'dee',   before: 'assets/img/cut-02-before.webp', after: 'assets/img/cut-02-after.webp' },
  { id: 'cut-03', style: 'Textured crop',            barber: 'tommy', before: 'assets/img/cut-03-before.webp', after: 'assets/img/cut-03-after.webp' },
  { id: 'cut-04', style: 'Beard sculpt and lineup',  barber: 'sami',  before: 'assets/img/cut-04-before.webp', after: 'assets/img/cut-04-after.webp' },
  { id: 'cut-05', style: 'Classic side part',        barber: 'marco', before: 'assets/img/cut-05-before.webp', after: 'assets/img/cut-05-after.webp' },
  { id: 'cut-06', style: "Kids' skin fade",          barber: 'dee',   before: 'assets/img/cut-06-before.webp', after: 'assets/img/cut-06-after.webp' },
];

export const FAQ = [
  { q: 'Do you take walk-ins?', a: "Yes, when a chair's open. Booking ahead guarantees your spot, especially on Saturdays." },
  { q: 'How do I pay?', a: 'Cash, card, Apple Pay, and Google Pay.' },
  { q: 'What if I need to cancel?', a: 'No problem. Just give us a call at least two hours before your appointment.' },
  { q: 'Is there parking?', a: 'Free parking in the lot behind the shop.' },
  { q: "Do you cut kids' hair?", a: "All the time. Kids' cuts are $25 for ages 12 and under." },
];
```

**Helpers** (also exported from `data.js`):
```js
export const formatPrice = (n, addon = false) => `${addon ? '+' : ''}$${n}`;
export const getService = (id) => SERVICES.find((s) => s.id === id);
export const getBarber  = (id) => BARBERS.find((b) => b.id === id);
```

---

## 6. Team roles & parallel workflow

### 6.1 Role summary
| Agent | Rank | Role | Branch |
|---|---|---|---|
| **Claude Code** | Lead | Foundation (design system, shared JS, data), Home page, final integration & QA | `claude/foundation-home` |
| **Replit Agent** | Senior | Barbers page and Book page (the most logic-heavy features) | `replit/barbers-book` |
| **Mistral** | Support | Services page, 404 page, favicon/logo, SEO meta, deploy config, README | `mistral/services-extras` |

### 6.2 Timeline
**Phase 0: Scaffold (Claude Code, target ≤ 15 minutes, pushed straight to `main`)**
Claude Code creates and pushes to `main`:
- The full folder structure from 5.1, with empty placeholder files for every page CSS/JS file.
- `css/tokens.css` (complete), `js/data.js` (complete, exactly as 5.4).
- First working versions of `css/base.css`, `css/components.css`, and `js/main.js` (every class and data attribute in 5.3 must exist, even if the styling gets polished later).
- All five HTML files with the full template (5.2), header, footer, and an empty `<main>`.
- The three `notes/*.md` files.

**Everyone starts at the same time.** Replit and Mistral don't wait for Phase 0. They read the PRD and start building their page CSS and JS files right away, since every contract they need is already written here. As soon as Phase 0 lands on `main`, they run `git pull origin main` (or merge `main` into their branch) and continue.

**Phase 1: Parallel build (all three agents)**
Each agent builds its own pages on its own branch. Commit small and often. Push at least every major feature.

**Phase 2: Integration (Claude Code)**
When an agent finishes, Kayden opens a pull request into `main`. Claude Code reviews and merges in this order: Mistral, then Replit, then its own Home work. Claude Code fixes cross-page inconsistencies, handles requests from the notes files, and polishes shared components.

**Phase 3: QA (Claude Code + Kayden)**
Claude Code runs the checklist in Section 9. Kayden tests on a real phone and deploys.

### 6.3 Rules for every agent
1. **Only edit files you own** (6.4). After Phase 0, page HTML files belong to the page owner, including their header/footer copy. Don't change the header/footer markup; Claude Code handles any changes in Phase 2.
2. **Never rename, move, or delete files.**
3. **Use tokens for every color, font, space, radius, shadow, and duration.** No raw hex codes or font names in page CSS.
4. **Render content from `js/data.js`.** Never hardcode prices, barber info, or hours that also exist in data.
5. **Mobile-first.** Write base styles for 375px, then add `@media (min-width: 768px)` and `@media (min-width: 1100px)`.
6. **Accessibility is required:** semantic HTML, real `<button>`s for actions, visible focus states, `alt` text on every content image, labels on every form field, nothing that only works on hover.
7. **Respect reduced motion:** wrap your page's non-essential animations in `@media (prefers-reduced-motion: no-preference) { ... }` or check `matchMedia` in JS.
8. **Performance:** `loading="lazy"` and `width`/`height` on every image below the fold. Animate only `transform`, `opacity`, and `clip-path`. No layout-thrashing scroll listeners; use `IntersectionObserver` or `requestAnimationFrame`.
9. **No external libraries or CDNs** besides Google Fonts.
10. **Commit messages:** `[agent] page: what changed`, e.g. `[replit] book: add date picker step`.
11. **Log your progress** in your notes file at the end of every session.

### 6.4 File ownership
| File(s) | Owner |
|---|---|
| `css/tokens.css`, `css/base.css`, `css/components.css` | Claude Code |
| `js/data.js`, `js/main.js` | Claude Code |
| `index.html`, `css/pages/home.css`, `js/pages/home.js` | Claude Code |
| `notes/claude.md` | Claude Code |
| `barbers.html`, `css/pages/barbers.css`, `js/pages/barbers.js` | Replit Agent |
| `book.html`, `css/pages/book.css`, `js/pages/book.js` | Replit Agent |
| `notes/replit.md` | Replit Agent |
| `services.html`, `css/pages/services.css`, `js/pages/services.js` | Mistral |
| `404.html`, `css/pages/404.css` | Mistral |
| `assets/favicon.svg`, `assets/logo.svg` | Mistral |
| `netlify.toml`, `robots.txt`, `README.md` | Mistral |
| `notes/mistral.md` | Mistral |
| `assets/img/*` (photos), `PRD.md` | Kayden (human) |

During Phase 0 only, Claude Code creates every file as an empty or template shell. After that, ownership above applies.

### 6.5 Notes files
Each `notes/<agent>.md` has three sections:
```md
## Progress log
- (date) What I finished, what's next.

## Requests for Claude Code
- Need X in components.css because Y. (Claude Code handles these in Phase 2.)

## Known issues
- Anything broken or unfinished.
```

---

## 7. Page specifications

### 7.1 Home (`index.html`) — Claude Code
The showpiece. Owners will spend most of their time here. Sections in order:

1. **Hero (full viewport height)**
   - Background: warm shop photo (`hero.webp`) with a golden-hour gradient overlay (marigold to adobe, low opacity) so text stays readable.
   - **Signature effect: swaying palm shadows.** Two or three palm-frond silhouettes (inline SVG, blurred, mesquite at ~15% opacity) laid over the top corner, slowly swaying like they're moving in a breeze (long, gentle CSS keyframes, 8–14s, slightly out of sync).
   - **Load sequence (the one orchestrated moment):** headline "Sharp cuts, slow afternoons." in Shrikhand reveals word by word, then the subhead fades in ("Neighborhood barbershop in El Cajon since 2014."), then both buttons rise in ("Book a chair" primary, "See services" ghost). Total ≤ 1.6s.
   - `.sticker` badge in a corner reading "Walk-ins welcome ✦ El Cajon ✦ Since 2014 ✦".
   - Subtle scroll cue at the bottom.
2. **Story.** Two columns on desktop: arch-framed shop photo (`shop-interior.webp`, `data-reveal="arch"`) and the story text (3.1). Below it, four stats from `SHOP.stats` using `data-count-to`: 12 years, 30,000+ cuts, 4 barbers, 4.9 rating. Present these as part of the story layout, not as a generic stat-card row.
3. **Services teaser.** The three `featured: true` services, each with photo (`service-*.webp`), name, price, duration, and a link to `services.html`. Plus a "See the full menu" button.
4. **Before & after (the second signature moment).** Large draggable comparison slider showing one `GALLERY` pair at a time.
   - Drag handle in the middle (a circular rust handle with a small razor or arrows icon). Works with mouse, touch, and keyboard. Build it on a visually hidden `<input type="range">` so it's accessible.
   - On first scroll into view, the handle does one gentle "demo wiggle" so people know to drag it.
   - Below the slider: thumbnails or tabs to switch between the six cuts, showing style name and barber. Switching crossfades the images.
5. **Meet the team teaser.** Four arch-framed portraits in a row (2×2 on mobile) with names and roles. Hover/focus gently lifts the portrait. Links to `barbers.html`.
6. **Reviews marquee.** Heading with average rating ("4.9 from 300+ reviews") and `.stars`. Two rows of review cards scrolling slowly in opposite directions, infinite loop, pause on hover/focus. With reduced motion: a static grid instead.
7. **Visit us.** Hours (`data-hours-list`, today highlighted), address, phone, email, and a **stylized illustrated map card** (inline SVG of simple streets, a palm, and a pin; don't embed Google Maps since the address is fictional). "Get directions" links to `#`.
8. **CTA band** ("Your chair's waiting.").
9. **Golden-hour scroll effect.** As the user scrolls down Home, a fixed gradient overlay very slightly warms the page (opacity 0 → ~0.08). Use `requestAnimationFrame`, keep it extremely subtle.

### 7.2 Services (`services.html`) — Mistral
1. **Page hero:** h1 "Services & prices", lead "Every service comes with a hot towel, a cold drink, and zero rush."
2. **Category jump links:** a row of `.chip`-style links (Cuts, Beard & shave, Combos, Add-ons) that smooth-scroll to each group. On mobile, the row scrolls horizontally and sticks under the header.
3. **The menu (main feature).** Styled like a classic barbershop price board printed on stucco-colored card stock:
   - Rendered from `SERVICES` and `SERVICE_CATEGORIES` in `js/pages/services.js`.
   - Each category is a section with an `h2`.
   - Each item: name on the left, a **dotted leader line** stretching across, and the price on the right in Shrikhand. Duration as a `.chip`, description underneath in `--color-mesquite-soft`.
   - Each item has a small "Book this" link to `book.html?service=<id>`.
   - Add-ons use `formatPrice(price, true)` to show "+$10".
   - On hover/focus, the row's background warms slightly and the leader line darkens. Keep it subtle.
4. **What to expect:** a short three-step strip (this genuinely is a sequence, so numbering is fine): 1 Book online or walk in, 2 Grab a cold water and relax, 3 Leave looking sharp.
5. **FAQ:** `.accordion` items rendered from `FAQ`.
6. **CTA band.**

Also from Mistral:
- **404 page:** page hero style, h1 "This page got a little too faded.", short line, button "Back to home". A single palm-shadow sway is fine; keep it light.
- **`assets/logo.svg`:** palm frond crossed with a straight razor, simple line art, uses `#8C3B1E` stroke, square viewBox, readable at 36px.
- **`assets/favicon.svg`:** simplified version of the logo mark that reads at 16px.
- **`netlify.toml`:** cache headers for `/css/*`, `/js/*`, `/assets/*` (1 week) and a `/*` → `/404.html` 404 rule.
- **`robots.txt`:** disallow all (demo site).
- **`README.md`:** project description, how to run locally, folder structure, credits, and the demo disclaimer.
- **Meta tags:** write the `<title>` and `description` for every page in your notes file so each owner can paste them in (Claude Code verifies in Phase 2):
  - Home, Services, Barbers, Book, 404.

### 7.3 Barbers (`barbers.html`) — Replit Agent
1. **Page hero:** h1 "Meet the barbers", lead "Four chairs, four styles, one shop that feels like home."
2. **Barber cards (main feature).** Rendered from `BARBERS`. Grid: 1 column mobile, 2 columns tablet, 4 or 2×2 desktop (pick whichever looks best).
   - **Front:** arch-framed portrait, name, role, years ("14 years behind the chair"), specialty `.chip`s, and a "More about Marco" button.
   - **Back (3D flip, `rotateY` with `perspective`, `--ease-spring`):** bio, quote in italic, working days (derived from `days`, e.g. "Tue–Sat"), Instagram handle (link to `#`), and a primary button "Book with Marco" → `book.html?barber=marco`, plus a button to flip back.
   - Flip is triggered by the button (click/tap/Enter). Optional hover-flip on desktop is OK, but the button must always work. Manage focus sensibly and use `aria-expanded` / `aria-pressed` on the flip control.
   - Reduced motion: crossfade instead of flip.
3. **Recent work gallery.** Filter chips: "All", "Marco", "Dee", "Tommy", "Sami". Grid of `GALLERY` "after" images with style name and barber. Filtering animates items smoothly (fade/scale out and in; FLIP technique is a bonus). Clicking an image opens a lightbox `<dialog>` showing before and after side by side (stacked on mobile), with close button, Escape to close, and arrow keys for next/previous.
4. **Hiring note (small):** "Are you a barber who loves this vibe? Call (619) 555-0147." Simple, one line, styled quietly.
5. **CTA band.**

### 7.4 Book (`book.html`) — Replit Agent
A multi-step booking flow that feels real, smooth, and satisfying.

**Layout**
- Page hero (short): h1 "Book a chair", lead "Takes about a minute."
- Desktop: steps on the left, a sticky **summary card** on the right (selected service, barber, date/time, total price and duration, updating live with a small highlight animation when a value changes).
- Mobile: summary collapses into a sticky bottom bar showing total and a "Continue" button; tapping the bar expands the summary.
- **Progress bar** at the top with step names (Service, Barber, Time, Details, Confirm). The fill animates between steps.

**Steps**
1. **Service.** Selectable cards from `SERVICES` (excluding `addon: true`) grouped by category, plus optional add-on checkboxes. Preselect from `?service=<id>` if present.
2. **Barber.** Cards with portrait, name, specialties, plus a "First available" option. Preselect from `?barber=<id>`.
3. **Date & time.**
   - Horizontal scrollable strip of the next 14 days (day name + date). Days the shop is closed (Monday) or the chosen barber doesn't work are shown disabled with "Closed" or "Off".
   - Time slots every 30 minutes from opening until (closing time − service duration).
   - Some slots appear "booked" using a deterministic fake-availability function so results look realistic and don't change on reload:
     ```js
     function isBooked(dateISO, barberId, time) {
       const key = `${dateISO}|${barberId}|${time}`;
       let h = 0;
       for (const c of key) h = (h * 31 + c.charCodeAt(0)) >>> 0;
       return h % 100 < 35; // ~35% of slots taken
     }
     ```
     For "First available", a slot is open if any working barber is free; assign the first free barber in `BARBERS` order and show who it'll be.
   - Today's past times are disabled.
4. **Details.** Name, phone, email, optional notes ("Anything we should know?"). Real `<label>`s, `autocomplete` attributes, inline validation on blur with clear messages ("Enter a 10-digit phone number."). Phone auto-formats as `(619) 555-0147` while typing.
5. **Confirm.** Full summary with an "Edit" link next to each item that jumps back to that step. Primary button: "Confirm booking".

**Step transitions:** outgoing step slides/fades left, incoming slides in from the right (reverse when going back). Move focus to the new step's heading. "Continue" stays disabled until the step is valid. Browser back button should go to the previous step (use `history.pushState` with `?step=`), not leave the page.

**Submission (Netlify Forms)**
- Include a hidden static form in `book.html` so Netlify detects it at deploy:
  ```html
  <form name="booking" data-netlify="true" netlify-honeypot="bot-field" hidden>
    <input name="service"><input name="addons"><input name="barber">
    <input name="date"><input name="time"><input name="name">
    <input name="phone"><input name="email"><textarea name="notes"></textarea>
    <input name="bot-field">
  </form>
  ```
- On confirm, `fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams({ 'form-name': 'booking', ...fields }).toString() })`.
- Show the confirmation screen **whether or not the request succeeds** (it will fail locally and on GitHub Pages, and that's fine for a demo). Log errors to the console only.

**Confirmation screen (the payoff moment)**
- A rust circle draws itself in, then a checkmark strokes in (SVG `stroke-dashoffset` animation).
- A short burst of small palm-leaf and star shapes (CSS or canvas, ~1s, then gone).
- Heading: "You're booked, Jordan." (uses their first name). Summary of the appointment.
- "Add to calendar" button that downloads an `.ics` file generated client-side.
- Small note in `--color-mesquite-soft`: "Heads up: this is a demo site, so no real appointment was made."
- Button: "Back to home".

---

## 8. Images (Kayden sources these)

Agents reference these exact paths. Until Kayden adds the real files, images will be missing; `base.css` gives `img` a `--color-stucco-light` background and all images have `width`/`height`, so layouts won't collapse. Do not substitute remote image URLs.

| File | Size | Content |
|---|---|---|
| `hero.webp` | 1920×1080 | Warm, sunlit barbershop interior or a barber mid-cut, golden light |
| `shop-interior.webp` | 900×1200 | Shop interior, chairs, plants, warm tones |
| `service-classic-cut.webp` | 800×600 | Classic cut in progress |
| `service-skin-fade.webp` | 800×600 | Close-up of a fade |
| `service-hot-towel.webp` | 800×600 | Hot towel shave |
| `barber-marco.webp`, `barber-dee.webp`, `barber-tommy.webp`, `barber-sami.webp` | 800×1000 | Portraits; warm light, similar framing across all four |
| `cut-01-before.webp` … `cut-06-after.webp` | 1000×1000 | Six before/after pairs (12 images), same framing within each pair |

- Sources: Unsplash or Pexels (free license). Record each photo's author and link in `assets/img/CREDITS.md`.
- Compress to WebP, aim for ≤ 200 KB each (hero ≤ 350 KB). [Squoosh](https://squoosh.app) works well.
- Keep a consistent warm color grade across all photos so the site feels cohesive.

---

## 9. Definition of done

### 9.1 Global checklist (Claude Code verifies in Phase 3)
- [ ] All pages share identical header, footer, fonts, and tokens.
- [ ] Nav highlights the current page; mobile menu opens, closes with Escape, and returns focus to the toggle.
- [ ] No horizontal scroll at 375px, 768px, 1280px, 1920px.
- [ ] All links work; every "Book" link passes the right query params.
- [ ] Keyboard-only run-through of every page works with visible focus.
- [ ] Reduced motion: no swaying, marquee, flips, or confetti; content all visible.
- [ ] JS disabled: content (except booking flow and data-rendered lists) still readable; nothing permanently invisible.
- [ ] No console errors.
- [ ] Lighthouse mobile: Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95.
- [ ] `noindex` meta on every page, `robots.txt` disallows all.
- [ ] Demo disclaimer in every footer and on booking confirmation.
- [ ] No raw hex colors or font names outside `tokens.css`.

### 9.2 Per-page checklist
- **Home:** hero load sequence plays once and smoothly; palm shadows sway; counters count; slider works with drag, touch, and arrow keys; marquee pauses on hover; today's hours highlighted.
- **Services:** menu renders from data with dotted leaders; jump links scroll correctly under the sticky header; "Book this" preselects the service; FAQ opens and closes smoothly.
- **Barbers:** cards flip with button and keyboard; "Book with X" preselects the barber; gallery filters animate; lightbox opens, navigates, and closes with Escape.
- **Book:** query params preselect; closed/off days disabled; fake availability is stable across reloads; validation messages are clear; back button moves between steps; confirmation animation and `.ics` download work; summary updates live.
- **404:** displays on a bad URL when deployed to Netlify.

---

## 10. Future ideas (not in scope)
- Swap in a real shop's content to turn this into a client site in a day.
- Real booking integration (Square Appointments, Booksy, or Calendly embed).
- Google Business Profile reviews pulled in live.
- Spanish-language toggle (very relevant for East County).
